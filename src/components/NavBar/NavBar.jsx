import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import classes from './NavBar.module.css'
import logo from './assets/logoNegro.png'

const NavBar = () => {
    return (
        <nav className={classes.navContainer}>
            <img src={logo} className={classes.logo} />
            <div className={classes.nav}>
                <Link to={{ pathname: '/category/collares' }} className={classes.button}>COLLARES</Link>
                <Link to={{ pathname: '/category/pulseras' }} className={classes.button}>PULSERAS</Link>
                <Link to={{ pathname: '/category/earcuff' }} className={classes.button}>EAR CUFF</Link>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar