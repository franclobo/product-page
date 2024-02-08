import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const Price = () => {
  const value = useContext(DataContext);
  const [price] = value.price;
  const [discount] = value.discount;

  const unit_price = price * discount / 100;

  return (
    <section className="price">
      <p className="count">
        <span className="count__number">${unit_price}</span>
        <span className="percentage__number">{discount}%</span>
      </p>
      <p className="percentage">
        <span className="discount__number">${price}</span>
      </p>
    </section>
  );
}

