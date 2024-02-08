import { useContext } from "react";
import Product from "../assets/images/image-product-1-thumbnail.jpg";
import Delete from "../assets/images/icon-delete.svg";
import { DataContext } from "../context/DataContext";

export const Basquet = () => {
  const value = useContext(DataContext);
  const [cartItems, setCartItems] = value.cartItems;

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="basquet">
      <div className="basquet__title">
        <h3>Cart</h3>
      </div>
      <div className="paragraph">
        {cartItems.length === 0 ? (
          <p className="notice">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="data" key={item.id}>
              <div className="data__product">
                <img src={Product} alt="Product" />
                <div className="data__product__info">
                  <h4>{item.name}</h4>
                  <div className="data__price">
                    <p>
                      ${item.price / item.quantity} x {item.quantity}
                    </p>
                    <p className="data__price__total">${item.price}</p>
                  </div>
                </div>
              </div>
              <div
                className="data__delete"
                onClick={() => handleDelete(item.id)}
              >
                <img src={Delete} alt="Delete" />
              </div>
            </div>
          ))
        )}
        <div className="checkout">
          <button className="checkout__button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
