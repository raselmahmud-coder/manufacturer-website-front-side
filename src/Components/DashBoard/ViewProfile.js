import axios from "axios";
import React from "react";
import image from "../../../src/images/blog-2.jpg";

const ViewProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const degree = e.target.education.value;
    const location = e.target.location.value;
    const profileLink = e.target.profileLink.value;
    const phone = e.target.phone.value;
    console.log(degree, location, profileLink, phone);
    axios
      .post(`http://localhost:5000/update-profile`, {
        data: {
          degree: degree,
          location: location,
          linkedinLink: profileLink,
          phone: phone,
        },
      })
      .then((res) => {
        console.log("expected", res);
      });

    e.target.reset();
  };
  return (
    <>
      <section className="relative flex flex-wrap lg:items-start lg:h-screen my-12 p-5">
        <div className="w-full px-4 lg:my-0 mb-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <h1 className="text-3xl text-center mb-5">My Profile</h1>
            <div className="relative">
              <input
                name="education"
                type="text"
                className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Add your latest degree"
              />
            </div>
            <div className="relative">
              <input
                type={"text"}
                className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="location"
                placeholder="Location City/District"
              ></input>
            </div>
            <div className="relative">
              <input
                type={"url"}
                className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="profileLink"
                placeholder="Linkedin Profile Link"
              ></input>
            </div>
            <div className="relative">
              <input
                type={"number"}
                className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="phone"
                placeholder="Phone"
              ></input>
            </div>
            <div className="relative">
              <label htmlFor="profile">Profile Image</label>
              <input
                type={"file"}
                className="w-full bg-[#2D1B69] p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="profileImage"
              ></input>
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
            src={image}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default ViewProfile;
