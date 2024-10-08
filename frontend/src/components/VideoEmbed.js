import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppBarComponent from './AppBarComponent';
import Footer from './Footer';

const VideoEmbed = () => {
  const {id}=useParams();
  return (
    <>
    <AppBarComponent/>
    <div style={{ width: '100%', height: '600px' }}>
      <iframe src={`https://www.2embed.cc/embed/${id}`} width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen='true'></iframe>
    </div>
    <Footer/>
    </>
  );
};

export default VideoEmbed;



