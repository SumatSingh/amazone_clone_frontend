import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import NewNavbar from './components/Header/NewNavbar';
import Main from './components/Home/Main/Main';

import {Routes, Route } from 'react-router-dom';
import SignIn from './pages/UserPage/SignIn';
import SignUp from './pages/UserPage/SignUp';
import Cart from './pages/CartPage/Cart';
import BuyNow from './pages/buynow/BuyNow';
import Empty from './pages/buynow/Empty';
import NotRegister from './pages/UserPage/NotRegister';

function App() {
  return (
    <>
     <Navbar />
     <NewNavbar />
     <Routes>
       <Route path='/' element={<Main />}/>
       <Route path='/login' element={<SignIn />}/>
       <Route path='/register' element={<SignUp />}/>
       <Route path='undefine_user' element={<NotRegister />}/>
       <Route path='/getproductsone/:id' element={<Cart />}/>
       <Route path='buynow' element={<BuyNow />}/>
     </Routes>
     <Footer />
    </>
  );
}

export default App;
