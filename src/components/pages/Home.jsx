import React from 'react';
import { Categories, Sort, PizzaBlock } from '../index';

function Home({ pizzas }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Meat', 'Vegan', 'Grill', 'spicy', 'closed']} />
        <Sort items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza, index) => {
          return <PizzaBlock key={`${pizza}_${index}`} {...pizza} />;
        })}
      </div>
    </div>
  );
}

export default Home;
