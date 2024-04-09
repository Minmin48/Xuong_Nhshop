import { useLocalStorage } from '@/hooks/useStorage';
import usercart from '@/hooks/userCart'
import { IProduct } from '@/interfaces/product';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Banner } from '@/components';
import ServiceIcon from '@/components/ui/serviceicon';

const OrderPage = () => {
    const form = useForm();
    const [user] = useLocalStorage('user', {});
    const userId = user?.user?._id;
    // console.log(userId);

    const { data, calculateTotal } = usercart();
    // console.log(data);
    const { mutate } = useMutation({
        mutationFn: async (order: { userId: string, items: [], totalprice: Number, customerInfo: object }) => {
            const { data } = await axios.post("http://localhost:8080/api/orders", order);
            return data;

        },
        onSuccess: () => {
            alert("Đặt Hàng Thành Công")
        }
    });
    const onSubmit = (formData: object) => {
        mutate(
            {
                userId,
                items: data?.products,
                totalprice: calculateTotal(),
                customerInfo: formData,
            }
        );

    }
    return (
        <div>
            <Banner />
            <div className='container mx-auto'>

                <h1 className='text-center'>Order</h1><br />
                <div className="grid grid-cols-12 gap-14">
                    <div className="col-span-7">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tên" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>SĐT</FormLabel>
                                            <FormControl>

                                                <Input type="tel" placeholder="phone" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                    <div className="col-span-5">
                        <div className="right">
                            <div className="col-span-4">
                                {data?.products?.map((item: IProduct) => (
                                    <div key={item._id} className="border-b py-4">
                                        <h4>{item.name}</h4>
                                        <div className='grid grid-cols-2'>
                                            <p>Giá: {item.price}</p>
                                            <p>Số lượng:{item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                                <p className="mt-5">
                                    <strong className="mr-2"> Số Sản phẩm:</strong>
                                    {data?.products ? data?.products.length : 0}
                                </p>
                                <p className='font-bold text-amber-500 text-2xl'>
                                    <strong className="mr-2">tổng tiền:</strong>{" "}
                                    {calculateTotal()}
                                </p>
                            </div>
                            <hr />
                            <div className="dir">
                                <input type="checkbox" />
                                <p className='mt-3'>Direct Bank Transfer</p>
                            </div>
                            <p>Make your payment directly into our bank account. Please use your Order ID as the
                                payment reference. Your order will not be shipped until the funds have cleared in our account.s
                            </p>
                            <div className="dir">
                                <input type="checkbox" />
                                <p className="tran mt-3">Direct Bank Transfer</p>
                            </div>
                            <div className="dir">
                                <input type="checkbox" />
                                <p className="tran mt-3">Cash On Delivery</p>
                            </div>
                            <p className="des2">Your personal data will be used to support your experience throughout this website,
                                to manage access to your account, and for other purposes described in our <span id="policy">privacy policy.</span></p>
                            <div className="btn-oder">
                                <button>Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceIcon />
        </div>

    )
}

export default OrderPage;