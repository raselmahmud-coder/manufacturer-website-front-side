import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Ticker = (props) => {
  const { count } = props;
  console.log(count);
  return (
    <CountUp start={0} end={count} duration={2}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start}>
          <span ref={countUpRef} />
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Ticker;
