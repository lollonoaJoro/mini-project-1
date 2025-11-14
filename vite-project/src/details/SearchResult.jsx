export default function SearchResult() {
  const [query, setQuery] = useState("");
  const [debouncedValue, setdebouncedValue] = useState("");
  const debouncedQuery = useDebounce(query);
  const [movies, setMovies] = useState("");
  console.log(debouncedQuery);

  useEffect(() => {
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,
      },
    };
    const params = new URLSearchParams({
      include_adult: false,
      language: "en-US",
      page: 1,
      query: query,
    });
    const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;
    fetch(url, option)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return <div></div>;
}
