import classes from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) document.title = capitalizeFirstLetter(categoryId)

        return () => {
            document.title = 'Antílope accesorios'
        }
    }, [categoryId])

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.error(error);
            })
    }, [categoryId])

    return (
        <div className={classes.itemListContainer}>
            <h1 className={classes.welcomePhrase}>{greeting + (categoryId ?? '')}</h1>
            <div className={classes.productsGrid}>
                <ItemList products={products} />
            </div>
        </div>
    )
}


export default ItemListContainer