import React from 'react'

const VideoDetail = ({video}) => {

    if (!video){
        return (
            <div>Loading...</div>
        )
    }

    const videoID = video.id.videoID
    //we are using backticks for string interpolation - these two lines are the same
    const url = `https://www.youtube.com/embed/${videoID}`    
    // const url = `https://www.youtube.com/embed/` + videoID
    return(
        <div className={'video-detail col-md-8'}>
            <div className={'embed-responsive embed-reponsive-16by9'}>
                <iframe className={'embed-responsive-item'} src={url}></iframe>
            </div>
            <div className={'details'}>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;