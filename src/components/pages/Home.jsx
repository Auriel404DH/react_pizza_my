import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort, PizzaBlock } from '../index';
import { categoryAC } from './../../redux/actions/filters';

const categories = ['Meat', 'Vegan', 'Grill', 'spicy', 'closed'];
const sort = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alfavite' },
];

function Home() {
  const dispatch = useDispatch();

  const { pizzas } = useSelector((state) => {
    return {
      pizzas: state.pizzaReduser.items,
    };
  });

  const onClickCategory = React.useCallback((index) => {
    dispatch(categoryAC(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onClickCategory} items={categories} />
        <Sort items={sort} />
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
