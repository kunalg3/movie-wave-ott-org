import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VideoEmbed = () => {
  const id=useParams();
  // useEffect(function print(){
  //   console.log({id})
  // },[]);
  return (
    <div style={{ width: '100%', height: '1000px' }}>
      <iframe src="https://www.2embed.cc/embed/tt2245084" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen='true'></iframe>
    </div>
  );
};

export default VideoEmbed;



