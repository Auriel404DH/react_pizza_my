import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ active, items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li className={active === null ? 'active' : ''} onClick={() => onClickItem(null)}>
          all
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={active === index ? 'active' : ''}
                onClick={() => onClickItem(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func,
};

Categories.defaultProps = { active: null, items: [] };

export default Categories;
