import React, { useState, useEffect } from "react";

export default function Card({ data }) {
  return (
    <div className="card">
      {console.log(data)}
      <div className="profile_container">
        <img src={data.avatar} alt="" />
      </div>
    </div>
  );
}
