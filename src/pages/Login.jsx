import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import Loader from "../components/Loader";
import Toast from "../components/Toast";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response = await loginUser(email, password);

      if (response.success) {

        setToast("Login Successful");

        setTimeout(() => {
          navigate("/");
        }, 1000);

      }

    } catch (error) {

      setToast(error.message);

    } finally {

      setLoading(false);

      setTimeout(() => {
        setToast("");
      }, 3000);

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      {toast && <Toast message={toast} />}

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-3">
            Sign in to access the admin panel.
          </p>

        </div>

        {loading ? (

          <Loader />

        ) : (

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>

              <label className="text-sm text-slate-400 block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none focus:border-blue-500 transition"
              />

            </div>

            {/* Password */}
            <div>

              <label className="text-sm text-slate-400 block mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white outline-none focus:border-blue-500 transition"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-2xl py-4 font-semibold text-white mt-3"
            >

              Sign In

            </button>

          </form>

        )}

      </div>

    </div>
  );
}

export default Login;