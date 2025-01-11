import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
const AppMain = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([{ id: 0, name: '', price: '', img: '' }]);
  const addToCart = (item: any) => {
    setCart([item, ...cart]);
    setTotal((total) => total + parseInt(item.price));
    localStorage.setItem('total',total.toString())
    
  };
  return <App cart={cart} addToCart={addToCart} total={total} />;
};
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppMain />

  </StrictMode>
);
