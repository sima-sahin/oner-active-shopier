// import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import Broadcast from "../components/header/Broadcast";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="mt-14 text-black">
      <Broadcast/>
      <div className="px-18 mx-auto py-10 px-4">
        {/* Sayfa Başlığı */}
        <div className="text-2xl md:text-3xl font-bold mb-4">
          LOG IN TO YOUR ACCOUNT
        </div>
        <div className="bg-zinc-200 w-full h-0.5 mb-4"></div>

        {/* 2 Sütun Düzeni */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Sol Sütun: Giriş Formu */}
          <div className="md:border-r md:border-zinc-300 md:pr-8">
            <h2 className="text-xl font-semibold mb-4">
              ALREADY HAVE AN ONER ACTIVE ACCOUNT?
            </h2>
            <form className="space-y-5">
              {/* E-posta */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your-email@oneractive.com"
                  className="border border-zinc-300 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-black"/>
              </div>

              {/* Şifre */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="border border-zinc-300 w-full p-2 focus:outline-none focus:ring-1 focus:ring-black"/>
              </div>

              {/* Şifreyi Unuttum Linki */}
              <div className="text-left">
                <a href="#" className="text-xs text-zinc-600 hover:underline">
                  Forgot your password?
                </a>
              </div>

              {/* Giriş Butonu */}
              <button
                type="submit"
                className="bg-black text-white px-10 py-2 hover:bg-zinc-800 transition-colors rounded-3xl text-sm">
                LOG IN
              </button>
            </form>
          </div>


          {/* Sağ Sütun: Yeni Üyelik Teşviki */}
          <div className="text-sm font-semibold">
            <div className="text-xl mb-2 font-bold">NEW TO ONER ACTIVE?</div>
            <div className="mb-1">
              <p className="flex items-center gap-x-2 mb-1">
                <FaCheck className="text-lg" />
                Manage your account details
              </p>
              <p className="flex items-center gap-x-2 mb-1">
                <FaCheck className="text-lg" />
                Order tracking &amp; history
              </p>
              <p className="flex items-center gap-x-2 mb-1">
                <FaCheck className="text-lg" />
                Access the Loyalty Club
              </p>
            </div>
            <div className="ml-6 mb-4">
              <p className="flex items-center mb-1">
                <GoDotFill className="mr-1" />
                Collect points &amp; gain valuable benefits
              </p>
              <p className="flex items-center mb-1">
                <GoDotFill className="mr-1" />
                Exclusive discounts
              </p>
              <p className="flex items-center mb-1">
                <GoDotFill className="mr-1" />
                Level up for exclusive perks
              </p>
              <p className="flex items-center mb-1">
                <GoDotFill className="mr-1" />
                and more...
              </p>
            </div>
            <button
              className="bg-black text-white py-2 px-8 rounded-3xl hover:bg-zinc-800 transition-colors"
              onClick={() => navigate("/signup")}>
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
