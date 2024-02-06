import Product from '../assets/images/image-product-1-thumbnail.jpg';
import Delete from '../assets/images/icon-delete.svg';
export const Basquet = () => {
  return (
    <div className="basquet">
      <div className="basquet__title">
        <h3>Cart</h3>
      </div>
      <div className="paragraph">
        {/*<p className="notice">
          Your cart is empty.
        </p>*/}
        <div className="data">
          <div className="data__product">
            <img src={Product} alt="Product" />
            <div className="data__product__info">
              <h4>Fall Limited Edition Sneakers</h4>
              <div className="data__price">
                <p>$125.00 x 1</p>
                <p className="data__price__total">$125.00</p>
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
}
