import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            quantity,
            price
        }

        console.log('Agregaste al carrito: ', objProduct);

    }

    return (
        <article className={classes.cartDetail}>
            <h3>{name}</h3>
            <img src={img} style={{ height: 200 }} />
            {/* <p>Categoria: {category}</p> */}
            <h4>${price}</h4>
            <p>Descripción: {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        </article>
    )
}

export default ItemDetail