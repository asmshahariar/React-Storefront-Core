import { createContext, useState, useContext, useEffect, useMemo } from 'react';

// 1. Create Context
const CartContext = createContext();

// 2. Create a custom hook to consume the Context
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Create the Provider component
export const CartProvider = ({ children }) => {
  // Initialize state from localStorage if available to persist between reloads
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('react-store-cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });

  // Sync cartItems with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('react-store-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Method to ADD an item to the cart
  const addToCart = (product, quantity = 1, color = 'Standard') => {
    setCartItems(prevItems => {
      // Check if item with exact same id AND color is already in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.color === color
      );

      if (existingItemIndex > -1) {
        // If it exists, clone the array and increment its specific quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      }

      // If it doesn't exist, append the whole product to the array
      return [...prevItems, { 
        ...product, 
        quantity, 
        color,
        // Guarantee the item has an image/price safely merged if it didn't already
      }];
    });
  };

  // Method to REMOVE an item from the cart
  const removeFromCart = (id, color) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.color === color))
    );
  };

  // Method to UPDATE the quantitative amount of an item
  const updateQuantity = (id, color, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id && item.color === color) {
          const newQuantity = item.quantity + delta;
          // Prevent dropping below 1 via this function
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });
    });
  };

  // Method to CLEAR the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Auto-calculated fields using useMemo (recomputes only when cartItems changes)
  const cartTotals = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : (subtotal > 0 ? 15.00 : 0);
    const tax = subtotal * 0.08; // 8% mock tax
    const total = subtotal + shipping + tax;
    
    return {
      subtotal,
      shipping,
      tax,
      total
    };
  }, [cartItems]);

  // Total flat count of all items (ex: 3 watches + 2 headphones = 5 items)
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotals,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
