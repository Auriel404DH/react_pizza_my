import React, { useState } from 'react';

const Categories = React.memo(({ items, onClickItem }) => {
  const [active, setActive] = useState(null);

  const onSelectItem = (index) => {
    setActive(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={active === null ? 'active' : ''} onClick={() => setActive(null)}>
          all
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={active === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
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

export default Categories;
