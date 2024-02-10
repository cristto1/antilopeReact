import { useState, useEffect } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from "./ItemDetailContainer.module.css"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc, query } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        if (product) document.title = product.category

        return () => {
            document.title = 'Antílope accesorios'
        }
    }, [product])

    useEffect(() => {

        const productsDocument = doc(db, 'products', productId)

        getDoc(productsDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productsAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error("Hay un error: ", error)
            })

        // getProductById(productId)
        //     .then(product => {
        //         setProduct(product)
        //     })

    }, [productId])

    return (
        <div className={classes.detail}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer