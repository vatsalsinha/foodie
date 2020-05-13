import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedlist = props.videos.map((video)=>{
        return <VideoItem 
                    key = {video.id.videoId} 
                    video={video} 
                    onvideoselect={props.onvideoselect}
                />
    });
    return(
        <div className="ui relaxed divided list">
             {renderedlist}
        </div>
    );
};

export default VideoList;