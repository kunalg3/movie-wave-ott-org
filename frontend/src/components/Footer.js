import React from 'react';
import { Box, Typography, Container } from '@mui/material';

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
      </Container>
    </Box>
  );
}

export default Footer;
