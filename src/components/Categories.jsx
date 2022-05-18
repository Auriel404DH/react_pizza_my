import React, { useState } from 'react';

function Categories({ items }) {
  const [active, setActive] = useState(null);

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
                onClick={() => setActive(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Categories;
