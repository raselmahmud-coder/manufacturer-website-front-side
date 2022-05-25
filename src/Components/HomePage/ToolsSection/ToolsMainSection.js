import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import ToolSingle from "./ToolSingle";

const ToolsMainSection = () => {
  const [tools, setTools] = useState([]);
  // console.log("tools", tools);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://auto-parts-rm.herokuapp.com/tools`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-4 bg-gray-500 border border-gray-200 sm:grid-cols-1 lg:grid-cols-2">
        {loading ? (
          <div className="flex lg:justify-end justify-center">
            <SpinnerCircular speed={250} color={"#0FCFEC"} />
          </div>
        ) : (
          tools?.map((tool) => <ToolSingle singleTool={tool} key={tool._id} />)
        )}
      </div>
    </>
  );
};

export default ToolsMainSection;
