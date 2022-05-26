export const sortAC = ({ type, order }) => ({
  type: 'SORT',
  payload: { type, order },
});

export const categoryAC = (category) => ({
  type: 'CATEGORY',
  payload: category,
});
