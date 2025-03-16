import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Broadcast from "../components/header/Broadcast";

function Signup() {
  const navigate = useNavigate();

  // Form alanları için state (opsiyonel):
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // Şifre görünürlüğü kontrolü
  const [showPassword, setShowPassword] = useState(false);

  // Şifre alanının tipini dinamik olarak belirlemek için
  const passwordInputType = showPassword ? "text" : "password";

  // Form submit örneği (opsiyonel)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada backend'e istek atabilir veya validasyon yapabilirsiniz
    console.log("Form submitted");
  };

  return (
    <div className="mt-14 text-black text-sm">
      <Broadcast/>
      <div className="max-w-lg mx-auto py-8 px-4">
        {/* Başlık */}
        <div className="text-xl md:text-2xl font-bold mb-6 text-left border-b border-zinc-200 pb-4">
          CREATE YOUR ACCOUNT
        </div>

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

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              required
              // value={firstName} onChange={(e) => setFirstName(e.target.value)}
              className="border border-zinc-300 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              required
              // value={lastName} onChange={(e) => setLastName(e.target.value)}
              className="border border-zinc-300 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="your-email@oneractive.com"
              required
              // value={email} onChange={(e) => setEmail(e.target.value)}
              className="border border-zinc-300 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordInputType}
                required
                // value={password} onChange={(e) => setPassword(e.target.value)}
                className="border border-zinc-300 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-black pr-10"
              />
              {/* Göz İkonu */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-2 text-zinc-600 hover:text-black"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              // value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-zinc-300 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Zorunlu alan uyarısı */}
          <p className="text-xs text-zinc-500">* required</p>

          {/* SIGN UP Butonu */}
          <button
            type="submit"
            className="bg-black text-white px-10 py-2 rounded-3xl hover:bg-zinc-800 transition-colors font-semibold"
          >
            SIGN UP
          </button>
        </form>

        {/* Alt Kısım: Giriş Linki */}
        <p className="mt-6">
          Already have an Oner Active account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="underline font-medium hover:text-zinc-700"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
