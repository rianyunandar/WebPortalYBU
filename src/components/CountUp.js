import React from "react";
import CountUp from "react-countup";

function Footer() {
  return (
    <div>
      <h1 class="text-center">
        <CountUp start={0} end={6} duration={6}/> Jurusan <CountUp start={0}  end={1050} duration={6} /> Murid{" "}
        <CountUp start={0}  end={9000} duration={6}/> Alumni{" "}
      </h1>
    </div>
  );
}

export default Footer;
