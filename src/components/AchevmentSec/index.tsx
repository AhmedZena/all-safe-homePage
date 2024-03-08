import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Card from "./cardAchev";
// import "./style.css";
import styles from "./style.module.scss";
const SectionAchev = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      section,
      { scale: 0.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.inOut" }
    );

    return () => {
      tl.reverse();
    };
  }, []);

  return (
    // <div className="section" ref={sectionRef}>
    <div className={styles.section} ref={sectionRef}>
      <Card
        title="$75M"
        content="We help companies test their hypotheses and help them complete the huge tasks and store the largest data correctly and protect it. Securing databases and information that reached investments exceeding $75 million"
        imageSrc="https://www.allsafeeg.com/uploads/achievements/source/96351678.mp4"
      />
      <Card
        title="300+"
        imageSrc="https://www.allsafeeg.com/uploads/achievements/source/43516312.mp4"
        content="We have successfully completed more than 300 different attack projects. All control and access ports are secure and impenetrable"
      />
      <Card
        title="100 K"
        imageSrc="https://www.allsafeeg.com/uploads/achievements/source/42674326.mp4"
        content="We’ve gathered dozens of positive reviews from the clients and more than 100k reviews from their users. Trying to make this world a lit bit better"
      />
    </div>
  );
};

export default SectionAchev;
