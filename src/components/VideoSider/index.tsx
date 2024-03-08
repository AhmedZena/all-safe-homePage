import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./VideoSider.module.scss";

interface VideoSiderProps {
  videoSrc: string;
  textTitle1: string;
  textTitle2?: string;
  fontColor?: string;
  secondVideo?: string;
  imgSrc?: string;
}

const VideoSider = (
  //   {videoSrc:any,
  //   textTitle1: string,
  //   textTitle2: string}
  {
    videoSrc,
    textTitle1,
    textTitle2,
    fontColor,
    secondVideo,
    imgSrc,
  }: VideoSiderProps
) => {
  const marqueeContainer: any = useRef(null);
  const marqueeAnimation: any = useRef(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    // Calculate total width of all marquee parts
    const totalWidth = marqueeContainer.current.scrollWidth;

    // Initialize GSAP animation
    marqueeAnimation.current = gsap
      .timeline({ repeat: -1, paused: true })
      .to(
        ".marquee__part",
        {
          x: () => `-${totalWidth}px`,
          ease: "linear",
          duration: 70, // Adjust duration for speed
        },
        0
      )
      .to(".marquee__part", {
        x: "0px",
        ease: "linear",
        duration: 0,
      });

    // Default play animation
    marqueeAnimation.current.play();

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        // Scrolling down
        marqueeAnimation.current.timeScale(1); // Normal speed
      } else {
        // Scrolling up
        marqueeAnimation.current.timeScale(-1); // Reverse speed
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (marqueeAnimation.current) {
        marqueeAnimation.current.kill();
      }
    };
  }, []);

  return (
    <>
      <style>{`
            .marquee_parent {
                margin: 0;
                padding: 0;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                box-sizing: border-box;
                overflow-x: hidden; // Prevent horizontal scroll on body
            }

            .marquee__inner {
                position: relative;
                color: black;
                padding: 30px 0;
                font-weight: 600;
                font-size: 40px;
                text-transform: uppercase;
                overflow: hidden;
                display: flex;
                width: fit-content;
                flex: auto;
                flex-direction: row;
            }

            .marquee__part {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                padding: 0 4px;
            }

            .arrow {
                width: 300px;
                margin: 0 1em;
                transform: rotate(0deg);
                transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 200px;
                }

                &.active {
                    transform: rotate(1800deg);
                    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                }
            }
        `}</style>
      <div className="marquee_parent">
        <div className="marquee__inner" ref={marqueeContainer}>
          {[...Array(20)].map((_, index) => (
            <div className="marquee__part" key={index}>
              {/* CREATIVE <br />

                        DESIGN */}
              <span style={{ color: fontColor || "black" }}>
                {textTitle1 ? textTitle1 : null}
                {textTitle2 ? (
                  <>
                    <br /> {textTitle2}
                  </>
                ) : null}
              </span>
              <div className="arrow">
                <video autoPlay loop muted playsInline>
                  <source
                    // src="../../../public/assets/videos/videoSlider.mp4"

                    src={videoSrc}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {secondVideo ? (
                <div className="arrow">
                  <video autoPlay loop muted playsInline>
                    <source
                      // src="../../../public/assets/videos/videoSlider.mp4"

                      src={secondVideo}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : null}

              {imgSrc ? (
                <div className="arrow">
                  <img src={imgSrc} alt="Arrow" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSider;
