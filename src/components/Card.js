import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div>
      {" "}
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "460px" }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/09/22/16/16/pizza-2776188_640.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total price</div>
            </div>
            <Link to="/" className="btn btn-primary bg-danger">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
