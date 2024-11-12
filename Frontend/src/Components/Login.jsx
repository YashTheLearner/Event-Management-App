import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/photo.jpg";
import { toast, ToastContainer } from "react-toastify";
import axios from "../Axios/axios.jsx";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/user/login", formData);
      toast.success("Successfully logged in!");
      navigate("/home");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[rgba(17,24,39,1)]">
      <ToastContainer />
      <div className="flex flex-col md:flex-row bg-[#1f2937] rounded-2xl shadow-2xl max-w-4xl p-6">
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#ffcc00]">Welcome Back</h2>
          <p className="text-sm text-gray-400 mt-2">
            Please log in to access your account.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="userEmail"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                id="userPassword"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#2c3e50] border border-gray-600 text-white focus:outline-none focus:border-[#ffcc00] placeholder-gray-400"
                required
              />
              <svg
                onClick={() => setShowPassword(!showPassword)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                viewBox="0 0 16 16"
              >
                {showPassword ? (
                  <path d="M..." /> // Add the 'eye-slash' path here
                ) : (
                  <path d="M..." /> // Add the 'eye' path here
                )}
              </svg>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ffcc00] text-[#1f2937] font-bold py-2 rounded-lg hover:bg-[#ffd700] transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-xs text-gray-400">
              Forgot your password?{" "}
              <a href="#" className="text-[#ffcc00] hover:underline">
                Reset here
              </a>
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Don't have an account?{" "}
              <button
                className="text-[#ffcc00] hover:underline"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </p>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl object-cover w-full h-full"
            src={photo}
            alt="Login visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
