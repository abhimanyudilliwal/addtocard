import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { removeFromCart, updateQuantity, clearCart } from '../appStore/cartSlice';
import './Card.css';

const Card = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: Math.max(1, newQuantity) }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container className="card-page">
      <div className="card-header">
        <h1>Shopping Bag</h1>
        <p>{cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'}</p>
      </div>

      {cart.items.length === 0 ? (
        <div className="empty-cart">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
            <path d="M9 22c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM20 22c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M1 1h4l2.68 13.39c.15.72.67 1.26 1.41 1.26h10.5c.74 0 1.36-.54 1.51-1.26L23 6H6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <h3>Your bag is empty</h3>
          <p>Looks like you haven't added anything to your bag yet.</p>
          <Button variant="danger" href="/" style={{ marginTop: '20px' }}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image || '/api/placeholder/120/150'} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-brand">{item.brand}</p>
                  <p className="item-price">₹{item.price}</p>
                  
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  
                  <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
                <div className="item-total">
                  <p className="total-price">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-header">
              <h3>Price Summary</h3>
            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{cart.totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges:</span>
              <span>Free</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{cart.totalPrice}</span>
            </div>
            <Button variant="danger" size="lg" className="checkout-btn">
              CHECKOUT
            </Button>
            <Button variant="outline-secondary" onClick={handleClearCart} className="clear-btn">
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card;
