import {useState} from "react"
import Comment from "./Comment"

function Buttons({video}){
    const [increaseLikes, setIncreaseLikes] = useState(video.upvotes)
    const [increaseHate, setIncreaseHate] = useState(video.downvotes)
    const [showComments, setShowComments] = useState(true)

    
    function commentDisplay(){
        if(showComments === true){
            setShowComments(false)
        }else{
            setShowComments(true)
        }}
    // {increaseCount?output if true:output if false}  ternary syntax


    // function upvoted(){
    //     const clicked = 
    //     console.log(clicked)
    // }
    // function downvoted(){
    //     const clicked = video.downvotes++
    //     console.log(clicked)
    // }
    return (
        <div>
            <button onClick={() => setIncreaseLikes(increaseLikes => increaseLikes + 1)}>{increaseLikes}👍</button>
            <button onClick={() => setIncreaseHate(increaseHate => increaseHate+1)}>{increaseHate}👎</button>
            <div className="Comment Button">
                <button onClick={commentDisplay}>{showComments?"Show Comments":"Hide Comments"}</button>
            </div>
            <div className="Comment Section">
                <hr/>
                <h2>{video.comments.length} Comments</h2>
                {!showComments?<Comment video={video.comments}/>:null}
            </div>
        </div>
    )
}

export default Buttons