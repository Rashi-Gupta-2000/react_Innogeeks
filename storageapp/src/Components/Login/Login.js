import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "./Login.css"
import {useState,useEffect} from 'react'

const Login = (props) => {
    //email
    const [userEmail, setUserEmail] = useState('')
    //const [emailIsValid, setEmailIsValid] = useState()

    //password
    const [userPassword, setUserPassword] = useState('')
    //const [passwordIsValid, setPasswordIsValid] = useState();

    //Form
    //const [formIsValid, setFormIsValid] = useState(false)
    //console.log("In Login JS")

    const newEmailValidation = userEmail.includes("@"); //true

    const newPassword = userPassword.trim().length > 6
    console.log(newEmailValidation);

    let formIsValid = false;
    if(newEmailValidation && newPassword)
    {
        formIsValid = true;
    }

    // useEffect(() => {
    //     const identifier = setTimeout(() => {
    //         console.log("In Login Effect")
    //         setFormIsValid(userEmail.includes("@") && userPassword.trim().length > 6);
    //     },5000)

    //     //clean up - let not the default functionality run
    //     return () => {
    //         console.log("clean up")
    //         clearTimeout(identifier)
    //     };
    // },[userEmail,userPassword])

    //Email
    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value)
        // setFormIsValid(
        // event.target.value.includes('@') && userPassword.trim().length > 6 
        // );
    }

    //Email Blur 
    // const emailBlurHandler = () => {
    //     setEmailIsValid(userEmail.includes('@'))
    // }

    //Password
    const passwordChangeHandler = (event) => {
        setUserPassword(event.target.value)
        // setFormIsValid(
        //     event.target.value.trim().length > 6 && userEmail.includes("@")
        // )
    }

    //Password Blur 
    // const passwordBlurHandler = () => {
    //     setPasswordIsValid(userPassword.trim().length > 6)
    // }

    //Submit
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("UserEmail:", userEmail, "Password:", userPassword )
        props.onLoginClick(userEmail,userPassword);
    }
    return(
        <Card className="login">
            <form onSubmit={submitHandler}>
                <div className = {`control ${newEmailValidation == false ? "invalid" : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" 
                        onChange={emailChangeHandler} 
                        //onBlur={emailBlurHandler}
                    />
                </div>
                <div className = {`control ${newPassword == false ? "invalid" : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                        onChange={passwordChangeHandler} 
                        //onBlur={passwordBlurHandler}
                    />
                </div>
                <div className = "actions">
                    <Button type="submit" btnDisable = {!formIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;