import { useEffect, useState } from "react";
import axios from "axios";

//? змінне оточення на фронтенді
const { VITE_API_URL } = import.meta.env;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  //? отримуємо фільми
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(`${VITE_API_URL}/movies`);

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
