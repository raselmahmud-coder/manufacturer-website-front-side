import { useEffect, useState } from "react";

const UseToken = ({user}) => {

  // const [token, setToken] = useState("");
  
  const email = user?.user?.email;
  const name = user?.user?.displayName;
  // const currentUser = { email: email, name:name };
  
  if (email && name) {
      console.log("inside token",user.user.email);
      console.log("inside token-----------",user.user.displayName);
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({name:name}),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("inside useToken data", data);
          const accessToken = data.token;
          console.log("get token", data);
            localStorage.setItem("accessToken", accessToken)
          // setToken(accessToken);
        });
    }

  
};

export default UseToken;
