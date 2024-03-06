import { collection, query, getDocs, where, documentId, writeBatch, addDoc } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import classes from "./Checkout.module.css";

const Checkout = () => {
    const { cart, total, clearCart } = useCart();

    const createOrder = async (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total
        };

        const batch = writeBatch(db);
        const outOfStock = [];

        const idsInCart = cart.map(prod => prod.id);
        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', idsInCart));

        const querySnapshot = await getDocs(productsCollection);
        const { docs } = querySnapshot;

        docs.forEach(doc => {
            const fields = doc.data();
            const stockDb = fields.stock;

            const productAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productAddedToCart.quantity;

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...fields });
            }
        });

        if (outOfStock.length === 0) {
            batch.commit()
                .then(async () => {
                    const orderCollection = collection(db, 'orders');
                    const { id } = await addDoc(orderCollection, objOrder);
                    clearCart();
                })
                .catch(error => {
                    console.error('Error al agregar la orden:', error);
                });
        } else {
            // showNotification('Productos sin stock'); // Esta función no está definida aquí
        }
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <>
            <h1>Detalle de compra</h1>
            <div>
                <h2>Resumen:</h2>
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <div className={classes.detail}>
                                <h3>{product.name}</h3>
                                <p>Cantidad: {product.quantity}</p>
                                <p>Precio unitario: ${product.price}</p>
                                <p>Precio total: ${product.quantity * product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <h2>Total: ${total}</h2>
            </div>
            <button onClick={handleClearCart} className={classes.clearCart}>Limpiar carrito</button>
            <Form onSubmit={createOrder} />
        </>
    );
};

export default Checkout;
