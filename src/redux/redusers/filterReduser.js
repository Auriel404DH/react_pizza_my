const initialState = {
  sortBy: 'popular',
  category: 0,
};

const filterReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'CATEGORY':
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default filterReduser;
