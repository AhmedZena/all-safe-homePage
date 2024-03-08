import React from "react";
import styles from "./DropedShapes.module.scss";

function DropedShapes() {
  return (
    <div className={styles.backgroundVideoContainer}>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source
          src="../../../public/assets/videos/droppedShapes.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className={styles.contentOverlay}>
        {/* Your existing content goes here */}
        <div className={styles["cb-overview-title"]}>
          <h2>
            BRAND <br />
            IDENTITIES
          </h2>
          <hr />
        </div>
        {/*  horizonatal line */}
        <hr className={styles.hr} />
        <div>
          <div className={styles["cb-overview-grid"]}>
            <div className={styles.starImg}>
              <img
                src="../../../public/assets/imgs/starSetting.png"
                alt="starSetting"
              />
            </div>

            <div className={styles.content}>
              <h1>CREATIVE DESIGN</h1>
              <p>
                We don't do cookie-cutter solutions. Our user-centered design
                encourages productivity and boosts revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropedShapes;
