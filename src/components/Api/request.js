const API_KEY= 'ece93cfd2faa956ad506021a1436b052';

const requests= {

    
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-US`,
    // fetchPopular:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchScience:`/discover/movie?api_key=${API_KEY}&with_genres=878`,

}

export default requests;