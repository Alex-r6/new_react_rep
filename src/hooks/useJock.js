import axios from "axios"
import { useEffect, useState } from "react"


export const useJock = () => {
  const [jocks, setJocks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [isWork, setIsWork] = useState(false);

  const getJock = async () => {
    setIsWork(true)
    setLoading(true)
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      console.log(jocks)
      setJocks([...jocks, response.data])
    } catch (e) {
      setError(e.message);
    }
    setLoading(false)
    setIsWork(false)
  }


  return {
    getJock,
    jocks,
    error,
    loading, 
    setJocks,
    isWork
  }
}