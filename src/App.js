import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/Products';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
