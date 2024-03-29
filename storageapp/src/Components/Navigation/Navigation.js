import Button from "../UI/Button/Button"
import "./Navigation.css"

const Navigation = (props) => {
    return (
        <nav className="nav">
            <ul>
                {
                    props.userLogState ? (
                        <li>
                            <a href="/users">Users</a>
                        </li>
                    ) : ("")
                }

                {
                    props.userLogState ? (
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                    ):("")
                }

                <li>
                    <a href="/about-us">About Us</a>
                </li>
                
                {
                    props.userLogState ? (
                        <li>
                            <Button btnClassName = "btn" onBtnClick={props.userLogout}>Logout</Button>
                        </li>
                    ):("")
                }
            </ul>

        </nav>
    )
} 
export default Navigation;