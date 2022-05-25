import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../firebase.init";

const ViewProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { data, isLoading, refetch, status } = useQuery("users", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  // console.log("status", data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const degree = e.target.education.value;
    const location = e.target.location.value;
    const profileLink = e.target.profileLink.value;
    const phone = e.target.phone.value;
    if (email) {
      console.log(degree, location, profileLink, phone);
      axios
        .patch(`http://localhost:5000/update-profile/${email}`, {
          data: {
            degree: degree,
            location: location,
            linkedinLink: profileLink,
            phone: phone,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            refetch();
            toast.success(`Your profile updated`, {
              toastId: "profile-update",
            });
          }
        });
    }
    e.target.reset();
  };

  if (isLoading || status.loading) {
    return (
      <SpinnerCircular
        speed={170}
        color={"#0FCFEC"}
        style={{ margin: "0px auto", display: "block" }}
      />
    );
  }
  return (
    <>
      <section className="relative flex flex-wrap lg:items-start lg:h-screen my-8 p-5">
        <div className="w-full px-4 lg:my-0 mb-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
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

        <div className="w-full px-4 lg:my-0 mb-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {data?.map((info, index) => (
                <tbody key={index}>
                  <tr>
                    <th>Name</th>
                    <td>{info?.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{info?.email}</td>
                  </tr>
                  <tr>
                    <th>Higher Degree</th>
                    <td>{info?.higherDegree}</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>{info?.location}</td>
                  </tr>
                  <tr>
                    <th>LinkeDin Profile</th>
                    <td>{info?.linkedinLink}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{info?.phone}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewProfile;
