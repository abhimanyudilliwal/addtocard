import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { addToCart } from '../../appStore/cartSlice';
import './card.css';

const ProductCard = ({ product = []  , showActions = true, inCart = false , onQuantityChange, onRemove  }) => {
  const dispatch = useDispatch();
// console.log("product +++++++++++++",product)
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
 
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.image} alt={product.category} />
        {/* {!inCart && (
          <div className="quick-actions">
            <Button variant="danger" size="sm" onClick={() => handleAddToCart(product)}>
              Add to Bag
            </Button>
          </div>
        )} */}
      </div>

      <div className="product-details">
        <h4 className="product-brand">{product.title}</h4>
        <p className="product-name">{product.description}</p>
        <div className="product-price d-flex justify-content-between align-items-center">
          <span className="current-price">₹{product.price}</span>
          <Button variant="danger" size="sm" onClick={() => handleAddToCart(product)}>
          Add to Card
            </Button>
          {/* <span className="current-price">{product.category}</span> */}

          
        </div>

        {inCart && (
          <div className="cart-controls">
            <div className="quantity-controls">
            {product.quantity && (
                <button onClick={() => onQuantityChange(product.id, product.quantity - 1)}>-</button>
              )}
              {product.quantity && (
                <span>{product.quantity}</span>
              )}
              {product.quantity && (
                <button onClick={() => onQuantityChange(product.id, product.quantity + 1)}>+</button>
              )}
            </div>
            <button className="remove-btn" onClick={() => onRemove(product.id)}>
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
   
  );
};

export default ProductCard;

