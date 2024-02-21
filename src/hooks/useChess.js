import { useEffect, useState } from "react"

const BASE_URL_STATS = 'https://api.chess.com/pub/player/luanders0n/stats'
const BASE_URL_PROFILE = 'https://api.chess.com/pub/player/luanders0n'

const useChess = () => {
  const [userStats, setUserStats] = useState({})
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    fetch(BASE_URL_STATS)
    .then(response => response.json())
    .then(data => {
      setUserStats(data)
    })
    .catch(error => {
      console.log(error)
    });
  }, []);

  useEffect(() => {
    fetch(BASE_URL_PROFILE)
    .then(response => response.json())
    .then(data => {
      setUserProfile(data)
    })
    .catch(error => {
      console.log(error)
    });
  }, []);

  return { userStats, userProfile };
}

export default useChess;