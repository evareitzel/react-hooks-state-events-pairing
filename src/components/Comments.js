function Comments({comments}){
  // console.log(comments)
  const numComments = comments.map(comm => (
      <div key={comm.id}>
        <h2>{comm.user}</h2>
        <p>{comm.comment}</p>    
      </div>
  ))

  return(
    <>
      <h2>{comments.length} Comments</h2>
      {numComments}
    </>
  )
}

export default Comments