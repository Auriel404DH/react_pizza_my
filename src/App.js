import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './components/pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((response) => {
      setPizzas(response.data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzas={pizzas} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
