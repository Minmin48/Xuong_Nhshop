import { IProduct } from "@/interfaces/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom";

const ProductList = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['PRODUCTS'],
    queryFn: async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products`);
        console.log(response);

        return response.data.products || []; // Trả về một mảng rỗng nếu dữ liệu không tồn tại
      } catch (error) {
        throw new Error("Failed to fetch products"); // Ném ra một lỗi để xử lý lỗi trong React Query
      }
    }
  });

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      try {
        const response = await axios.delete(`http://localhost:8080/api/product/${id}`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to delete product");
      }
    },
    onSuccess: () => {
      alert('Xóa Thành Công');
      queryClient.invalidateQueries({ queryKey: ["PRODUCTS"] });
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data...</p>;

  return (
    <div>
      <div className="s-flex justify-content-between"></div>
      <h2 className="mt-2">Quản lý sản phẩm</h2>
      <Link to="/products/add" className="btn btn-primary">Thêm sản phẩm</Link>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Mô tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product: IProduct, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={product.image} width={60} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`products/${product._id}/edit`} className="btn btn-primary">EDIT</Link>-
                <button onClick={() => mutate(product._id)} className="btn btn-danger">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ProductList;
