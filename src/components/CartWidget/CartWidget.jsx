import classes from './CartWidget.module.css'
import bolsa from './assets/bolsa.png'

const CartWidget = () => {
    return (
        <div>
            <img src={bolsa} className={classes.bolsa} />
            0
        </div>
    )
}
export default CartWidget