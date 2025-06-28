import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/Products';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import { ThemeProvider } from './Context/ThemeContext'; // Assuming you have a ThemeContext for theme management
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
   <ThemeProvider>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
   </ThemeProvider>
  );
}

export default App;
