// import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="hero bg-gray-900 min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left ml-24 w-120">
            <div className="text-3xl font-bold text-center mb-6">New to Oner Active?</div>
            <div className="mb-4">
              <p className="flex items-center gap-x-1"><FaCheck />Manage your account details</p>
              <p className="flex items-center gap-x-1"><FaCheck />Order tracking & history</p>
              <p className="flex items-center gap-x-1"><FaCheck />Access the Loyalty Club</p>
            </div>
           <div className="ml-4">
              <p className="">•	Collect points & gain valuable benefits</p>
              <p className="">•	Exclusive discounts</p>
              <p className="">•	Level up for exclusive perks</p>
              <p className="">•	and more...</p>
           </div>
           <button className="btn mt-4" onClick={() => navigate("/signup")}>Sign Up</button>


          </div>
          <div className="card w-full max-w-sm shrink-0">
            <div className="card-body">
            <div className="text-5xl font-bold mb-6">Login now!</div>

              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
