// API Key
const API_KEY = import.meta.env.VITE_API_KEY;
// Base URL
const BASE_URL = "https://api.themoviedb.org/3";
// API URL
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

// requests object to fetch movies
const requests = {
    fetchPopular: `${API_URL}&language=en-US`,
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
    fetchActionMovies: `${API_URL}&with_genres=28&language=en-US`,
    fetchComedyMovies: `${API_URL}&with_genres=35&language=en-US`,
    fetchHorrorMovies: `${API_URL}&with_genres=27&language=en-US`,
    fetchRomanceMovies: `${API_URL}&with_genres=10749&language=en-US`,
    fetchDocumentaries: `${API_URL}&with_genres=99&language=en-US`,
}

// genreIdMovie object
const genreIdMovie = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    Sci_Fi: 878,
    "Sci-Fi & Fantasy": 10765,
    TV_Movie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
}

// fetch data from the API and set the banner with a random movie
export function setBanner(){
    fetch(requets.fetchNetflixOriginals).then((res) => {
        res.json().then((data) => {
            // console.log(data.results);
            const setMovie =
                data.results[Math.floor(Math.random() * data.results.length - 1)];
            // console.log(setMovie);
            const banner = document.getElementById("banner");
            const genre = document.getElementById("genre");
            // set genre with the first genre id with object genreIdMovie
            genre.innerHTML = Object.keys(genreIdMovie).find(
                (key) => genreIdMovie[key] === setMovie.genre_ids[0]
            );

            // get movie trailer

            const releaseDate = document.getElementById("release-date");
            releaseDate.innerHTML =
                setMovie.first_air_date.slice(0, 4) || setMovie.release_date;

            const vote = document.getElementById("vote");
            vote.innerHTML = setMovie.vote_average + " / 10";

            banner.style.backgroundImage = `linear-gradient(90deg, #000, #000, transparent, transparent), url("https://image.tmdb.org/t/p/original/${setMovie.backdrop_path}")`;

            const bannerTitle = document.getElementById("banner-title");
            bannerTitle.innerHTML = setMovie.title || setMovie.name;
            const bannerDescription = document.getElementById("banner-description");
            bannerDescription.innerHTML = setMovie.overview;
        });
    });
}

// export the requests object
export { requests };

// export the genreIdMovie object
export { genreIdMovie };

export async function fetchMovies(url, title) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    const headrow = document.getElementById("headrow");

    const row = document.createElement("div");
    row.classList.add("row");
    headrow.appendChild(row);
    const titleProgram = document.createElement("h2");
    titleProgram.innerHTML = title;
    row.appendChild(titleProgram);
    const rowPosters = document.createElement("div");
    rowPosters.classList.add("row-posters");
    row.appendChild(rowPosters);
    data.results.map((movie) => {
        const poster = document.createElement("img");
        poster.classList.add("row-poster-large");
        poster.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
        rowPosters.appendChild(poster);
    });
}
