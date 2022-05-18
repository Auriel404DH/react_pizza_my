import React from 'react';
import s from 'classnames';

const Button = ({ outline, className, children }) => {
  return (
    <button
      className={s('button', className, {
        'button--outline': outline,
        // 'button--test': this.props.children,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
