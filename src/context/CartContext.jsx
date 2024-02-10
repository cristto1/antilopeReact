import { useState, createContext, useContext } from "react"

const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    totalQuantity: 0,
    total: 0,
    clearCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart);

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log('El producto ya está agregado');
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
            // * prod.price
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {

    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}