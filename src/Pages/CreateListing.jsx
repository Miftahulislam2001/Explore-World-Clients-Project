import React, { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedroom: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
  });
  const {
    type,
    name,
    bedroom,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
  } = formData;
  const onChange = () => {};

  return (
    <div className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex mb-6">
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-500 text-white"
            }`}
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
          >
            Sell
          </button>

          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sell"
                ? "bg-white text-black"
                : "bg-slate-500 text-white"
            }`}
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
          >
            Rent
          </button>
        </div>

        <label className="text-lg mt-6 font-semibold">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name "
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-100 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500"
        />

        <div className=" flex space-x-6 my-6 ">
          <div>
            <p className="text-lg font-semibold">Bads</p>
            <input
              type="number"
              id="bedrooms"
              value={bedroom}
              onChange={onChange}
              minLength="1"
              maxLength="50"
              required
              className="px-4 w-full py-2 text-lg text-gray-600 bg-white border border-gray-300 rounded transition duration-100 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500 text-center"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              minLength="1"
              maxLength="50"
              required
              className="px-4 py-2 w-full text-lg text-gray-600 bg-white border border-gray-300 rounded transition duration-100 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500 text-center"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex mb-6">
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-500 text-white"
            }`}
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
          >
            Yes
          </button>

          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-500 text-white"
            }`}
            type="button"
            id="parking"
            value="sale"
            onClick={onChange}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished Spot</p>
        <div className="flex mb-6">
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-500 text-white"
            }`}
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
          >
            Yes
          </button>

          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-500 text-white"
            }`}
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>

        <label className="text-lg mt-6 font-semibold">Address</label>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="address "
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-100 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500"
        />

        <label className="text-lg mt-6 font-semibold">Description</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="description "
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-100 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-500"
        />

        <p className="text-lg mt-6 font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-500 text-white"
            }`}
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
          >
            Yes
          </button>

          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-500 text-white"
            }`}
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-5">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                max={3000000}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus-within:border-sla600 text-center "
              />
              {type === "rent" && (
                <div className="text-md w-full whitespace-nowrap">
                  $ / month
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discount Price</p>
              <div className="flex w-full justify-center items-center space-x-5">
                <input
                  type="number"
                  id="discountPrice"
                  value={discountPrice}
                  onChange={onChange}
                  min={50}
                  max={3000000}
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus-within:border-sla600 text-center "
                />
                {type === "rent" && (
                  <div className="text-md w-full whitespace-nowrap">
                    $ / month
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600 ">
            The First image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white uppercase px-7 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out hover:shadow-lg active:bg-blue-900"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
