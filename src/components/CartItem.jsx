import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  selectCartItems,
  selectCartTotal,
  selectTotalQuantity,
  updateQuantity,
} from '../redux/CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    window.alert('Thank you for choosing Paradise Nursery! Your checkout is ready.');
  };

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Your green corner</p>
          <h1>Shopping cart</h1>
        </div>
        <Link className="text-link" to="/products">Continue shopping <span aria-hidden="true">→</span></Link>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">♧</span>
          <h2>Your cart is ready to grow.</h2>
          <p>Browse our collection and find a plant that feels right at home.</p>
          <Link className="button button-primary" to="/products">Explore plants</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your shopping cart">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={item.alt}
                  className="cart-product-image"
                />
                <div className="cart-product-info">
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                  <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>
                    Remove
                  </button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => item.quantity === 1
                      ? dispatch(removeItem(item.id))
                      : dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  >+</button>
                </div>
                <strong className="item-subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Total items</span><span>{totalQuantity}</span></div>
            <div className="summary-line"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-delivery">Free</span></div>
            <div className="summary-total"><span>Total</span><strong>${cartTotal.toFixed(2)}</strong></div>
            <button className="button button-primary checkout-button" type="button" onClick={handleCheckout}>
              Checkout
            </button>
            <p className="checkout-note">A little greenery, on its way to you.</p>
          </aside>
        </div>
      )}
    </main>
  );
}

export default CartItem;
