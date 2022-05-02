import Login from './Components/Login/Login';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {Fragment, useEffect, useState} from 'react'
import UserData from './Components/RefFile/UserData';
import {Routes,Route} from 'react-router-dom';
import Users from './Components/User/Users';
import Profile from './Components/User/Profile';

function App() {
  //console.log("In App JS")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [btnState, setbtnstate] = useState(false)

  //
  

  useEffect(() => {
    console.log("In use effect")
    const localStorageData = localStorage.getItem("userLoginState");
    if(localStorageData === "LOGGED_IN"){
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password) => {
    console.log(email,password);
    setIsLoggedIn(true)
    localStorage.setItem("userLoginState","LOGGED_IN")
  }

  //logout
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userLoginState")
  };

  const btnClickHandler = () => {
    setbtnstate((btnState) => !btnState)
  }

  return (
    <Fragment>
      <Header userLoggedIn = {isLoggedIn} onLogoutClick={logoutHandler}/>
      <main>
        {!isLoggedIn ? (
          <Login onLoginClick = {loginHandler}/>
         ) : (
          <Home onLogoutClick ={logoutHandler}/>
        )}
        {/* {isLoggedIn ? <Login /> : ""}
        {isLoggedIn ? <Home /> : ""} 
        <button onClick={btnClickHandler}>Click</button>*/}
        
        <Routes>
          <Route path='/users' element={<Users/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        
        <UserData/>
      </main>
    </Fragment>
    
  );
}

export default App;

