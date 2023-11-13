import React from "react";
import "./index.css";
export default function index({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
          {data && data.i && data.i.imageUrl ? (
            <img src={data.i.imageUrl} alt={data.l} />
          ) : null}
          <div className="card-info">
            <h3>{data.l}</h3>
            <p>{data.q}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
