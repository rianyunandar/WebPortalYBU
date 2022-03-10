import React from "react";
import CountUp from "react-countup";

function CountUP() {
  return (
    <div>
      <h1 class="CountText">
        <CountUp start={0} end={6} duration={3} /> Jurusan{" "}
        <CountUp start={0} end={1050} duration={3} /> Murid{" "}
      </h1>
      <h1 class="CountText">
        &gt <CountUp start={0} end={25000} duration={3} /> Alumni
      </h1>
    </div>
  );
}

export default CountUP;
