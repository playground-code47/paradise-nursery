import React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems, selectTotalQuantity } from '../redux/CartSlice.jsx';

const plants = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    category: 'Statement plants',
    description: 'A leafy favorite with iconic split leaves and an easygoing nature.',
    price: 28,
    image: 'photo-1614594975525-e45190c55d0b',
    alt: 'Lush monstera plant with large green leaves',
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    category: 'Statement plants',
    description: 'Glossy, sculptural foliage that brings instant presence to a room.',
    price: 32,
    image: 'photo-1501004318641-b39e6451bec6',
    alt: 'Decorative green rubber plant in a pot',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'Easy-care plants',
    description: 'A striking upright plant that is wonderfully forgiving.',
    price: 22,
    image: 'photo-1485955900006-10f4d324d411',
    alt: 'Upright snake plant in a light colored pot',
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    category: 'Easy-care plants',
    description: 'Shiny, graceful leaves for a low-fuss touch of green.',
    price: 24,
    image: 'photo-1509423350716-97f9360b4e09',
    alt: 'Healthy ZZ plant with glossy green leaves',
  },
  {
    id: 'golden-pothos',
    name: 'Golden Pothos',
    category: 'Trailing plants',
    description: 'A cheerful trailing vine with heart-shaped, golden-splashed leaves.',
    price: 18,
    image: 'photo-1416879595882-3373a0480b5b',
    alt: 'Golden pothos plant cascading from a shelf',
  },
  {
    id: 'heartleaf-philodendron',
    name: 'Heartleaf Philodendron',
    category: 'Trailing plants',
    description: 'Soft, heart-shaped foliage that looks lovely on a shelf or hanger.',
    price: 20,
    image: 'photo-1518531933037-91b2f5f229cc',
    alt: 'Trailing heartleaf philodendron houseplant',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectTotalQuantity);
  const categories = useMemo(() => [...new Set(plants.map((plant) => plant.category))], []);

  return (
    <main className="catalog-page">
      <section className="catalog-heading">
        <div>
          <p className="eyebrow">Find your new favorite</p>
          <h1>Plants that feel like home.</h1>
          <p>Thoughtful greenery for every corner, from your first plant to your next jungle.</p>
        </div>
        <Link className="button button-outline" to="/cart" aria-label={`View cart with ${cartCount} items`}>
          <span aria-hidden="true">♧</span> Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </section>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>Carefully chosen for your space</span>
          </div>
          <div className="product-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const cartPlant = cartItems.find((item) => item.id === plant.id);
              return (
                <article className="product-card" key={plant.id}>
                  <img
                    className="product-image"
                    src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=900&q=85`}
                    alt={plant.alt}
                    loading="lazy"
                  />
                  <div className="product-details">
                    <div className="product-title-row">
                      <h3>{plant.name}</h3>
                      <span className="product-price">${plant.price.toFixed(2)}</span>
                    </div>
                    <p>{plant.description}</p>
                    <button
                      className={`button ${cartPlant ? 'button-added' : 'button-primary'} add-button`}
                      type="button"
                      onClick={() => dispatch(addItem(plant))}
                      aria-label={cartPlant ? `Add another ${plant.name}; ${cartPlant.quantity} in cart` : `Add ${plant.name} to cart`}
                    >
                      {cartPlant ? `Add another · ${cartPlant.quantity} in cart` : 'Add to cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
