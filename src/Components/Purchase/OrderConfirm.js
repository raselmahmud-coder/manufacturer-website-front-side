import React from "react";

const OrderConfirm = ({ count, tool }) => {
  // console.log(props);

  return (
    <>
      <input type="checkbox" id="order-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="order-modal"
            class="btn absolute right-3 top-3"
          >
            ✕
          </label>
          <form>
            <input
              type="text"
              placeholder="Type here"
              class="w-full"
            />
          </form>
          <div class="modal-action">
            <label htmlFor="order-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
