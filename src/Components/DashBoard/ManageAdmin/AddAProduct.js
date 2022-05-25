import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../../firebase.init";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  /*  const { data: services, isLoading } = useQuery("services", () =>
        fetch(`http://localhost:5000/services`).then((res) => res.json())
      ); */
  /*     if (isLoading) {
        return (
          <>
            <div className="flex justify-center">
              <SpinnerCircular
                thickness={200}
                color={"#0FCFEC"}
                speed={150}
                size={130}
              />
            </div>
          </>
        );
      } */
  const [user] = useAuthState(auth);
  const email = user?.email;
  const imageStorageKey = `f26a8878d26810881658787352cb5dcd`;
  const onSubmit = (data) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const tool = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            image: image,
            description: data.description,
          };
          //sent tools object to the database
          if (email) {
            console.log("url", tool);
            fetch(`http://localhost:5000/tool/${email}`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(tool),
            }).then((res) =>
              res.json().then((data) => {
                console.log("got data", data);
                if (data.acknowledged) {
                  toast.success("Tool is added", {
                    toastId: "tool-add",
                  });
                  setLoading(false);
                  reset();
                } else {
                  setLoading(false);
                  reset();
                  toast.error("Failed to add a tool", {
                    toastId: "failed",
                  });
                }
              })
            );
          }
        } else {
          setLoading(false);
          reset();
          toast.error("Failed to add a tool", {
            toastId: "failed",
          });
        }
      });
  };
  return (
    <>
      <div className="w-1/2 mx-auto block lg:my-12 my-6">
        <h1 className="text-3xl text-white text-center my-3 capitalize">
          Add a Tool
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="price">Price</label>
          <input
            type={"number"}
            {...register("price", { required: true })}
            className="input w-full border-gray-300 border-2 mb-4"
          />
          {errors.price && (
            <p className="text-red-500">This field is required</p>
          )}
          <label htmlFor="quantity">Quantity</label>
          <input
            type={"number"}
            {...register("quantity", { required: true })}
            className="input w-full border-gray-300 border-2 mb-4"
          />
          {errors.quantity && (
            <p className="text-red-500">This field is required</p>
          )}
          <label htmlFor="name">Tool Name</label>
          <input
            type={"text"}
            {...register("name", { required: true })}
            className="input w-full border-gray-300 border-2 mb-4"
          />
          {errors.name && (
            <p className="text-red-500">This field is required</p>
          )}

          <label htmlFor="image">Tool Image</label>
          <input
            type={"file"}
            {...register("image", { required: true })}
            className="w-full mb-4"
          />
          {errors.image && (
            <p className="text-red-500">This field is required</p>
          )}
          <label htmlFor="description">Description</label>
          <textarea
            type={"text"}
            {...register("description", { required: true })}
            className="input w-full border-gray-300 border-2 mb-4"
          />
          {errors.description && (
            <p className="text-red-500">This field is required</p>
          )}
          {loading ? (
            <SpinnerCircular
              thickness={50}
              color={"#0FCFEC"}
              speed={190}
              size={50}
              style={{ margin: "0px auto", display: "block" }}
            />
          ) : (
            <input
              type="submit"
              value="Add Tool"
              className="block btn-accent mx-auto w-full py-2 my-3 rounded-lg cursor-pointer uppercase"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default AddAProduct;
