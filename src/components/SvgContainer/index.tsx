import React from "react";
// import "./SvgContainer.scss";
import styles from "./SvgContainer.module.scss";
function SvgContainer() {
  return (
    // <div className="cb-overview-grid">
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
  );
}

export default SvgContainer;
