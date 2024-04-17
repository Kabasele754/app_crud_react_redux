import './App.css';
import { Home } from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProductList } from './components/products/ProductList';
import { AddProduct } from './components/products/AddProduct';
import { EditProduct } from './components/products/EditProduct';
import { Nav } from './components/pages/Nav';
import { Provider } from 'react-redux';
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className='header'>
        <Nav></Nav>
        </div>
        <div className='container'>

      
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product' element={<ProductList></ProductList>}></Route>
          <Route path='/product/add' element={<AddProduct></AddProduct>}></Route>
          <Route path='/product/edit/:code' element={<EditProduct></EditProduct>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
    
  );
}

export default App;
