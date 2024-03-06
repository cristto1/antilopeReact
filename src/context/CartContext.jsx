import { useState, createContext, useContext, useMemo } from "react";

const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    totalQuantity: 0,
    total: 0,
    clearCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
        } else {
            console.log('El producto ya está agregado');
        }
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id);
        setCart(cartUpdated);
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const totalQuantity = useMemo(() => {
        return getTotalQuantity();
    }, [cart]);

    const getTotal = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    };

    const total = getTotal();

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
