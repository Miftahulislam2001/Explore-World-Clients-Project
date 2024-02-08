import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const [changeProfileInfo, setChangeProfileInfo] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(changeProfileInfo);
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="w-full rounded px-3 py-2 font-semibold text-gray-700 border border-gray-300 outline-none focus-within:border-red-300 transition ease-in-out mb-3"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              className="w-full rounded px-3 py-2 font-semibold text-gray-700 border-2 border-gray-300 outline-none focus-within:border-red-300 transition ease-in-out mb-3"
            />

            <div className="flex justify-between px-3 items-center whitespace-nowrap text-sm mb-6 ">
              <p onClick={()=>(setChangeProfileInfo(!changeProfileInfo))} className="flex items-center">
                Do You Want to change your name ?
                <span className="text-red-800 hover:text-red-600 transition ease-in-out duration-200 ml-1 cursor-pointer underline">
                  {changeProfileInfo ? "Apply Change":"Edit"}
                </span>
              </p>
              <p onClick={logOut} className="text-blue-600 hover:text-blue-900 transition ease-in-out duration-200 cursor-pointer underline">
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
