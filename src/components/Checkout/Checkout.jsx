import { collection, query, getDocs, where, documentId, writeBatch } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
// importamos el formulario
import { db } from "../../services/firebase/firebaseConfig"
//import { useNotification } from "../../notification/NotificationService"

const Checkout = () => {
    const { cart, total, clearCart } = useCart()
    //const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total
        }

        const batch = writeBatch(db)
        const outOfStock = []

        const idsInCart = cart.map(prod => prod.id)
        const produtsCollection = query(collection(db, 'products'), where(documentId(), 'in', idsInCart))

        const querySnapshot = await getDocs(produtsCollection)
        const { docs } = querySnapshot

        docs.forEach(doc => {
            const fields = doc.data()
            const stockDb = fields.stock

            const productsAddedToCart = cart.find(prod => prod.id)
            const prodQuantity = productsAddedToCart.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...fields })
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()

            const orderCollection = collection(db, 'orders')

            const { id } = await addDoc(orderCollection, objOrder)

            clearCart()

        } else {
            showNotification('Productos sin stock')

        }
    }


    return (
        <>
            <h1>CHECKOUT</h1>
            {/* crear formulario con: onCreate={createOrder} */}
            <button onClick={createOrder}>Enviar</button>
        </>
    )
}

export default Checkout