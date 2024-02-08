import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { DataContext } from "../context/DataContext";

export const Counter = () => {

  const value = useContext(DataContext);
  const [count, setCount] = value.count;
  const { addToCart } = value;

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <section className="counter">
      <div className="count__container">
        <button className="count__container__button_plus" onClick={decrement}>
          -
        </button>
        <p className="count__container__number">{count}</p>
        <button className="count__container__button_minus" onClick={increment}>
          +
        </button>
      </div>
      <button className="count__add" onClick={addToCart}>
        <IoCartOutline />
        Add to cart
      </button>
    </section>
  );
};
