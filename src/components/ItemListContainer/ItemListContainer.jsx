import classes from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
//import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'

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

        const produtsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(produtsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error("Hay un error: ", error)
            })

        // const asyncFunction = categoryId ? getProductByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(products => {
        //         setProducts(products)
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })
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