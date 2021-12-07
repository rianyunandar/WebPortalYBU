import React from "react";
import CountUp from "react-countup";

function CountUP() {
  return (
    <div>
      <h1 class="CountText">
        <span><CountUp start={0} end={6} duration={3}/> </span>{" "} Jurusan <CountUp start={0}  end={1050} duration={3} /> Murid{" "}
        <span> <CountUp start={0}  end={9000} duration={3}/> Alumni</span>
      </h1>
    </div>
  );
}

export default CountUP;
