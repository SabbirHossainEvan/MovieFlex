export const TMDB_CONFIG = {

    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    header: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
    
}


export const fetchMovies = async ({ query }: {query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :'${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc';

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.header,
    });

    if(!response.ok) {
        throw new Error('Fail to fetch movies')
    }

    const data = await response.json();

    return data.result
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjc3ODI5ODk2ZjM0MGQ4MDk2NmQ4ZjdmYTA2M2E2MyIsIm5iZiI6MTc2NjE2MzYwOS41MTUsInN1YiI6IjY5NDU4NDk5MGMzYjA3Yjc4NTA3MjZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zqfhN-OORbdmVODQ1k1FF5rW_T8eSE1GOiB3_EMeDV4'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));