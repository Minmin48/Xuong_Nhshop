import { IconFb, IconIn, IconTw, Start } from "@/components/icons";
import { getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getProductById(id as string),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) {
    return <p>Error loading product details</p>;
  }
  return (
    <div>
      <section className="services">
        <div className="container-fluid">
          <div className="service-list-view">
            <p className="icon">Home</p>
            <p>&gt;</p>
            <p className="icon">Shop</p>
            <p>&gt;</p>
            <p className="icon">|</p>
            <p>{data.data.name}</p>
          </div>
        </div>
      </section>
      <div>
        <div className="container-product-view">
          <div className="product-list-view">
            <div className="item-img">
              <img src={data.data.image} alt="#" />
              <br />
              <img src={data.data.image} alt="#" />
              <br />
              <img src={data.data.image} alt="#" />
              <br />
              <img src={data.data.image} alt="#" />
            </div>
            <div className="item-img2 rounded-md">
              <img src={data.data.image} alt="#" />
            </div>
          </div>
          <div className="product-description mt-5">
            <h2>{data.data.name}</h2>
            <p className="font">{data.data.price}đ</p>
            <div className="comment">
              <img src={Start} alt="#" />
              <p className="font4 text-gray-300 text-5xl">|</p>
              <p className="font3">5 Customer Review</p>
            </div>
            <p className="font1">{data.data.description}</p>
            <div className="box-size">
              <p className="font">Size</p>
              <div className="size-color">
                <button>L</button>
                <button>XL</button>
                <button>XS</button>
              </div>
            </div>
            <div className="box-size-color">
              <p className="font">Color</p>
              <div className="size-color-1">
                <button className="color1" />
                <button className="color2" />
                <button className="color3" />
              </div>
            </div>
            <div className="bank">
              <button className="border-1 border-black grid grid-cols-3 pt-3">
                <p>-</p>
                <p>1  </p>
                <p>+</p>
              </button>
              <button className="border-1 border-black grid grid-cols-1 pt-3  ">
                <Link className="no-underline text-black" to={`/cart`}>Add to Cart</Link>
              </button>
              <button className="border-1 border-black grid grid-cols-1 pt-3">+ Compare</button>
            </div>
            <br />
            <br />
            <hr id="hr1" />
            <div className="seach">
              <p>SKU</p>
              <p>:</p>
              <p>SS001</p>
            </div>
            <div className="seach">
              <p>Category</p>
              <p>:</p>
              <p>Sofars</p>
            </div>
            <div className="seach">
              <p>Tags</p>
              <p>:</p>
              <p>Sofar, Chair, Home, Shop</p>
            </div>
            <div className="seach">
              <p>Share</p>
              <p>:</p>
              <img src={IconFb} alt="#" />
              <img src={IconIn} alt="#" />
              <img src={IconTw} alt="#" />
            </div>
          </div>
        </div>
        <hr />
        <div className="container-review">
          <div className="review">
            <h3 className="review-1">Desciption</h3>
            <h3 className="review-1">Additional Information</h3>
            <h3 className="review-1">Reviews [5]</h3>
          </div>
          <div className="des">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="state grid grid-cols-2">
            <img src={data.data.image} alt="#" />
            <img src={data.data.image} alt="#" />
          </div>
        </div>
        {/* end container-product */}
        <hr className="hr" />
        <section className="news">
          <div className="container">
            <h2 className="section-heading__title2">Related Products</h2>
            <br />
            <br />
            <div className="section-body">
              <div className="product-list">
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/47/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">-30%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a className="product__link">Syltherine</a>
                    </h3>
                    <a className="product__category">Stylish cafe chair</a>
                    <div className="product-price">
                      <span className="product-price__new">$200</span>
                      <span className="product-price__old">$300</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <a>
                      <button className="btn product-action__quickview">
                        Quick View
                      </button>
                    </a>
                    <a href="cart.html">
                      <button className="btn product-action__addtocart">
                        Add To Cart
                      </button>
                    </a>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src={data.data.image}
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">{data.data.discount}%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a className="product__link">{data.data.name}</a>
                    </h3>
                    <a className="product__category">Category</a>
                    <div className="product-price">
                      <del className="product-price__old">{data?.price}đ</del>
                      <span className="product-price__new">
                        {data?.price - data?.price * (data.data.discount / 100)}đ
                      </span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <Link to={`${data?.id}`}>
                      <button className="btn product-action__quickview">
                        Quick View
                      </button>
                    </Link>
                    <a href="webs/cart.html">
                      <button className="btn product-action__addtocart">
                        Add To Cart
                      </button>
                    </a>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/49/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">-50%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a className="product__link">Syltherine</a>
                    </h3>
                    <a className="product__category">Stylish cafe chair</a>
                    <div className="product-price">
                      <span className="product-price__new">$200</span>
                      <span className="product-price__old">$300</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <a>
                      <button className="btn product-action__quickview">
                        Quick View
                      </button>
                    </a>
                    <a href="cart.html">
                      <button className="btn product-action__addtocart">
                        Add To Cart
                      </button>
                    </a>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/50/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-new">New</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a className="product__link">Syltherine</a>
                    </h3>
                    <a className="product__category">Stylish cafe chair</a>
                    <div className="product-price">
                      <span className="product-price__new">500.000</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <a>
                      <button className="btn product-action__quickview">
                        Quick View
                      </button>
                    </a>
                    <a href="cart.html">
                      <button className="btn product-action__addtocart">
                        Add To Cart
                      </button>
                    </a>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
                {/*End .product-item*/}
              </div>
            </div>
          </div>
          <div className="show-view">
            <button>Show more</button>
          </div>
        </section>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default DetailProduct;
