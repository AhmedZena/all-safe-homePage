// FlipCard.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import "./style.css";
import styles from "./style.module.scss";
function FlipCard1() {
  const cardRef: any = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, { rotationY: 180, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, duration: 0.5, delay: 2 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // <div className="flip-card" ref={cardRef}>
    <div className={styles.flipCard} ref={cardRef}>
      {/* <div className="flip-card-inner"> */}
      <div className={styles.flipCardInner}>
        {/* <div className="flip-card-front"> */}
        <div className={styles.flipCardFront}>
          {/* Front content goes here */}
          <img
            src="https://www.allsafeeg.com/uploads/postcards/source/88451385.png"
            className="image-front"
          />
          <div className="div-titles">
            <div className={styles.cardTitle}>WEB DEVELOPMENT</div>
            <div className={styles.cbPostcardItemTag}>PROFISNAL BACKEND</div>
            <div className={styles.cbPostcardItemTag}>PROFISNAL FRONTEND</div>
          </div>
        </div>
        {/* <div className="flip-card-back"> */}
        <div className={styles.flipCardBack}>
          {/* Back content goes here */}
          <p>Back Content</p>
        </div>
      </div>
    </div>
  );
}

function FlipCard2() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card: any = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, { rotationY: 180, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, duration: 0.5, delay: 0 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // <div className="flip-card" ref={cardRef}>
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    <div className={styles.flipCard} ref={cardRef}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {/* Front content goes here */}
          <img
            src="https://www.allsafeeg.com/uploads/postcards/source/43781505.png"
            className="image-front"
          />
          <div className="div-titles">
            <div className={styles.cardTitle}>MOBILE DEVELOPMENT</div>
            <div className={styles.cbPostcardItemTag}>IOS</div>
            <div className={styles.cbPostcardItemTag}>ANDROID</div>
          </div>
        </div>
        {/* <div className="flip-card-back"> */}
        <div className={styles.flipCardBack}>
          {/* Back content goes here */}
          <p>Back Content</p>
        </div>
      </div>
    </div>
  );
}

function FlipCard3() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card: any = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, { rotationY: 180, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, duration: 0.5, delay: 2 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // <div className="flip-card" ref={cardRef}>
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    <div className={styles.flipCard} ref={cardRef}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {/* Front content goes here */}
          <img
            src="https://www.allsafeeg.com/uploads/postcards/source/96313755.png"
            // className="image-front"
            className={styles.imageFront}
          />
          {/* <div className="div-titles"> */}
          <div className={styles.divTitles}>
            {/* <div className={styles.cardTitle}>BACKEND DEVELOPMENT</div> */}
            <div className={styles.cardTitle}>BACKEND DEVELOPMENT</div>
            {/* <div className={styles.cbPostcardItemTag}>ARCHITECTURE</div> */}
            {/* <div className={styles.cbPostcardItemTag}>ARCHITECTURE</div> */}
            <div className={styles.cbPostcardItemTag}>ARCHITECTURE</div>
            {/* <div className={styles.cbPostcardItemTag}>DATABASE</div> */}
            <div className={styles.cbPostcardItemTag}>DATABASE</div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="div-titles">
            <div className={styles.cardTitle}>BACKEND DEVELOPMENT</div>
            <div className={styles.cbPostcardItemTag}>ARCHITECTURE</div>
            <div className={styles.cbPostcardItemTag}>DATABASE</div>
          </div>
          <p>
            "We create architecture and thought-over business logic of online
            services. Our team helps you select the best internal and external
            integration solutions."
          </p>
        </div>
      </div>
    </div>
  );
}

function FlipCard4() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card: any = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, { rotationY: 180, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, duration: 0.5, delay: 0.05 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // <div className="flip-card" ref={cardRef}>
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    <div className={styles.flipCard} ref={cardRef}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {/* Front content goes here */}
          <img
            src="https://www.allsafeeg.com/uploads/postcards/source/60965012.png"
            // className="image-front"
            className={styles.imageFront}
          />
          {/* <div className="div-titles div-titles4"> */}
          <div className={styles.divTitles + " " + styles.divTitles4}>
            {/* <div className={styles.cardTitle}>QUALITY <br /> ASSURANCE</div> */}
            <div className={styles.cardTitle}>
              QUALITY <br /> ASSURANCE
            </div>
            <div className={styles.cbPostcardItemTag}>A/B TESTING</div>
            <div className={styles.cbPostcardItemTag}>CHECKLIST</div>
          </div>
        </div>
        {/* <div className="flip-card-back"> */}
        <div className={styles.flipCardBack}>
          {/* <div className="div-titles div-titles4"> */}
          <div className={styles.divTitles + " " + styles.divTitles4}>
            <div className={styles.cardTitle}>
              QUALITY <br /> ASSURANCE
            </div>
            <div className={styles.cbPostcardItemTag}>A/B TESTING</div>
            <div className={styles.cbPostcardItemTag}>CHECKLIST</div>
          </div>
          <p>
            "We create architecture and thought-over business logic of online
            services. Our team helps you select the best internal and external
            integration solutions."
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AllCards() {
  return (
    <div className={styles.secCards}>
      <FlipCard1 />
      <FlipCard2 />
      <FlipCard3 />
      <FlipCard4 />
    </div>
  );
}
