import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { SpinnerCircular } from "spinners-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const AdminRequired = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  const [admin, adminLoading, setAdminLoading] = useAdmin(user);

  const navigation = useNavigate()
  if (loading || adminLoading) {
    return (
      <>
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
          />
      </>
    );
  }
  console.log("admin got",admin);
  if (error) {
    toast.error(`error happen ${error}`, {
      id: "auth-error",
    });
  }
  if (!user || !admin) {
    //   signOut(auth);
    navigation("/")
    setAdminLoading(false)
  } else {
    setAdminLoading(false)
    return children;
  }
};

export default AdminRequired;
