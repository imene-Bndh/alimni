import React from 'react'
import YouTube from 'react-youtube'
import './Watch.css'
import { Link, useLocation , useParams } from 'react-router-dom'

const Watch = () => {
    const videoId = useParams().videoId
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '450',
        width: '800',
        playerVars: {
          autoplay: 1,
        },
      };
      
    return (
        <div className="watch">
            <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        </div>
    );
    
}

export default Watch
