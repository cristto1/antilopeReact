import { Link } from "react-router-dom"

const Item = ({ id, name, img, category, price }) => {
    return (
        <article>
            <h3>{name}</h3>
            <img src={img} style={{ height: 200 }} />
            <p>Categoria: {category}</p>
            <h4>${price}</h4>
            <button>
                <Link to={`/detail/${id}`}>Ver Detalle</Link>
            </button>
        </article>
    )
}

export default Item
