import Navigation from "../Navigation/Navigation"
import styles from "./Header.module.css"
import Wrapper from '../UI/Wrapper';

const Header = (props) => {
    return(
        
        <header className={styles["main-header"]}>
            <h1>Storage App</h1>
            <Navigation 
                userLogState = {props.userLoggedIn}
                userLogout = {props.onLogoutClick}    
            />
        </header>
        
    )
}

export default Header;