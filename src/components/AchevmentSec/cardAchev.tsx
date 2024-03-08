import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import "./style.css";
import styles from "./style.module.scss";
interface CardProps {
  title: string;
  content: string;
  imageSrc: string;
}

// const Card = ({ title, content, imageSrc }) => {
const Card: React.FC<CardProps> = ({ title, content, imageSrc }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      card,
      { scale: 0.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.inOut" }
    );

    return () => {
      tl.reverse();
    };
  }, []);

  return (
    // <div className="card" ref={cardRef}>
    <div className={styles.card} ref={cardRef}>
      {/* <div className="text-card"> */}
      {/* <div className="text-card"> */}
      <div className={styles.textCard}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <video autoPlay playsInline loop muted className={styles.video}>
        <source
          data-src={imageSrc}
          //   type='video/webm;codecs="vp09.00.10.08.00"'
          src={imageSrc}
        ></source>
      </video>
      {/* <video autoplay playsinline loop muted>
                                            <source data-src="https://www.allsafeeg.com/uploads/achievements/source/42674326.mp4" type="video/webm;codecs=&quot;vp09.00.10.08.00&quot;" src="https://www.allsafeeg.com/uploads/achievements/source/42674326.mp4">
                                            <source data-src="https://www.allsafeeg.com/uploads/achievements/source/42674326.mp4" type="video/mp4" src="https://www.allsafeeg.com/uploads/achievements/source/42674326.mp4">
                                        </video> */}
    </div>
  );
};

export default Card;
