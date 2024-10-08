import React from 'react';
import { useParams } from 'react-router-dom';
import AppBarComponent from './AppBarComponent';
import Footer from './Footer';

const VideoEmbed = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen">
      <AppBarComponent />
      <div className="w-full h-[600px]">
        <iframe
          src={`https://www.2embed.cc/embed/${id}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default VideoEmbed;
