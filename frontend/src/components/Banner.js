import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material'; // MUI components
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import banners from '../data/banners';

const Banner = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full"
        onClick={onClick}
        style={{ padding: '10px' }}
      >
        <ArrowForwardIosIcon style={{ color: 'white', fontSize: '30px' }} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full"
        onClick={onClick}
        style={{ padding: '10px' }}
      >
        <ArrowBackIosIcon style={{ color: 'white', fontSize: '30px' }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
    ),
    dotsClass: "slick-dots custom-dots flex justify-center mt-4",
  };


  return (
    <Box className="w-full h-[600px] relative overflow-hidden bg-black">
      <Slider {...settings}>
        {banners.map((movie) => (
          <Box key={movie.id} className="relative">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover"
              style={{ height: '600px' }}
            />
            <Box className="absolute bottom-10 left-10 text-white">
              {/* Add text shadow here to improve readability */}
              <Typography
                variant="h2"
                component="h2"
                className="text-4xl mb-4"
                style={{
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // Text shadow for clarity
                }}
              >
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
