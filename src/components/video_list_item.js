import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    //this is the same thing as passing in video in the const 
    //this is the response from youtube
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className={'list-group-item'}>
            <div className={'video-list media'}>
                <div className={'media-left'}>
                    <img className={'media-object'} src={imageUrl}/>
                </div>
                <div className={'media-body'}>
                    <div className={'media-heading'}>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;