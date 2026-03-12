"use client";

import { useEffect, useState } from "react"
import axios from "axios"
import { News } from "@/type/type"


export const useNews = () => {

  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchNews = async () => {
      try{
        const res = await axios.get<News[]>("http://localhost:3001/api/news")
        setNews(res.data)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    fetchNews()

  }, [])

  return { news, loading }
}