import { SpinnerCircular } from "spinners-react";
import useGetTools from "../../Shared/Hooks/getTools/useGetTools";
import ToolSingle from "./ToolSingle";

const ToolsMainSection = () => {
  const [tools, loading] = useGetTools();
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
