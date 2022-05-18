import React from 'react';
import s from 'classnames';

const Button = (props) => {
  return (
    <button
      className={s('button', {
        'button--outline': props.outline,
        // 'button--test': this.props.children,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
