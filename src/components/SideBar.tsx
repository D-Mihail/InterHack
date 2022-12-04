import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="col-2">
      <div className="text-center vh-100 d-flex justify-content-center flex-column">
        <Link to="/" className="btn btn-block btn-primary ">
          PnL
        </Link>
        <Link to="/telescope" className="btn btn-block btn-primary mt-4">
          Telescope
        </Link>
      </div>
    </div>
  );
};
