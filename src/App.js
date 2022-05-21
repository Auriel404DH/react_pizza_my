import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './components/pages';
import { pizzaAC } from './redux/actions/pizzas';

function App(props) {

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((response) => {
      props.pizzaAC(response.data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzas={props.items} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzaReduser.items,
  };
};

export default connect(mapStateToProps, { pizzaAC })(App);
