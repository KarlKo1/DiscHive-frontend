import React, { createContext, useContext, useState } from "react";
import { Context } from "urql";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Increase product quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  //Decrease product quantity
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  };

  //Add product to cart
  const onAdd = (product, quantity) => {
    //Total price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);
    //Increase total quantity
    setTotalQuantity((prevTotal) => prevTotal + quantity);
    //Check if product already exists in cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove product from cart
  const onRemove = (product) => {
    //Total price
    setTotalPrice((prevTotal) => prevTotal - product.price);
    //Decrease total quantity
    setTotalQuantity((prevTotal) => prevTotal - 1);
    //Check if product already exists in cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQuantity,
        totalPrice,
        setQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
