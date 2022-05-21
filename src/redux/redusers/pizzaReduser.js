const initialState = {
  items: [],
  isLoading: false,
};

const pizzaReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZAS':
      return {
        ...state,
        items: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default pizzaReduser;
