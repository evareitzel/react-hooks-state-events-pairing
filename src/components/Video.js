function Video({video}){
  // console.log("data from Video component:", video);

  return (
    <iframe
        width="919"
        height="525"

        src={video}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
  )
}

export default Video
