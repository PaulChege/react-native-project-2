const processMovies = movie => ({
  title: movie.Title,
  type: movie.Type,
  year: movie.Year,
  poster: movie.Poster
})

export const fetchMovies = async (searchParam) => {
  url = "http://www.omdbapi.com/?s="+searchParam+"&page=100&apikey=2141e4c4"
  const response = await fetch(url)
  const search = await response.json()
  if ('Error' in search){
    return null
  }
  else{
    return search.Search.map(processMovies)
  }
}