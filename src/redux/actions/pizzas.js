export const pizzaAC = (pizzas) => ({
  type: 'PIZZAS',
  payload: pizzas,
});

export const loadingAC = () => ({
  type: 'LOADING',
  //   pyload: pizzas,
});
