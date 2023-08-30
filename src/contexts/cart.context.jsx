import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains producttoAdd - challenge description
  const existingCartItem = cartItems.find(
    // so we made a new variable here and made it equal to cartItems.id === productToAdd.id
    (cartItems) => cartItems.id === productToAdd.id
  );
  // if found increment quantity - challenge description
  if (existingCartItem) {
    // so here we conditionally map through the array if there is an existing cart item in cart.
    return cartItems.map(
      (
        cartItem //then we return a new array with a product. if the product is already in the cart we add to the quantity
      ) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item - challenge description
  return [...cartItems, { ...productToAdd, quantity: 1 }]; // other wise we spread through the old array and add the new product to the cart
  // The part I struggled on was making a custom variable, understanding that I needed to match the cartItems.id to producttoAdd.id
  // understanding that I need to map through cartItems to return a new array. match the id's or spread through the existing cartItems and increment by 1.
  //or just return a new array with the cart item we want to add and set the quantity to 1.
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
