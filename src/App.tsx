import { useState } from "react";
import CursorContext from "./context/CursorContext";
import VideoSider from "./components/VideoSider";
import LineBreak from "./components/LineBreak/index.jsx";
import SvgContainer from "./components/SvgContainer/index.js";
import DropedShapes from "./components/DropedShapes/index.js";
import InfiniteScrollbar from "./components/SkillsSec";
import AllCards from "./components/FlipCard";
import SectionAchev from "./components/AchevmentSec";

import Cursor from "./components/Cursor";
import Landing from "./components/Landing";
import ArtDirection from "./components/ArtDirection";
import CoolestProjects from "./components/CoolestProjects/index";
import Coin from "./components/Coin/index";
import "./App.scss";

function App() {
  const [currentVideo, setCurrentVideo] = useState("");
  return (
    <>
      <CursorContext.Provider value={{ currentVideo, setCurrentVideo }}>
        <Landing />
        <Cursor />
        <VideoSider
          videoSrc="../../../public/assets/videos/videoSlider.mp4"
          textTitle1="CREATIVE"
          textTitle2="DESIGN"
        />
        <LineBreak />
        <SvgContainer />
        <DropedShapes />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ArtDirection />
        <CoolestProjects />
        <Coin />
        <InfiniteScrollbar />
        <AllCards />
        <SectionAchev />
        <br />
      </CursorContext.Provider>
    </>
  );
}

export default App;
