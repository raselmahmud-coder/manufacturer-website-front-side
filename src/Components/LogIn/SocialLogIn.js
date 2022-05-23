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
  // const [user, loading, error] = useAuthState(auth);
  const [token] = useToken(user);
  const from = location.state?.from?.pathname || "/";
  /*   useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, token, user]);
 */
  // console.log("user from social", user);
  const handleGoogle = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
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
