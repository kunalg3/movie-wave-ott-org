import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppBarComponent from './AppBarComponent';
import Footer from './Footer';
import { Box ,Typography} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const VideoEmbed = () => {
  const { id } = useParams();
  const token=localStorage.getItem('token')
  const navigate=useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <AppBarComponent />
      {token?(
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
        ):(
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}} flex={1}>
            <Typography variant="h4">
              Create account to access all movies and web series
            </Typography> <ArrowForwardIcon fontSize="large"/> <Link to='/register'><PersonAddAltIcon fontSize="large"/></Link>
          </Box>
      )}
      
      <Footer />
    </div>
  );
};

export default VideoEmbed;
