import React from "react";

function Coin() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          paddingTop: "100px",
        }}
      >
        <div style={{ display: "flex" }}>
          <video
            autoPlay
            muted
            loop
            style={{ borderRadius: "50%", width: "10%" }}
          >
            <source src="/assets/videos/coin.mp4" type="video/mp4" />
          </video>
          <div>
            <h1>WE THINK AND SPEAK MAINLY</h1>
            <h1>WE THINK AND SPEAK MAINLY</h1>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}

export default Coin;
