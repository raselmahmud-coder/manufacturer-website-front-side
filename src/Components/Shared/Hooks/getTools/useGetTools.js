import { useEffect, useState } from "react";

const useGetTools = () => {
  const [tools, setTools] = useState([]);
  // console.log("tools", tools);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://manufacturer-auto-parts.onrender.com/tools`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      });
  }, []);
  return [tools, loading];
};

export default useGetTools;
