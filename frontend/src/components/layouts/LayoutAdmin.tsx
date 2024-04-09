import { Link } from "lucide-react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <header>
        <div className="flex justify-between items-center bg-[#2474E5] py-4 px-5">
          <h1>Admin</h1>
          <div className="flex items-center">
            <nav className="hidden md:block">
              <ul className="flex items-center text-white">
                <li className="px-3"><a>Quản lý đơn hàng</a></li>
                <li className="px-3"><a >Giỏ Hàng</a></li>
                <li className="px-3"><a >Thông Tin</a></li>
              </ul>
            </nav>
            <div className="ml-20">
              <button className="mx-2">
                <a className="inline-block rounded px-7 py-2 border border-slate-300 text-sm bg-white font-medium text-zinc-950 hover:bg-[#366D91] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="/">
                  Đăng Xuất
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex gap-16">
        <div className="">
          <aside>
            <div className="flex">
              <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                  <ul className="mt-14 space-y-1">
                    <li>
                      <a href="admin/products" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        Sản Phẩm
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        Thống Kê
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
