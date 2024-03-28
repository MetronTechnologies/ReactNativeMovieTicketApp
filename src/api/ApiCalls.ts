import {casts, movieDetails, nowPlaying, popular, searchMovies, upComing} from "./Apis.ts";

export const getNowPlaying = async () => {
    try {
        console.log(nowPlaying)
        let response = await fetch(nowPlaying);
        // console.log('From now playing calls --->' + await response.json());
        return response.json();
    } catch (e) {
        console.error('Something went wrong in getting now_playing movies', e)
    }
}

export const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
        .then(response => response.json())
        .then(json => {
            console.log("Trinket ---> " + JSON.stringify(json));
            return json.movies;
        })
        .catch(error => {
            console.error(error);
        });
};
export const getPopular = async () => {
    try {
        console.log(popular)
        let response = await fetch(popular);
        return response.json();
    } catch (e) {
        console.error('Something went wrong in getting popular movies', e)
    }
}

export const getUpComing = async () => {
    try {
        console.log(upComing)
        let response = await fetch(upComing);
        return response.json();
    } catch (e) {
        console.error('Something went wrong in getting upcoming movies', e)
    }
}

export const searchMovieFunction = async(name: string) => {
    try {
        console.log(searchMovies(name))
        let response = await fetch(searchMovies(name));
        return response.json();
    } catch (e) {
        console.error('Something went wrong in searching movies', e)
    }
}

export const getMovieDetails = async(id: number) => {
    try {
        console.log(movieDetails(id))
        let response = await fetch(movieDetails(id));
        return response.json();
    } catch (e) {
        console.error('Something went wrong in searching movies', e)
    }
}

export const getMovieCasts = async(id: number) => {
    try {
        console.log(casts(id))
        let response = await fetch(casts(id));
        return response.json();
    } catch (e) {
        console.error('Something went wrong in searching movies', e)
    }
}

