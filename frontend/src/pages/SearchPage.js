import React, { useState } from 'react';
import AppBarComponent from '../components/AppBarComponent';
import Footer from '../components/Footer';
import { SearchSharp } from '@mui/icons-material';
import { TextField, Box, InputAdornment, Button } from '@mui/material';
import axios from 'axios'; // Ensure axios is correctly imported
import MoviePoster from '../components/MoviePoster';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null); // State to hold search results

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchQuery.trim()) {
      console.log('Search Query:', searchQuery);

      // Options for the GET request, including dynamic search query
      const options = {
        method: 'GET',
        url: 'https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/search',
        params: { query: searchQuery }, // Use searchQuery as a param
        headers: {
          'x-rapidapi-key': '4576227ba0msh90b78f2ee1ae1d7p14ac68jsnc5958ab4d966',
          'x-rapidapi-host': 'advance-movie-api.p.rapidapi.com',
        },
      };

      try {
        // Make the GET request to the API
        const response = await axios.request(options);
        console.log(response.data.result.data);
        setSearchResults(response.data.result.data); // Store the results in state
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
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
        {searchResults ? (
          <div>
            {searchResults.map((movie) => (
              <div key={movie.Id} className="search-result-item">
                <MoviePoster key={movie.Id} movie={movie}/>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </Box>

      <Footer />
    </div>
  );
}

export default Search;