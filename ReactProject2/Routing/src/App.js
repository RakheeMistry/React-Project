import './App.css';
// import UserAxios from './components/axios/UserAxios';
import Products from './components/products/Products';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Support from './components/support/Support';
import ProductDetails from './components/productDetails/ProductDetails';
import PageNotFound from './components/pagenotfound/PageNotFound';

function App() {
  return (
    <div className="App">
      {/* <UserAxios/> */}
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/support' element={<Support/>} />
      <Route path='/productDetails/:id' element={<ProductDetails/>} />
      <Route path='*' element={<PageNotFound/>} />
      </Routes>
      
    </div>
  );
} 

export default App;
