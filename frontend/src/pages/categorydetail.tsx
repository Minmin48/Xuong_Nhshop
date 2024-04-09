import { ProductList } from "@/components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const Categorydetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["CATEGORY_DETAIL", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/categorys/${id}`
      );
      return data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">
              Danh mục: {data.categories.name}
            </h2>
          </div>
          <ProductList data={data.products} />
        </div>
      </section>
    </div>
  );
};

export default Categorydetail;
