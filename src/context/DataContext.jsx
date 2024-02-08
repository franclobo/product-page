import { PropTypes } from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider =(props) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(250);
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(50);

  useEffect(() => {
    setTotal(price * count);
  }, [price, count]);

  useEffect(() => {
    const discountAmount = (price * discount) / 100;
    setTotal((price - discountAmount) * count);
  }, [price, count, discount]);

  const value = {
    total: [total],
    price: [price, setPrice],
    count: [count, setCount],
    discount: [discount, setDiscount],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node,
};

