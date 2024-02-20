import { useEffect, useState } from "react"

const useGetGithub = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/luandersonalvesdev')
    .then(response => response.json())
    .then(data => {
      setUser(data)
    })
    .catch(error => {
      console.log(error)
    });
  }, []);

  return user;
}

export default useGetGithub;