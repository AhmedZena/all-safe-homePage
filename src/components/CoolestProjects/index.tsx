import React from "react";
import VideoSider from "../VideoSider";

function CoolestProjects() {
  return (
    <>
      <style>
        {/* {`.coolest-projects-title {
      display: "flex", fontSize: "40px" 
    }
        `} */}
        {`.coolest-projects-title { display: flex; font-size: 30px; }
        media (max-width: 768px) {
            .coolest-projects-title {
                display: flex;
                font-size: 20px;
            }
            }
        `}
      </style>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          //   height: "100vh",
          padding: "20px",
          paddingBottom: "100px",
        }}
      >
        <div className="coolest-projects-title">
          <h1>CO</h1>
          <img src="/assets/imgs/circle.webp" alt="Circle" width={70} />
          <h1>LEST</h1>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{ borderRadius: "40%", width: "10%" }}
          >
            <source src="/assets/videos/happy.mp4" type="video/mp4" />
          </video>
          <h1>PROJECTS</h1>
        </div>

        <VideoSider
          videoSrc="../../../public/assets/videos/coin.mp4"
          textTitle1="CREATIVE"
          textTitle2="DESIGN"
          fontColor="white"
        />

        <VideoSider
          videoSrc="../../../public/assets/videos/coin.mp4"
          textTitle1="CREATIVE"
          textTitle2="DESIGN"
          fontColor="white"
        />
      </div>
    </>
  );
}

export default CoolestProjects;
