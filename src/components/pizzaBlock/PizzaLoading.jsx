import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoading() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="87" y="149" rx="0" ry="0" width="0" height="2" />
      <circle cx="137" cy="152" r="120" />
      <rect x="2" y="282" rx="16" ry="16" width="274" height="26" />
      <rect x="2" y="319" rx="20" ry="20" width="273" height="83" />
      <rect x="5" y="413" rx="11" ry="11" width="78" height="28" />
      <rect x="30" y="436" rx="0" ry="0" width="1" height="1" />
      <rect x="148" y="412" rx="11" ry="11" width="124" height="45" />
    </ContentLoader>
  );
}

export default PizzaLoading;
