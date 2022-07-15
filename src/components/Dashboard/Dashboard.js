import React from "react";
import './Dashboard.css'

function Dashboard() {
  return <>
    <div className="dashboard-container">
      <div className="content">
        QUIZ() <span style={{ color: "#4bd1c6", marginLeft: "80px" }}>{"{"}</span>
      </div>
      <div className="content" style={{ paddingLeft: "100px" }}>
        Uptempo
      </div>
      <div className="content" style={{ paddingLeft: "100px" }}>
        dev test kit
      </div>
      <div className="content" style={{ paddingTop: "200px" }}>
        <span style={{ color: "#4bd1c6", marginBottom: "20px" }}>{"}"}</span>
        <button className="start-btn">START QUIZ</button>
      </div>
    </div>
  </>
}

export default Dashboard;
