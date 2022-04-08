import React from "react";
import "./gallery.css";

export default function gallery() {
  return (
    <div>
      <div className="container-fluid bg-dark gallery">
        <div className="row d-flex justify-content-center">
          <h3>Our Gallery</h3>
          <div className="col-lg-8 imges">
            <img src="Donald-Trump.png" className="gallery-img" alt="" />
            <img src="drake.png" className="gallery-img" alt="" />
            <img src="Harry-Potter.png" className="gallery-img" alt="" />
            <img src="photo_2021.png" className="gallery-img" alt="" />
            <img src="justin-bieber.png" className="gallery-img" alt="" />
            <img src="Kanye-West.png" className="gallery-img" alt="" />
            <img src="Mark-Zuckerberg.png" className="gallery-img" alt="" />
            <img src="Nayib-Bukele.png" className="gallery-img" alt="" />
            <img src="Stephen-Curry.png" className="gallery-img" alt="" />
            <img src="Steve-Aoki.png" className="gallery-img" alt="" />
            <img src="The-Weekend.png" className="gallery-img" alt="" />
            <img src="Donald-Trump.png" className="gallery-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
