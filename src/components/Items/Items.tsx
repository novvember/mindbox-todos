import './Items.css';
import React from 'react';

function Items({ children }: { children: React.ReactNode }) {
  return <ul className="items">{children}</ul>;
}

export default Items;
