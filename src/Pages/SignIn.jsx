import React, { useContext, useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/firebase.config";



const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)
  const {
    signInUser,
    signInWithGoogle,
    signInWithGitHub,
  } = useContext(AuthContext);
  const emailRef = useRef();

  
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
    // Sign in User function 
    signInUser(email, password)
      .then((result) => {
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
     
  };
  
  // password reset function
  const handlePasswordResetWithEmail = () =>{
    const auth = getAuth(app)
    const email = emailRef.current.value;
    if(!email){
      toast.error('Please Provide Email For Password Reset')
      return
    }
    sendPasswordResetEmail(auth, email)
    .then((result) => {
      toast.success("Check Your Email For Reset Your Password")
    })
    .catch((error) => {
      toast.error("Password Reset Not success")
    });
  }

  return (
    <div className="sign-bg">
      <h2 className="text-3xl text-center mt-6 font-bold p-5 text-red-900">
        Sign In
      </h2>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[65%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            className="w-full rounded-2xl "
            src="https://plus.unsplash.com/premium_photo-1700681802470-64f440b12c74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full md:w-[65%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              name="email"
              className="w-full rounded px-3 py-2 font-semibold text-gray-700 border-2 border-gray-300 outline-none focus-within:border-red-300 transition ease-in-out mb-3"
              placeholder="Email address..."
              ref={emailRef}
            />

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full rounded px-3 py-2 font-semibold text-gray-700 border-2 border-gray-300 mb-3 outline-none focus-within:border-red-300 transition ease-in-out "
                placeholder="Password"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-xl cursor-pointer"
              >
                {showPassword ? <IoMdEyeOff /> : <IoEye />}
              </div>
              <p className="text-[#da4747]">{error && error}</p>
              <button
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:to-blue-900"
                type="submit"
              >
                Sign in
              </button>

              <div className="flex items-center mt-4 before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
                <p className="text-center font-semibold mx-4 text-gray-600">
                  OR
                </p>
              </div>

              <div>
                <button
                  onClick={signInWithGoogle}
                  className="px-[10px] py-1 bg-white text-gray-600 font-semibold border border-gray-200 rounded w-full flex justify-center items-center gap-[6px] mt-[33px] shadow-md transition duration-150 ease-in-out hover:shadow-xl"
                >
                  <FcGoogle className="text-[32px]" />
                  <span>Continue with Google</span>
                </button>

                <button
                  onClick={signInWithGitHub}
                  className="px-[10px] py-1 text-gray-600 font-semibold bg-white border border-gray-200 rounded w-full flex justify-center items-center gap-[6px] mt-[10px] shadow-md transition duration-150 ease-in-out hover:shadow-xl"
                >
                  <AiFillGithub className="text-[32px]" />
                  <span>Continue with Github</span>
                </button>
              </div>

              <div className="flex justify-between items-center text-sm px-3 mt-3">
                <p>
                  Don't Have a account?
                  <Link
                    className="text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out"
                    to="/sign-up"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
                <p onClick={handlePasswordResetWithEmail}>
                  <Link
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                    to="/sign-in"
                  >
                    Forget Password ?
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
