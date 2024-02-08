# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

| Desktop | Mobile |
|---|---|
| ![image](https://github.com/franclobo/product-page/assets/58642949/ee06fc95-abef-4cc1-a3e4-63091314c91a) | ![image](https://github.com/franclobo/product-page/assets/58642949/352f7ffa-046b-42d9-8026-d72bc2bda689) |



### Links

- Solution URL: [E-product page](https://github.com/franclobo/product-page)
- Live Site URL: [E-product page](https://app.netlify.com/sites/eproduct-page/overview)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use the react library to create a product page. I also learned how to use the useContext hook to manage the state of the cart and the products. I also learned how to use the react-router-dom library to create a single page application.

```js
import { PropTypes } from "prop-types";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(250);
  const [count, setCount] = useState(0);
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
```

### Continued development

I'm going to continue the fullscreen mode of the gallery and the cart page. I'm also going to add a checkout page and a payment method.

### Useful resources

- [useContext](https://react.dev/learn/passing-data-deeply-with-context) - This helped me for the useContext hook. I really liked this pattern and will use it going forward.
- [React Hooks](https://react.dev/reference/react/useContext) - This is an amazing documentation which helped me finally understand how to use the useContext hook. I'd recommend it to anyone still learning this concept.


## Author

- Website - [WebMinds Studio](https://webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I want to thank the Frontend Mentor community for the opportunity to improve my skills as a developer. I also want to thank the React documentation for the excellent explanation of the useContext hook.

