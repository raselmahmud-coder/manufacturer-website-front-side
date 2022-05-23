import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../firebase.init";
import useToken from "../Shared/Hooks/useToken";

const SocialLogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);
  // const [user, loading, error] = useAuthState(auth);
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token && user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user, token]);
  // console.log("user from social", user);
  const handleGoogle = async () => {
    await signInWithGoogle();
    console.log("inside goole1111111");
  };
  if (loading) {
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
  if (error) {
    toast.error(`error happen ${error}`, {
      toastId: "google_error",
      theme: "colored",
    });
  }

  return (
    <>
      <button
        onClick={handleGoogle}
        className="py-3 rounded-md uppercase border-gray-400 border-2 w-full"
      >
        continue with google
      </button>
    </>
  );
};

export default SocialLogIn;
