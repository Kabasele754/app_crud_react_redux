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
import ContactForm from './components/pages/ContactForm';
import CarteIdentite from './components/pages/CarteIdentite';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function App() {
  return (
    <Provider store={Store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <BrowserRouter>
            <div className='header'>
              <Nav></Nav>
            </div>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/product/' element={<ProductList></ProductList>}></Route>
                <Route path='/product/add' element={<AddProduct></AddProduct>}></Route>
                <Route path='/product/edit/:code' element={<EditProduct></EditProduct>}></Route>
                <Route path='/contact/' element={<ContactForm></ContactForm>}></Route>
                <Route path='/cart/' element={<CarteIdentite></CarteIdentite>}></Route>
              </Routes>
            </div>
          </BrowserRouter>
          <ToastContainer className="toast-position" position="bottom-right"></ToastContainer>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
