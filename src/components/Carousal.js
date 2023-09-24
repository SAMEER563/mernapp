import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel" style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex:"10"}}>
            <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
            </div>
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/27/08/13/coffee-2446645_640.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/17/10/22/food-2650675_640.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1502998369/pl/zdj%C4%99cie/nowoczesna-powietrzna-pompa-ciep%C5%82a-zainstalowana-na-zewn%C4%85trz-nowego-domu-miejskiego-zielona.webp?b=1&s=612x612&w=0&k=20&c=8PMza6Zs1KC43OjXZL_IwptdyBoX4ElfTeq25LjxMCc="
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
