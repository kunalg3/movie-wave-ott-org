const axios = require('axios')
const movie=async(req,res)=>{
    const searchQuery = req.query.title;

  try {
    const response = await axios.get('https://streaming-availability.p.rapidapi.com/shows/search/title', {
      params: {
        country: 'in',
        title: searchQuery,
        series_granularity: 'show',
        show_type: 'movie',
        output_language: 'en',
      },
      headers: {
        'x-rapidapi-key': '4576227ba0msh90b78f2ee1ae1d7p14ac68jsnc5958ab4d966',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
      },
    });

    res.json(response.data); // Send the API response back to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
module.exports=movie;