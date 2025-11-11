const url = "https://api.themoviedb.org/3/movie/movie_id?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2UxMzkwMmJhYTM5NjRlMjE5NTk0MTM5YWNiNTIzNSIsIm5iZiI6MTc2MTYzMzYxNy45OTMsInN1YiI6IjY5MDA2NTUxMmY3MGQ0MDY0Y2EzMTMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tptnuw30NUbsGE38N54vo8thAEnZFsJ70aMlhFEpu5w",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
