import axios from 'axios';

export const pizzaAC = (pizzas) => ({
  type: 'PIZZAS',
  payload: pizzas,
});

export const loadingAC = (val) => ({
  type: 'LOADING',
  pyload: val,
});

export const fetchPizzas = (sortBy, category) => async (dispatch) => {
  dispatch(loadingAC(false));
  let response = await axios.get(
    `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
      sortBy.type
    }`,
  );
  dispatch(pizzaAC(response.data));
};
