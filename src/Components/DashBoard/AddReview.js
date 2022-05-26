import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const message = e.target.description.value;
    const name = user.displayName;
    // console.log(rating, message);
    const review = { rating, message, name };
    axios
      .post(`https://auto-parts-rm.herokuapp.com/add-review`, {
        review: review,
      })
      .then((res) => {
        if (res) {
          toast.success(`You have added a review`, {
            toastId: "review-add",
          });
        }
      });
    e.target.reset();
  };
  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center my-24 p-5">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl capitalize">
              We appreciate to get a review!
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <div>
              <div className="relative">
                <input
                  min="1"
                  max="5"
                  maxLength={1}
                  name="rating"
                  required
                  type="number"
                  className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Rating 1 for bad, 5 for good"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <textarea
                  className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter a comment"
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Save
            </button>
          </form>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/team-1.jpeg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default AddReview;
