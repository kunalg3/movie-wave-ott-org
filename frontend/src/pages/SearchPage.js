import React, { useState } from 'react';
import AppBarComponent from '../components/AppBarComponent';
import Footer from '../components/Footer';
import { SearchSharp } from '@mui/icons-material';
import { TextField, Box, InputAdornment, Button } from '@mui/material';
import axios from 'axios'; // Ensure axios is correctly imported
import SearchMoviePoster from '../components/SearchMoviePoster';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null); // State to hold search results

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchQuery.trim()) {
      console.log('Search Query:', searchQuery);
      try {
        // Make the GET request to the API
        const response = await axios.get(`/movie/search?title=${searchQuery}`);
        console.log(response.data);
        setSearchResults(response.data); // Store the results in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppBarComponent />
      
      {/* Centered Search Input and Button */}
      <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
        {/* Form to handle submit on Enter key or button click */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // Update searchQuery state
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchSharp />
                </InputAdornment>
              ),
            }}
            sx={{ width: '500px' }}
          />

          {/* Submit button */}
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </form>
      </Box>

      {/* Display search results */}
      <Box display="flex" justifyContent="space-around" flex-wrap='wrap' >
        {searchResults ? (
            searchResults.map((movie) => (
                <SearchMoviePoster key={movie.Id} movie={movie}/>
            ))
        ) : (
          <p>No results found</p>
        )}
      </Box>

      <Footer />
    </div>
  );
}

export default Search;