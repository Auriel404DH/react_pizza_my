import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort, PizzaBlock } from '../index';
import { categoryAC, sortAC } from './../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { addPizza } from '../../redux/actions/cart';
import PizzaLoading from '../pizzaBlock/PizzaLoading';

const categories = ['Meat', 'Vegan', 'Grill', 'spicy', 'closed'];

const sort = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();

  const { pizzas, isLoading, sortBy, category, cartItems } = useSelector((state) => {
    return {
      pizzas: state.pizzaReduser.items,
      isLoading: state.pizzaReduser.isLoading,
      sortBy: state.filterReduser.sortBy,
      category: state.filterReduser.category,
      cartItems: state.cartReduser.items,
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

  const addPizzaToCart = (obj) => {
    dispatch(addPizza(obj));
  };
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
              return (
                <PizzaBlock
                  cartCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                  onAddPizza={addPizzaToCart}
                  key={`${pizza}_${index}`}
                  {...pizza}
                />
              );
            })
          : Array(12)
              .fill(0)
              .map((map, index) => <PizzaLoading key={`${index}_${map}`} />)}
      </div>
    </div>
  );
}

export default Home;
