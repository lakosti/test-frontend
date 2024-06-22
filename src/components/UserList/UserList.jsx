import axios from "axios";
import { useEffect, useState } from "react";

//*приходить помилка яку ми з html перетворюємо на об'єкт
const UserList = () => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/users");
        setUser(data);
      } catch (error) {
        console.log(error.response.data);
        setError(error.response.data.message);
      }
    };
    fetchUser();
  }, []);

  const elements = users.map(({ id, title, director }) => (
    <li key={id}>
      Title: {title}. Director: {director}.
    </li>
  ));

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return <ul>{elements}</ul>;
};

export default UserList;
