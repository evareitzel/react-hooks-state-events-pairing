import React from 'react'
import video from "../data/video.js";
import Video from "./Video"
import Details from "./Details"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video.embedUrl}/> 
      <Details title={video.title} views={video.views} date={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments}/>
    </div>
  );
}

export default App;
