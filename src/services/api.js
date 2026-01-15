const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjE1ZDhhYTA4YjdhYWNiMDgwZTA0YTE2NzczYmRkMiIsIm5iZiI6MTc2ODQ3NDIxMi4wNTQwMDAxLCJzdWIiOiI2OTY4YzY2NGU0OTM3YzAyNGFhODdlNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ldZ6gzG9imuvCkHWxA0YcdTvXjT914LV0dT0-OPVpms'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
  const data = await response.json()
  return data.results
}
