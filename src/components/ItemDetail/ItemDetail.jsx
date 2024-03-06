import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            name,
            quantity,
            price
        }

        addItem(objProductToAdd)
        setQuantity(quantity)

    }

    return (
        <article className={classes.cartDetail}>
            <h3>{name}</h3>
            <img src={img} style={{ height: 200 }} />
            {/* <p>Categoria: {category}</p> */}
            <h4>${price}</h4>
            <p>Descripción: {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd} />
            <Link to="/checkout">
                <button className={classes.checkout}>Detalle de Compra</button>
            </Link>
        </article>
    )
}

export default ItemDetail