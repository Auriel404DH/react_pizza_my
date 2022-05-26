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
        isLoading: true,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default pizzaReduser;
