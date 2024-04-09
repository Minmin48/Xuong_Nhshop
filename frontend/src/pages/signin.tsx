import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useState } from "react";



const signinSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required().min(6),
});
const Signin = () => {
    const navigate = useNavigate();
    // const queryClient = useQueryClient();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const { mutate } = useMutation({
        mutationFn: async (user) => {
            const { data } = await axios.post(`http://localhost:8080/api/signin`, user);
            localStorage.setItem('user', JSON.stringify(data));
            return data.user;
        },

    })
    const onSubmit = (user) => {
        alert('đăng Nhập thành công');
        mutate(user);
        navigate("/admin/products");
        console.log(user);

    }
    return (
        <div>

            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <h1>Bạn chưa có tài Khoản  </h1>
                            <a className="bg-blue-600 no-underline rounded-lg text-xl text-white px-3 py-1" href="/signup">Đăng Ký</a>
                            <p className="max-w-xl text-lg mt-3">
                                At the same time, the fact that we are wholly owned and totally independent from
                                manufacturer and other group control gives you confidence that we will only recommend what
                                is right for you.
                            </p>
                            <div className="mt-8">
                                <a href="#" className="text-2xl font-bold text-pink-600"> 0359 654 576 </a>
                                <address className="mt-2 not-italic">Đường Lê Lợi, phường Bến Thành, quận 1, Sài Gòn</address>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <h1 className="text-center text-3xl font-bold">Đăng Nhập</h1>

                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email" {...register("email", { required: true })} />
                                    {errors?.email?.message && <span className="text-red-500">{errors?.email?.message}</span>}
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">PassWord</label>
                                    <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Password" type="password" id="" {...register("password", { required: true, minLength: 6 })} />
                                    {errors?.password?.message && <span className="text-red-500">{errors?.password?.message}</span>}
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                        Đăng Nhập
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Signin