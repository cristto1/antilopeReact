import { useCart } from "../../context/CartContext"

const CartView = () => {

    const { cart, total, removeItem } = useCart()

    return (
        <>
            <h1>CART</h1>
            <section>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h3>{prod.name}</h3>
                                <h4>Cantidad: ${prod.quantity}</h4>
                                <h4>Precio articulo: ${prod.price}</h4>
                                <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                                <button onClick={() => removeItem(prod.id)}>Eliminar articulo</button>
                            </div>
                        )
                    })
                }
            </section>

            <section>
                <h1>Total: ${total}</h1>
            </section>

            <section>
                <Link to='/checkout'>Checkout</Link>
            </section>
        </>
    )
}

export default CartView