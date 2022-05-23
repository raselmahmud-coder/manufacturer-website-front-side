import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
export const useLoader = (isShow) => {
  const [loader, setLoader] = useState(isShow);
  useEffect(() => {
    if (loader) {
      return (
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      );
    }
    console.log("hello from loader", loader);
  }, [loader]);

  return [loader, setLoader];
};
