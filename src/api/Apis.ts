const apiKey: string = '7cf6eba5895d3a9e7f951847fc93fdb3';
const accessToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y2ZWJhNTg5NWQzYTllN2Y5NTE4NDdmYzkzZmRiMyIsInN1YiI6IjY2MDE4N2Q2ZDM4YjU4MDE3ZDFhMzExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZASwaZ0xOHBBLqkOjKrNofmcOW-VM3l8Q4gFkXyKhg8';
export const baseImgPath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
}
export const nowPlaying: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upComing: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popular: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`
}
export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
}
export const casts = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
}
