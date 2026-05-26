import {
  useContext,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  ShieldCheck,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";

import {
  AuthContext,
} from "../context/authContext";

import Loader from "../components/Loader";

import Toast from "../components/Toast";

function Login() {

  const navigate =
    useNavigate();

  const {
    login,
  } = useContext(
    AuthContext
  );

  // Form State
  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  // UI State
  const [loading, setLoading] =
    useState(false);

  const [toast, setToast] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  // Login Handler
  const handleLogin = async (
    e
  ) => {

    e.preventDefault();

    // Validation
    if (
      !email.trim() ||
      !password.trim()
    ) {

      setToast(
        "Please fill all fields"
      );

      return;
    }

    try {

      setLoading(true);

      const response =
        await login(
          email,
          password
        );

      if (
        response.success
      ) {

        // REMOVE OLD FAKE AUTH
        localStorage.removeItem(
          "admin-auth"
        );

        setToast(
          "Login Successful"
        );

        setTimeout(() => {

          navigate("/");

        }, 1000);

      } else {

        setToast(
          response.message ||
            "Login Failed"
        );
      }

    } catch (error) {

      setToast(
        error.message ||
          "Login Failed"
      );

    } finally {

      setLoading(false);

      setTimeout(() => {

        setToast("");

      }, 3000);
    }
  };

  return (

    <div className="min-h-screen bg-[#050505] text-white grid lg:grid-cols-2 overflow-hidden">

      {/* Toast */}
      {toast && (

        <Toast
          message={toast}
        />

      )}

      {/* Left Side */}
      <div className="relative hidden lg:flex flex-col justify-between p-14 overflow-hidden border-r border-white/5">

        {/* Ambient Glow */}
        <div className="absolute top-[-220px] left-[-220px] w-[520px] h-[520px] bg-yellow-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-250px] right-[-250px] w-[520px] h-[520px] bg-amber-500/10 blur-[180px] rounded-full"></div>

        {/* Glass Shapes */}
        <div className="absolute top-[18%] right-[12%] w-[260px] h-[260px] rounded-[42px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl rotate-12"></div>

        <div className="absolute bottom-[12%] left-[10%] w-[190px] h-[190px] rounded-[34px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl -rotate-12"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        {/* Branding */}
        <div className="relative z-10">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.18)]">

              <ShieldCheck
                size={30}
                className="text-black"
              />

            </div>

            <div>

              <h1 className="text-2xl font-bold tracking-tight">

                Get Me Cab

              </h1>

              <p className="text-zinc-500 mt-1">

                Operations Platform

              </p>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">

            Premium Operations Suite

          </p>

          <h2 className="text-7xl font-bold leading-[0.95] tracking-tight mt-8">

            Modern
            <br />
            Fleet
            <br />
            Management

          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-10">

            Centralized ride operations platform designed for modern transportation businesses with premium real-time management and operational control.

          </p>

          {/* Features */}
          <div className="space-y-6 mt-14">

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <CheckCircle2
                  size={20}
                />

              </div>

              <p className="text-zinc-300 text-lg">

                Real-time ride management

              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <CheckCircle2
                  size={20}
                />

              </div>

              <p className="text-zinc-300 text-lg">

                Smart driver operations

              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <CheckCircle2
                  size={20}
                />

              </div>

              <p className="text-zinc-300 text-lg">

                Secure enterprise dashboard

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="relative flex items-center justify-center px-6 py-12 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-[-200px] right-[-200px] w-[420px] h-[420px] bg-yellow-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-200px] left-[-200px] w-[420px] h-[420px] bg-amber-500/10 blur-[180px] rounded-full"></div>

        {/* Depth Layers */}
        <div className="absolute w-[520px] h-[520px] rounded-full border border-yellow-500/10 bg-yellow-500/[0.03] blur-3xl"></div>

        <div className="absolute w-[420px] h-[420px] rounded-[60px] border border-white/5 bg-white/[0.025] backdrop-blur-3xl rotate-6 shadow-[0_0_60px_rgba(0,0,0,0.25)]"></div>

        <div className="absolute w-[360px] h-[360px] rounded-[50px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl -rotate-6"></div>

        {/* Floating Orbs */}
        <div className="absolute top-[18%] right-[20%] w-28 h-28 rounded-full bg-yellow-500/10 blur-[70px]"></div>

        <div className="absolute bottom-[18%] left-[18%] w-32 h-32 rounded-full bg-amber-500/10 blur-[80px]"></div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-md">

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.45)]">

            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

            <div className="relative z-10">

              {/* Heading */}
              <div className="mb-10">

                <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm">

                  Secure Access

                </p>

                <h1 className="text-5xl font-bold mt-5 tracking-tight leading-tight">

                  Welcome
                  <br />
                  Back

                </h1>

                <p className="text-zinc-500 mt-5 leading-relaxed">

                  Sign in to continue managing rides, drivers and operations.

                </p>

              </div>

              {loading ? (

                <Loader />

              ) : (

                <form
                  onSubmit={
                    handleLogin
                  }
                  className="space-y-5"
                >

                  {/* Email */}
                  <div>

                    <label className="text-sm text-zinc-400 block mb-3">

                      Email Address

                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(
                          e.target.value
                        )
                      }
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(250,204,21,0.08)] transition-all duration-300"
                    />

                  </div>

                  {/* Password */}
                  <div>

                    <label className="text-sm text-zinc-400 block mb-3">

                      Password

                    </label>

                    <div className="relative">

                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                          setPassword(
                            e.target.value
                          )
                        }
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 pr-14 text-white outline-none focus:border-yellow-500 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(250,204,21,0.08)] transition-all duration-300"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                        className="absolute top-1/2 right-5 -translate-y-1/2 text-zinc-500 hover:text-white transition-all duration-300"
                      >

                        {showPassword ? (

                          <EyeOff
                            size={20}
                          />

                        ) : (

                          <Eye
                            size={20}
                          />

                        )}

                      </button>

                    </div>

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 rounded-2xl py-4 font-semibold text-black mt-4 shadow-[0_0_35px_rgba(250,204,21,0.15)]"
                  >

                    <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

                    <span className="relative z-10">

                      Sign In

                    </span>

                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;