import { PropTypes } from "prop-types";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(250);
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(50);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const discountAmount = (price * discount) / 100;
    setTotal((price - discountAmount) * count); // Calcular el precio total con descuento
  }, [price, count, discount]);

  const addToCart = () => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === "Fall Limited Edition Sneakers"
    );

    if (existingItemIndex !== -1) {
      // Si el producto ya existe en el carrito, aumentar la cantidad y actualizar el precio total
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += count;
      updatedCartItems[existingItemIndex].price =
        (price - (price * discount) / 100) *
        updatedCartItems[existingItemIndex].quantity;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no existe en el carrito, agregarlo como un nuevo elemento
      const newItem = {
        id: cartItems.length + 1, // Generar un ID único
        name: "Fall Limited Edition Sneakers",
        price: total, // Precio total del artículo con descuento
        quantity: count,
      };
      setCartItems([...cartItems, newItem]);
    }
    setCount(0); // Restablecer el contador a cero después de agregar al carrito
  };

  const value = {
    total: [total],
    price: [price, setPrice],
    count: [count, setCount],
    discount: [discount, setDiscount],
    cartItems: [cartItems, setCartItems],
    addToCart: addToCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
