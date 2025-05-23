import './App.css';
import LoginForm from './pages/loginForm';
import { Routes, Route } from 'react-router-dom';
import RegistrarProducto from './pages/productForm';
import Layout from './components/layout';
import FectchPrducts from './pages/fetchProductos';
import Sidebar from './components/sidebarComponente';
import FetchCategory from './pages/fetchCategory';

function App() {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <Routes>
        {/* Ruta de login */}
        <Route path='/' element={<LoginForm />} />

        {/* Rutas protegidas dentro de Layout */}
        <Route path='/app' element={<Layout />}>

          <Route path='RegistrarProducto' element={<RegistrarProducto />} />
          <Route path='FectchPrducts' element={<FectchPrducts />} />
          <Route path='FetchCategory/:categoriaID'element={<FetchCategory></FetchCategory>}></Route>
          {/* Puedes agregar más rutas aquí como: */}
          {/* <Route path='categoria' element={<Categoria />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
