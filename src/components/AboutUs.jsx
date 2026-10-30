import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">Rooted in good things</p>
        <h1>A little more green makes room for a lot more life.</h1>
        <p>
          Paradise Nursery helps you bring the calm, character, and everyday joy of plants
          into the places you call home.
        </p>
        <Link className="button button-primary" to="/products">Find your plant</Link>
      </section>

      <section className="about-content">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Plants for real homes and real people.</h2>
        </div>
        <p>
          Paradise Nursery is a friendly online plant shop built around one simple idea:
          everyone deserves a space that feels alive. We curate beautiful, dependable
          houseplants and make choosing the right one feel simple, whether you are growing
          your first pothos or adding to a well-loved jungle.
        </p>
      </section>

      <section className="values-grid" aria-label="Our mission and vision">
        <article className="value-card">
          <span className="value-icon" aria-hidden="true">✿</span>
          <h3>Our mission</h3>
          <p>Make plant ownership joyful and accessible with thoughtful choices, helpful guidance, and plants ready to thrive.</p>
        </article>
        <article className="value-card">
          <span className="value-icon" aria-hidden="true">⌂</span>
          <h3>Our vision</h3>
          <p>A greener everyday: homes and communities made healthier, calmer, and more connected to nature.</p>
        </article>
        <article className="value-card">
          <span className="value-icon" aria-hidden="true">♡</span>
          <h3>Why Paradise Nursery</h3>
          <p>Discover a considered collection, clear care-friendly descriptions, and a welcoming place to grow at your own pace.</p>
        </article>
      </section>
    </main>
  );
}

export default AboutUs;
