//iner

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload,
      };
    case 'ADD_PIZZA': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const arr = [].concat.apply([], Object.values(newItems));
      const totalPrice = arr.reduce((sum, obj) => sum + obj.price, 0);
      
      return {
        ...state,
        items: newItems,
        totalCount: arr.length,
        totalPrice,
      };
    }
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload,
      };

    default:
      return state;
  }
};

export default cartReduser;
