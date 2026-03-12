// "use client"

// import Footer from "@/lib/footer";
// import { News } from "@/type/type";
// import axios from "axios";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";  

// export const useNewsPage = () => { 

//     const {slug} = React.use(params);
//     const [news, setNews] = useState<News>()
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//     const fetchNews = async () => {
//       try{
//         const res = await axios.get<News>(`http://localhost:3001/api/news/${slug}`)
//         setNews(res.data)
//       }catch(error){
//         console.log(error)
//       }finally{
//         setLoading(false)
//       }
//     }
//     fetchNews()

//   }, [])
// }