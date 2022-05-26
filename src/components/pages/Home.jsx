import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort, PizzaBlock } from '../index';
import { categoryAC, sortAC } from './../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import PizzaLoading from '../pizzaBlock/PizzaLoading';

const categories = ['Meat', 'Vegan', 'Grill', 'spicy', 'closed'];

const sort = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();

  const { pizzas, isLoading, sortBy, category } = useSelector((state) => {
    return {
      pizzas: state.pizzaReduser.items,
      isLoading: state.pizzaReduser.isLoading,
      sortBy: state.filterReduser.sortBy,
      category: state.filterReduser.category,
    };
  });

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onClickCategory = React.useCallback((index) => {
    dispatch(categoryAC(index));
  }, []);

  const setTake = React.useCallback((type) => {
    dispatch(sortAC(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories active={category} onClickItem={onClickCategory} items={categories} />
        <Sort take={sortBy.type} items={sort} setTake={setTake} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? pizzas.map((pizza, index) => {
              return <PizzaBlock key={`${pizza}_${index}`} isLoading={true} {...pizza} />;
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoading key={index} />)}
      </div>
    </div>
  );
}

export default Home;
