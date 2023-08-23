import Navbar from './components/Navbar';
import './App.css';
import Cartpag from './components/Cartpag';
import ProductCard from './components/ProductCard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<Cartpag/>} />
          <Route path="*" element={"Page Not Found"} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
