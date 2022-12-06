const setToken = ({user}) => {
  const email = user?.user?.email;
  const name = user?.user?.displayName;
  if (email && name) {
      console.log("inside token",user.user.email);
      console.log("inside token-----------",user.user.displayName);
      fetch(`https://manufacturer-auto-parts.onrender.com/users/${email}`, {
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

export default setToken;
