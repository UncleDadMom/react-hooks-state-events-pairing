function VideoInfo({video}){
    return (
    <div className="Video Info">
        <h1>
            {video.title}
        </h1>
        <p>
            {video.views} Views | Uploaded {video.createdAt}
        </p>
    </div>
    )
}

export default VideoInfo;