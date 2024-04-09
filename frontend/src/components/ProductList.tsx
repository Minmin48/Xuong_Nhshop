import { useLocalStorage } from "@/hooks/useStorage";
import { IProduct } from "@/interfaces/product";
import { getAllProduct } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

type ProductsListProps = {
  featured?: boolean;
  data?: IProduct[];
};

const ProductList = ({ featured, data }: ProductsListProps) => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage('user', {});
  const userId = user?.user?._id;

  const { mutate } = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: string, quantity: number }) => {
      const { data } = await axios.post(`http://localhost:8080/api/cart/add-to-cart`, {
        userId,
        productId,
        quantity,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
    }
  });

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProduct,
  });

  const filterProducts = featured
    ? products?.filter((product: IProduct) => product?.featured === featured)
    : data
      ? data
      : products;

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Error....</p>;
  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">New</h2>
        </div>
        <div className="section-body">
          <div className="product-list">
            {filterProducts?.map((product: IProduct, index: number) => (
              <div key={index} className="product-item">
                <div className="product-image">
                  <img
                    src={product?.image}
                    alt="#"
                    className="product__thumbnail"
                  />
                  <span className="product-sale">-{product?.discount}%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link
                      to={`/products/${product._id}`}
                      className="product__link"
                    >
                      {product?.name}
                    </Link>
                  </h3>
                  <a href="#" className="product__category">
                    category
                  </a>
                  <div className="product-price">
                    <del className="product-price__old">{product?.price}đ</del>
                    <span className="product-price__new">
                      {product?.price -
                        product?.price * (product?.discount / 100)}
                      đ
                    </span>
                  </div>
                </div>
                <div className="product-actions">
                  <Link to={`/products/${product?._id}`}>
                    <button className="btn product-action__quickview">
                      Quick View
                    </button>
                  </Link>
                  <Link to={`/cart`} className="btn product-action__addtocart" onClick={() => mutate({ productId: product._id, quantity: 1 })}>
                    Add To Cart
                  </Link>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;  
