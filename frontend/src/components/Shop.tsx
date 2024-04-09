const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">Shop</h2>
        </div>
        <div className="section-body">
          <div className="shops">
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img
                  src="https://picsum.photos/id/41/605/469"
                  alt="#"
                  className="shop__image"
                />
              </a>
            </div>
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img
                  src="https://picsum.photos/id/42/605/469"
                  alt="#"
                  className="shop__image"
                />
              </a>
            </div>
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img
                  src="https://picsum.photos/id/43/605/469"
                  alt="#"
                  className="shop__image"
                />
              </a>
            </div>
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img
                  src="https://picsum.photos/id/44/605/469"
                  alt="#"
                  className="shop__image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
