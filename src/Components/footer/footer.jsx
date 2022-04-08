import React from "react";
import "./footer.css";
export default function footer() {
  return (
    <div className="container-fluid bg-black">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 text-left align-items-center text-white">
            <span>SYAC TERMS AND CONDITIONS</span>
            <br />
            <span>© 2021 SYAC</span>
          </div>
          <div className="col-lg-4 text-left align-items-center">
            <img className="imge mt-3" src="image-7.png" alt="" />
          </div>
          <div className="col-lg-4 text-left align-items-center iconss">
            <img className="" src="Discord-Logo-1.png" alt="" />
            <img className="" src="Vector.png" alt="" />
            <img className="" src="Vector1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
