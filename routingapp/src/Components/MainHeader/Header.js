import styles from "./Header.module.css"
import {Link, NavLink} from 'react-router-dom'
import { useContext } from "react"
import Authcontext from "../context"

const Header = () => {
    // const ctx = useContext(Authcontext)
    return (
        <header className={styles.header}>
            <nav>
                <ul> 
                    {/* className={ctx.name} */}
                    <li>
                        {/*<Link to="/welcome">Welcome</Link>*/}
                        <NavLink 
                            to='/welcome' 
                            className={(activeValue) => activeValue.isActive ? styles.active : ""}>
                            Welcome
                        </NavLink> 
                    </li>
                    <li>
                        {/*<Link to="/product">Product</Link>   -- does not stay highlighted after click but navlink stays highlighted*/}
                        <NavLink 
                            to='/product' 
                            className={(activeValue) => activeValue.isActive ? styles.active : ""}>
                            Product
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;