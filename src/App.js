import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.js';
import './App.css';
import Home from './pages/home';
import Cars from './pages/cars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cars' element={<Cars />}></Route>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
