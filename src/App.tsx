import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import CartItems from "./components/cart/cart-container/cart-container"
import Homepage from "./container/Homepage/homepage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/cart' element={<CartItems/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
