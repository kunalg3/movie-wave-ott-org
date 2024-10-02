import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material'; // MUI components
// import movies from '../data/movies'; // Importing movie data
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center mt-4",
  };

  // Filter the top 5 movies
  const topMovies = [
    {
      id: 1,
      title: 'Joker',
      poster: 'https://ntvb.tmsimg.com/assets/p15791706_v_h8_ai.jpg?w=1280&h=720',
    },
    {
      id: 2,
      title: 'Inception',
      poster: 'https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png',
    },
    {
      id: 3,
      title: 'Avengers: Endgame',
      poster: 'https://www.adgully.com/image/201904/marvel-avengers.jpg',
    },
    {
      id: 4,
      title: 'The Dark Knight',
      poster: 'https://wallpapercat.com/w/full/b/0/8/37797-3840x2160-desktop-4k-the-dark-knight-wallpaper-image.jpg',
    },
  ]

  return (
    <Box className="w-full h-[600px] relative overflow-hidden bg-black">
      <Slider {...settings}>
        {topMovies.map((movie) => (
          <Box key={movie.id} className="relative">
            {/* Fix the height for the banner */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover" // Tailwind ensures full width and height
              style={{ height: '600px' }} // Ensure height is consistent
            />
            <Box className="absolute bottom-10 left-10 text-white">
              <Typography variant="h2" component="h2" className="text-4xl mb-4">
                {movie.title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-600 hover:bg-blue-500 px-6 py-2"
              >
                Play
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
