import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  });
  
  // Calculate totals whenever cart items change
  useEffect(() => {
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 150 ? 0 : 15;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;
    
    setCart(prev => ({
      ...prev,
      subtotal,
      shipping,
      tax,
      total
    }));
  }, [cart.items]);
  
  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      // Check if product already in cart
      const existingItemIndex = prev.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity
        const updatedItems = [...prev.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        
        return { ...prev, items: updatedItems };
      } else {
        // Add new item
        return {
          ...prev,
          items: [...prev.items, { ...product, quantity }]
        };
      }
    });
  };
  
  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    setCart(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
      
      return { ...prev, items: updatedItems };
    });
  };
  
  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== productId)
    }));
  };
  
  // Clear cart
  const clearCart = () => {
    setCart({
      items: [],
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0
    });
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
