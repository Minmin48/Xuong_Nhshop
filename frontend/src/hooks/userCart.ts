import { useLocalStorage } from '@/hooks/useStorage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { reduce, debounce } from 'lodash';
import { ChangeEvent } from 'react';



const usercart = () => {
    const queryClient = useQueryClient();
    const [user] = useLocalStorage('user', {});

    const userId = user?.user?._id;

    // const [editQuantity, setEditQuantity] = useState({} as any);
    //add
    const { data, ...restQuery } = useQuery({
        queryKey: ["cart", userId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/cart/${userId}`);
            return data;
        }
    })
    //updatequantity
    const updateQuantitydeboune = debounce(async (productId, quantity: number) => {
        await axios.post(`http://localhost:8080/api/carts/update`, {
            userId,
            productId,
            quantity,
        });
        queryClient.invalidateQueries({
            queryKey: ["cart", userId],
        });
    }, 300);

    const { mutate } = useMutation({
        mutationFn: async ({ action, productId }: { action: string, productId: string }) => {
            switch (action) {

                case "INCREMENT":
                    // tăng số lượng quantity                 
                    await axios.post(`http://localhost:8080/api/carts/increase`, {
                        userId,
                        productId,
                    });
                    break;
                case "DECRMENT":
                    await axios.post(`http://localhost:8080/api/carts/decrease`, {
                        userId,
                        productId,
                    });
                    break;
                case "REMOVE":
                    await axios.post(`http://localhost:8080/api/carts/remove`, {
                        userId,
                        productId,
                    });
                    break;

                default:
                    break;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId],
            });
        },
    })
    //update
    const handleQuantity = (productId: string, e: ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(e.target.value);
        updateQuantitydeboune(productId, quantity);
    }


    //total tổng giá
    const calculateTotal = () => {
        if (!data || !data.products) return 0;
        return reduce(data.products, (total, product) => total + product.price * product.quantity, 0);
    };

    return {
        data,
        mutate,
        calculateTotal,
        handleQuantity,
        ...restQuery
    }

}

export default usercart;