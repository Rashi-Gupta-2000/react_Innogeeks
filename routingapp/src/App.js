import Welcome from './Components/Welcome/Welcome';
import Product from './Components/Products/Products';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from "./Components/MainHeader/Header"
import { Fragment } from 'react';
import ProductDetails from './Components/Products/ProductDetails';
import NotFound from './Components/NotFound';
import Authcontext from './Components/context';

function App() {
  return (
    <Fragment>
      {/* <Authcontext.Provider value={{name:'pooja'}}>
        <Header/>
      </Authcontext.Provider> */}
      {/* Replacement for Redux */}
      <Header/>
      <main>
        <Routes>
          {/*<Route path='/' element={<Welcome/>} />*/}
          <Route path='/' element={<Navigate to ="/welcome"/>} />
          {/*<Route path='/welcome/*' element={<Welcome/>} />*/}
          <Route path='welcome/*' element={<Welcome/>}>
            <Route
              path='guest-user'
              element={<p>This is guest user from app.js</p>} 
            />
            <Route
              path='parent-user'
              element={<p>This is parent user from app.js</p>} 
            />
          </Route>
          <Route path='/product' element={<Product/>} />
          <Route 
            path='/product/:productID' 
            element={<ProductDetails/>} 
          />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </main>
    </Fragment>
  );
}

export default App;
