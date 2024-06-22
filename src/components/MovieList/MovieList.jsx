import { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  //? отримуємо фільми
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("http://localhost:3000/api/movies");

      setMovies(data);
    };
    fetchMovies();
  }, []);

  const elements = movies.map(({ id, title, director }) => (
    <li key={id}>
      Title:{title}. Director: {director}
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieList;
