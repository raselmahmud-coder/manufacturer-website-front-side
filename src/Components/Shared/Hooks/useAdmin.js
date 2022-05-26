import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    // console.log("inside useAdmin", email);
    if (email) {
      fetch(`https://auto-parts-rm.herokuapp.com/user/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
          .then((data) => {
              console.log("from use admin hook",data);
              setAdmin(data.admin)
              // setAdminLoading(false)
          });
    }
  }, [user]);
  return [admin, adminLoading, setAdminLoading];
};

export default useAdmin;
