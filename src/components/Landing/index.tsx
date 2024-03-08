import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Landing.module.scss";

function Landing() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.${styles["cb-video-container"]} video`, {
      scrollTrigger: {
        trigger: `.${styles["cb-video-container"]}`,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      width: "100%",
      borderRadius: "200px 100px 200px 100px",
    });
  }, []);

  return (
    <div className={styles["landing-page"]}>
      <h2>
        WE
        <a>
          CREATE
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>{" "}
        <br />
        DIGITAL
        <br />
        <span>_</span> SOLUTIONS
      </h2>

      <div className={styles["cb-video-container"]}>
        <video autoPlay loop muted playsInline style={{ width: "50%" }}>
          <source
            src="../../../public/assets/videos/space.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>
        As a tight-knit team of experts, we create memorable and emotional
        websites, digital experiences, and native apps.
      </p>
    </div>
  );
}

export default Landing;
