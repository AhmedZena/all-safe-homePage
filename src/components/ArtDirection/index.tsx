import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function ArtDirection() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (isHovered) {
        const cursor = cursorRef.current;
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <h1>ART DIRECTION</h1>
      {/* <div style={{ height: "50px" }}>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    style={{ borderRadius: '25%', width: '50%' }}
                >
                    <source
                        src="/assets/videos/bubbles.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div> */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        {isHovered && (
          <div
            ref={cursorRef}
            style={{
              position: "absolute",
              left: -200,
              top: -150,
              pointerEvents: "none",
              zIndex: -1, // Ensure it's on top of everything
            }}
          >
            <video
              //   ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              style={{ borderRadius: "50%", width: "300px", height: "300px" }}
            >
              <source
                src="../../../public/assets/videos/bubbles.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <hr />

        <div>
          <h3>ART DIRECTION</h3>

          <div style={{ display: "flex", margin: "10px", gap: 50 }}>
            <div style={{ width: "45%" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptatem expedita sequi asperiores atque dolorem eveniet tempore
              totam id fugit, enim similique vero quos vel autem ad porro
              quibusdam dolor.
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
                width: "45%",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                Visual
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                WEB
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                DESIGN
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                MOTION
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                Visual
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                WEB
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                DESIGN
              </span>
              <span
                style={{
                  border: "1px black solid",
                  borderRadius: "10px",
                  padding: "5px",
                  height: "40px",
                }}
              >
                MOTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDirection;
