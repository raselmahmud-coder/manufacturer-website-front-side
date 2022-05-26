import axios from "axios";
import React from "react";

const ConfirmDeleteModal = ({ showConfirm, setShowConfirm, email, setMyOrders }) => {
    // console.log("gmail",email);

  const handleDeleteConfirm = () => {
    if (showConfirm.id) {
      axios
        .delete(`https://auto-parts-rm.herokuapp.com/order/${showConfirm.id}`)
          .then((res) => {
              if (res.data) {
                  axios.get(`https://auto-parts-rm.herokuapp.com/orders/${email}`).then(res => {
                      console.log(res.data, "from modal")
                      return setMyOrders(res.data)
                  })
                  setShowConfirm({isShow:false})
              }
          });
    }
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-xl btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-red-500">
            Are You Sure? Want To Delete?
          </h3>
          <p className="py-4">
            Once delete you can not retrieve
          </p>
          <button className="btn" onClick={handleDeleteConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
