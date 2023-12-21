import CartWidget from '../CartWidget/CartWidget'
import classes from './NavBar.module.css'
import logo from './assets/logoNegro.png'

const NavBar = () => {
    return (
        <nav>
            <img src={logo} className={classes.logo} />
            <div className={classes.nav}>
                <button>COLLARES</button>
                <button>PULSERAS</button>
                <button>EAR CUFF</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar