import { useState, useEffect } from "react";

const useUsername = () => {
  const [username, setUsername] = useState("Loading");
  useEffect(() => {
    const usernameLocalstorage = localStorage.getItem("username");

    if (!usernameLocalstorage) {
      const newUsername = `Daniel ${Math.round(Math.random() * 10 + 1)}`;
      localStorage.setItem("username", newUsername);
      setUsername(newUsername);
    } else {
      setUsername(usernameLocalstorage);
    }
  }, []);

  return username;
};

export default useUsername;
