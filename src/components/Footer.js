import React from "react";

import "../css/skeleton.css";
import "../css/normalize.css";
import "../css/components.css";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="Footer container">
      <p>
        {" "}
        <a href={"https://www.budiutomo.co/"}>Yayasan Budi Utomo Way Jepara </a>
        <span> / </span> {year}
      </p>
    </div>
  );
}

export default Footer;
