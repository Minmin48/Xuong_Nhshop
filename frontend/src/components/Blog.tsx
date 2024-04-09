import { ArrowRight } from "./icons";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="section-heading section-blog-heading">
          <h2 className="section-heading__title">BLOG</h2>
        </div>
        <div className="section-body">
          <div className="post-list">
            <div className="post-item">
              <div className="post-image">
                <a href="#">
                  <img
                    src="https://picsum.photos/id/45/605/250"
                    alt="#"
                    className="post__thumbnail"
                  />
                </a>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <a href="#" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </a>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <div className="post__about">
                  <div>
                    <a href="#">ABOUT</a>
                  </div>
                  <div>
                    <img src={ArrowRight} alt="#" />
                  </div>
                </div>
              </div>
            </div>
            {/*End .post-item*/}
            <div className="post-item">
              <div className="post-image">
                <a href="#">
                  <img
                    src="https://picsum.photos/id/46/605/250"
                    alt="#"
                    className="post__thumbnail"
                  />
                </a>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <a href="#" className="post__link">
                    A BEDROOM MUST HAVE SOME THING LIKE THIS
                  </a>
                </h3>
                <p className="post__excerpt">
                  Your level of comfort when geting into and out of bed can be
                  greatly influenced by the bed frame you choose. It may
                  significantly affect how want your bedroom to feet and look
                </p>
                <div className="post__about">
                  <div>
                    <a href="#">ABOUT</a>
                  </div>
                  <div>
                    <img src={ArrowRight} alt="#" />
                  </div>
                </div>
              </div>
            </div>
            {/*End .post-item*/}
            <div className="post-item">
              <div className="post-image">
                <a href="#">
                  <img
                    src="https://picsum.photos/id/47/605/250"
                    alt="#"
                    className="post__thumbnail"
                  />
                </a>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <a href="#" className="post__link">
                    WHY IS A TV CONSOLE A MUST IN EVERY HOUSE
                  </a>
                </h3>
                <p className="post__excerpt">
                  People do a lot of research to make sure they purchase the
                  ideal televisoin. And like the rest of us, you want to keep
                  that gorgeous flat srceen in your living or bedroom on a table
                  or stand
                </p>
                <div className="post__about">
                  <div>
                    <a href="#">ABOUT</a>
                  </div>
                  <div>
                    <img src={ArrowRight} alt="#" />
                  </div>
                </div>
              </div>
            </div>
            {/*End .post-item*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
