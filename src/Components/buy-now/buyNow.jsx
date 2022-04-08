import React from "react";
import "./buyNow.css";
export default function buyNow() {
  return (
    <div>
      <div className="container-fluid buy-now text-white">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 text-end">
            <img src="Group-2568.png" alt="" />
          </div>
          <div className="col-lg-7 text-start ">
            <h3 className="text-start ">Buy Now</h3>
            <p>
              Buy SYAC to be the collector of a unique Spoiled Young Ape. You
              get to watch them cause trouble and be a part of our distinctive
              club. Buying one Spoiled Young Ape costs 0.05 ETH(price excludes
              gas fees). There are no price tiers; SYAC costs the same for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
