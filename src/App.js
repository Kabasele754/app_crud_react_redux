import './App.css';
import { Home } from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProductList } from './components/products/ProductList';
import { AddProduct } from './components/products/AddProduct';
import { EditProduct } from './components/products/EditProduct';
import { Nav } from './components/pages/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='header'>
        <Nav></Nav>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product' element={<ProductList></ProductList>}></Route>
          <Route path='/product/add' element={<AddProduct></AddProduct>}></Route>
          <Route path='/product/edit/:code' element={<EditProduct></EditProduct>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
  );
}

export default App;