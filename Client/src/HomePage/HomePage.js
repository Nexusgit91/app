import React from 'react';

 export default function HomePage() {
  return (
    <>
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </nav>
        <img src="header-image.jpg" alt="header image" />
        <h1>Shop now and get the best deals on our products!</h1>
        <input type="text" placeholder="Search for products, brands, or categories" />
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="product-image-1.jpg" alt="product image" />
            <h3>Product Name 1</h3>
            <p>Product Description 1</p>
            <span>$100</span>
          </div>
          <div className="product-item">
            <img src="product-image-2.jpg" alt="product image" />
            <h3>Product Name 2</h3>
            <p>Product Description 2</p>
            <span>$200</span>
          </div>
          <div className="product-item">
            <img src="product-image-3.jpg" alt="product image" />
            <h3>Product Name 3</h3>
            <p>Product Description 3</p>
            <span>$300</span>
          </div>
        </div>
      </section>
      <section className="shop-by-categories">
        <h2>Shop by Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src="category-image-1.jpg" alt="category image" />
            <h3>Category Name 1</h3>
          </div>
          <div className="category-item">
            <img src="category-image-2.jpg" alt="category image" />
            <h3>Category Name 2</h3>
          </div>
          <div className="category-item">
            <img src="category-image-3.jpg" alt="category image" />
            <h3>Category Name 3</h3>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>Customer Review 1</p>
            <span>5 Stars</span>
          </div>
          <div className="testimonial-item">
            <p>Customer Review 2</p>
            <span>4 Stars</span>
          </div>
          <div className="testimonial-item">
            <p>Customer Review 3</p>
            <span>5 Stars</span>
          </div>
        </div>
      </section>
      <section className="newsletter-subscription">
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
</>)}
