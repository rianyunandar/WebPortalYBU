import React from "react";
import CountUp from "react-countup";

function Footer() {
  return (
    <div>
      <h1 class="text-center">
        <CountUp start={0} end={6} duration={3}/> Jurusan <CountUp start={0}  end={1050} duration={3} /> Murid{" "}
        <CountUp start={0}  end={9000} duration={3}/> Alumni{" "}
      </h1>
    </div>
  );
}

export default Footer;
