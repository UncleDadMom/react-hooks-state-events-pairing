function Comment({video}){
    return (
        <>
             {video.map(comment => {
        return (
        <div key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.comment}</p>
        </div>
        )})} 
        </>
    )
}
export default Comment