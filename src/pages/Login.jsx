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
} from "../context/AuthContext";

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

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [toast, setToast] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const handleLogin = async (
    e
  ) => {

    e.preventDefault();

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

      {toast && (
        <Toast
          message={toast}
        />
      )}

      <div className="relative hidden lg:flex flex-col justify-between p-14 overflow-hidden border-r border-white/5">

        <div className="absolute top-[-220px] left-[-220px] w-[520px] h-[520px] bg-yellow-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-250px] right-[-250px] w-[520px] h-[520px] bg-amber-500/10 blur-[180px] rounded-full"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">

              <ShieldCheck
                size={30}
                className="text-black"
              />

            </div>

            <div>

              <h1 className="text-2xl font-bold">

                Get Me Cab

              </h1>

              <p className="text-zinc-500 mt-1">

                Operations Platform

              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="relative flex items-center justify-center px-6 py-12 overflow-hidden">

        <div className="relative z-10 w-full max-w-md">

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl">

            <div className="relative z-10">

              <div className="mb-10">

                <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm">

                  Secure Access

                </p>

                <h1 className="text-5xl font-bold mt-5">

                  Welcome
                  <br />
                  Back

                </h1>

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

                  <div>

                    <label className="text-sm text-zinc-400 block mb-3">

                      Email Address

                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e)=>
                        setEmail(
                          e.target.value
                        )
                      }
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
                    />

                  </div>

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
                        value={password}
                        onChange={(e)=>
                          setPassword(
                            e.target.value
                          )
                        }
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 pr-14 text-white outline-none"
                      />

                      <button
                        type="button"
                        onClick={()=>
                          setShowPassword(
                            !showPassword
                          )
                        }
                        className="absolute top-1/2 right-5 -translate-y-1/2 text-zinc-500"
                      >

                        {
                          showPassword
                          ?

                          <EyeOff size={20}/>

                          :

                          <Eye size={20}/>
                        }

                      </button>

                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl py-4 font-semibold text-black"
                  >

                    Sign In

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