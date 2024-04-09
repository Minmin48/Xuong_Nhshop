import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categories } = useQuery({
    queryKey: ["CATEGORY_LIST"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8080/api/categorys");
      return data;
    },
  });

  // console.log(categories);

  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Danh mục </h2>
          </div>
          <div className="flex gap-8">
            <div>
              {categories?.categories?.map(
                (category: { _id: number; name: string }) => (
                  <div key={category._id}>
                    <h3>
                      <Link to={`/categorys/${category._id}`}>
                        {category.name}
                      </Link>
                    </h3>
                  </div>
                )
              )}
            </div>
            <div className="">

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
