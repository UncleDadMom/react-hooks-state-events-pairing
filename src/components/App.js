import {Video, video} from "../data/video.js";
import VideoInfo from "./VideoInfo";
import Buttons from "./Buttons";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video />
      <VideoInfo video={video}/>
      <Buttons video={video}/>
    </div>
  );
}

export default App;
