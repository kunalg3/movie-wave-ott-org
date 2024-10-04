import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: 'black', 
        color: 'white', 
        padding: '20px 0', 
        textAlign: 'center',
        marginTop: 'auto', // Helps push the footer to the bottom
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} MovieWave. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          Follow us on:
        </Typography>
        {/* You can add social media icons, links, etc., here */}
        <Link to="https://github.com/kunalg3"><GitHubIcon/></Link>
        <Link to="https://www.linkedin.com/in/kunalgoyal446"><LinkedInIcon/></Link>
      </Container>
    </Box>
  );
}

export default Footer;
