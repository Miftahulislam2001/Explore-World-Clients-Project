import React from "react";

const SignIn = () => {
  return (
    <div className="sign-bg">
      <h2 className="text-3xl text-center mt-6 font-bold ">Sign In</h2>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[65%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            className="w-full rounded-2xl "
            src="https://plus.unsplash.com/premium_photo-1700681802470-64f440b12c74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full md:w-[65%] lg:w-[40%] lg:ml-20">
          <form>
            <input type="email" name="email" className="w-full rounded px-3 py-2 font-semibold text-gray-700 border-2 border-gray-300 outline-none" placeholder="Email address..."/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
