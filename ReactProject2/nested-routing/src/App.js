import './App.css';
import Home from './components/home/Home';
import { Route,Routes } from 'react-router-dom';
import Profile from './components/profile/profile';
import Products from './components/products/Products';
import Cart  from './components/cart/Cart';
import Nav  from './components/nav/Nav.js';
import PageNotFound from './components/pagenotfound/PageNotFound.js';
import Electronics from './components/products/Electronics.js';
import MenClothing from './components/products/MenClothing.js';
import WomenClothing from './components/products/WomenClothing.js';
import Jewelery from './components/products/Jewelery.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/products" element={<Products/>} >
        {/* <Route path="" element={<Navigate to="electronics"/>} />  //default routing with Navigate*/} 
        <Route path="electronics" element={<Electronics/>}/>
        <Route path="jewelery" element={<Jewelery/>}/>
        <Route path="menclothing" element={<MenClothing/>}/>
        <Route path="womenclothing" element={<WomenClothing/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>} /> 
      <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
