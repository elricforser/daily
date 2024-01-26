import "./styles.css";

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [tableNames, setTableNames] = useState(""); // ステートを追加

  const fetchTableNames = async () => {
    try {
      const response = await axios.get("http://localhost:3306/");
      console.log(response.data);
      setTableNames(response.data.join(", ")); // 取得したデータをステートに設定
    } catch (error) {
      console.error("Error fetching table names", error);
      setTableNames("データの取得に失敗しました"); // エラーメッセージをステートに設定
    }
  };

  return (
    <div className="position-fixed bg-primary h-100 w-100">
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-success d-flex justify-content-center align-items-center m-3"
          style={{ height: "50px", width: "200px" }}
          onClick={fetchTableNames}
        >
          ABSOLUTES
        </button>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="bg-success text-light d-flex justify-content-center align-items-center"
          style={{ height: "50px", width: "200px" }}
        >
          {tableNames || "LOGO CENTER"} {/* ステートを表示 */}
        </div>
        <span className="d-flex justify-content-center text-light">
          Click and Log in
        </span>
      </div>
    </div>
  );
}

