import "./styles.css";

import React from "react";
import axios from "axios";

export default function App() {
  return (
    <div className="position-fixed bg-primary h-100 w-100">
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-success d-flex justify-content-center align-items-center m-3"
          style={{ height: "50px", width: "200px" }}
          // onClick={fetchTableNames}
        >
          ABSOLUTES
        </button>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="bg-success text-light d-flex justify-content-center align-items-center"
          style={{ height: "50px", width: "200px" }}
        >
          LOGO CENTER
        </div>
        <span className="d-flex justify-content-center text-light">
          Click and Log in
        </span>
      </div>
    </div>
  );
}
