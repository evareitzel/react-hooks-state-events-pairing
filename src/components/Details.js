import { useState } from 'react'
import Comments from "./Comments"

function Details({ title, views, date, upvotes, downvotes, comments }) {
  const [increaseUpvotes, setIncreaseUpvotes] = useState(upvotes)
  const [decreaseVotes, setDecreaseVotes] = useState(downvotes)
  const [isHidden, setIsHidden] = useState(false)

  // console.log('data from Details: ', title)
  // const addUpvote = () => setUpvotes(upvotes++)

  function handleUpvotesClick() {
    setIncreaseUpvotes((increaseUpvotes) => increaseUpvotes + 1)
  }

  function handleDownvotesClick() {
    setDecreaseVotes((decreaseVotes) => decreaseVotes - 1)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {date}</p>
      <button onClick={handleUpvotesClick}>{increaseUpvotes}👍</button>
      <button onClick={handleDownvotesClick}>{decreaseVotes}👎</button>
      <button onClick={() => {setIsHidden(!isHidden)}}>{isHidden ? 'Show' : 'Hide'} Comments</button>
      <hr />
      {isHidden ? null
        : <Comments comments={comments} />
      }
    </div>
  )
}

export default Details
