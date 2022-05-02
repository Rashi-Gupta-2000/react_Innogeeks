import { Fragment } from "react";
import { Route, Routes, Link, Outlet, useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const buttonClickHandler = () => {
        navigate("/product");
        //navigate(-1)
    }
    return (
        <Fragment>
            <h1>Welcome Page</h1>
            <Link to='guest-user'>Guest User</Link> <br/>
            <Link to='parent-user'>Parent User</Link> <br/>
            <Outlet/>
            {/* <Routes>
                <Route 
                    path="guest-user" 
                    element= {<p>This is for guest user</p>} 
                />
            </Routes> */}
            <button onClick={buttonClickHandler}>Visit Products</button>
            
            <button>
                <Link to="/product">Product</Link>
            </button>
        </Fragment>
    )
};

export default Welcome;