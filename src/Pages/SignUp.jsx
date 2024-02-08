import React, { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser, updateProfileData } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      setError("Cannot leave any field empty");
      return;
    }
    if (password !== confirmPassword) {
      setError("password not matched");
      return;
    }
    if (password.length < 6) {
      setError("password at least 6 character");
      return;
    }
    setError(null);

    createUser(email, password)
      .then((result) => {
        updateProfileData(result.user, name);
        form.reset();
        setError(null);
        toast.success('Sign Up Successfully 👍')
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  return (
    <div className="sign-bg">
      <h2 className="text-3xl text-center mt-6 font-bold p-5 text-red-900">
        Sign Up
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
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              className="w-full rounded px-3 py-2 font-semibold text-gray-700 border border-gray-300 outline-none focus-within:border-red-300 transition ease-in-out mb-3"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              className="w-full rounded px-3 py-2 font-semibold text-gray-700 border border-gray-300 outline-none focus-within:border-red-300 transition ease-in-out mb-3"
              placeholder="Email address..."
              required
            />

            <div className="relative mb-6">
              <input
                type="password"
                name="password"
                className="w-full rounded px-3 py-2 font-semibold text-gray-700 border border-gray-300 mb-3 outline-none focus-within:border-red-300 transition ease-in-out "
                placeholder="Password"
                required
              />

              <input
                type="password"
                name="confirmPassword"
                className="w-full rounded px-3 py-2 font-semibold text-gray-700 border border-gray-300 mb-3 outline-none focus-within:border-red-300 transition ease-in-out "
                placeholder="Conform Password"
              />
              <p className="text-[#da4747]">{error && error}</p>
              <button
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:to-blue-900"
                type="submit"
              >
                Sign Up
              </button>

              <div className="flex justify-center items-center  px-3 mt-3">
                <p>
                  Already Have an account?
                  <Link
                    className="text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out underline ml-2"
                    to="/sign-in"
                  >
                    Sign in
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

export default SignUp;
