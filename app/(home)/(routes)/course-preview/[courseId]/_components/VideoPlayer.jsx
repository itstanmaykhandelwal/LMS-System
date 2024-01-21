import React from 'react'

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div>
            <h2 className='text-gray-400 mb-3'>Course Preview</h2>
            <video width="1000" height="250" controls controlsList='nodownload'>
                <source src={videoUrl} type='video/mp4' />
            </video>
        </div>
    )
}

export default VideoPlayer