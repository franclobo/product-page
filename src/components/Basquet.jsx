import { useContext } from 'react';
import Product from '../assets/images/image-product-1-thumbnail.jpg';
import Delete from '../assets/images/icon-delete.svg';
import { DataContext } from '../context/DataContext';

export const Basquet = () => {
  const value = useContext(DataContext);
  const [count] = value.count;
  const [price] = value.price;
  const [discount] = value.discount;

  const unit_price = (price * discount) / 100;
  const sum = unit_price * count;

  return (
    <div className="basquet">
      <div className="basquet__title">
        <h3>Cart</h3>
      </div>
      <div className="paragraph">
        <div className="data">
          <div className="data__product">
            <img src={Product} alt="Product" />
            <div className="data__product__info">
              <h4>Fall Limited Edition Sneakers</h4>
              <div className="data__price">
                <p>
                  ${unit_price} x {count}
                </p>
                <p className="data__price__total">${sum}</p>
              </div>
            </div>
          </div>
          <div className="data__delete">
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <div className="checkout">
          <button className="checkout__button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
