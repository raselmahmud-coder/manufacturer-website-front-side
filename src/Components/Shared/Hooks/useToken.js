import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name:name };
    console.log("email get inside token", user?.user?.email);
    console.log("email get inside token", user?.user?.displayName);
    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("inside useToken data", data);
            const accessToken = data.token;
            localStorage.setItem("accessToken", accessToken)
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
