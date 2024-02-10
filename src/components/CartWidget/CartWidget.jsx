import classes from './CartWidget.module.css'
import bolsa from './assets/bolsa.png'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div className={classes.bagContainer}>
            <img src={bolsa} className={classes.bolsa} />
            {totalQuantity}
        </div>
    )
}
export default CartWidget