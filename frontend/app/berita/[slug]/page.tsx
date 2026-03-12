"use client"


import NewsCard from "@/components/ NewsCard";
import NewsSection from "@/components/NewSection";
import Sidebar from "@/components/SideNews";
import Footer from "@/lib/footer";
import { News } from "@/type/type";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";


export default function Home({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = React.use(params);
    const [news, setNews] = useState<News>()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
    const fetchNews = async () => {
      try{
        const res = await axios.get<News>(`http://localhost:3001/api/news/${slug}`)
        setNews(res.data)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchNews()

  }, [])
    return(
        <main >
            <section className="flex flex-col md:flex-row items-center md:items-start gap-20 max-w-6xl mx-auto p-6 mt-20">  
                <div className=" text-gray-700">
                    <h2 className="text-black font-bold text-xl md:text-2xl mb-2">
                          {news?.title}
                    </h2>
                    <hr className="border-gray-300 mb-4" />
                    <Image 
                        src={news?.thumbnail}
                        alt="SMA Negeri 1" 
                        width={1980} 
                        height={1000}
                    />
                    <p className="mb-4 mt-4">
                        {news?.content}
                    </p>
                </div>
                <div className="items-left"> 
                    <h1>Lastest News</h1>
                    <Sidebar/>
                </div>
            </section>
             <Footer/>
        </main>
    )
}