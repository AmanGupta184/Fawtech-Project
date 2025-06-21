import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/Products';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
    </Routes>
   </div>
  );
}

export default App;
