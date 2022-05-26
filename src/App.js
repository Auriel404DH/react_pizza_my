import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './components/pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzaReduser.items,
//   };
// };

// export default connect(mapStateToProps, { pizzaAC })(App);

export default App;
