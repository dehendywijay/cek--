"use client"

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import CountUp from "react-countup";
import Footer from "@/components/footer";
import NewsSection from "@/components/NewSection";
export default function Home() {
  const [emblaRef] = useEmblaCarousel()
  return (
    <main className="">
      <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide relative">
              <Image
                src="/img/1.jpg"
                alt="SMA Negeri 1"
                width={1980}
                height={1000}
                className="rounded-lg shadow-md"
              />
                <div className="absolute top-100 left-90 text-white bg-black bg-opacity-60 rounded px-3 py-2 max-w-xs">
                  <h2 className="text-lg font-bold">Judul Overlay</h2>
                  <p>Ini teks overlay di atas gambar</p>
                </div>
            </div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto p-6 mt-40">
      
      {/* Foto dengan border dan dekorasi lingkaran */}
      <div className="relative w-64 h-64 shrink-0 ">
        {/* Border lingkaran besar */}
        <div className="absolute inset-0 rounded-full border-8 border-red-800"></div>
        
        {/* Foto lingkaran */}
        <Image
          src="/path-to-image.jpg"
          alt="Kepala Sekolah"
          fill
          className="rounded-full w-full h-full object-cover relative z-10"
        />

        {/* Dekorasi lingkaran kecil kiri atas */}
        <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full border-4 border-red-800 bg-red-900"></div>
        
        {/* Dekorasi lingkaran kecil kanan bawah */}
        <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full border-4 border-red-800 bg-red-900"></div>
        
        {/* Dekorasi lingkaran kecil kiri bawah */}
        <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full border-2 border-red-800 bg-red-700"></div>
      </div>
      
      {/* Teks sambutan */}
      <div className="max-w-xl text-gray-700">
        <h2 className="text-red-700 font-bold text-xl md:text-2xl mb-2">
          SAMBUTAN KEPALA SEKOLAH
        </h2>
        <hr className="border-gray-300 mb-4" />
        <p className="mb-4">
          Selamat datang di website <strong>SMA N 1 BANGUNREJO</strong> yang saya tujukan untuk seluruh unsur
          pimpinan, guru, karyawan, siswa, serta masyarakat umum agar dapat mengakses berbagai informasi
          tentang sekolah kami.
        </p>
        <p className="mb-4">
          Kami menyadari bahwa dalam penyajian informasi di website ini masih terdapat banyak kekurangan.
          Oleh karena itu, kami sangat terbuka terhadap saran dan kritik dari seluruh civitas akademika
          maupun masyarakat luas demi perbaikan dan kemajuan sekolah ke depannya.
        </p>
        <p className="mb-6">
          Harapan saya, website ini dapat menjadi wahana interaksi yang positif, baik antar civitas akademika
          maupun dengan masyarakat pada umumnya, sehingga dapat mempererat jalinan silaturahmi di berbagai
          unsur. Mari kita bekerja dan berkarya dengan penuh keikhlasan serta mengharap ridho Tuhan Yang Maha
          Esa demi masa depan generasi bangsa.
        </p>
        <p className="font-semibold">
          – LOREM<br />
          Kepala Sekolah SMA N 1 BANGUNREJO
        </p>

     <div className="relative w-full bg-transparent">
      {/* Background image dengan overlay */}
      <div className="absolute inset-0">
        <img
          src="/img/1.jpg"
          alt="Background SMK Telkom Lampung"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex justify-between text-white">
        <div className="flex flex-col items-center">
          <CountUp start={0} end={557} duration={2.5} separator="," className="text-5xl font-extrabold" />
          <span className="uppercase text-sm font-semibold mt-2">Total Siswa</span>
        </div>

        <div className="w-px bg-white opacity-50 mx-6"></div>

        <div className="flex flex-col items-center">
          <CountUp start={0} end={49} duration={2.5} separator="," className="text-5xl font-extrabold" />
          <span className="uppercase text-sm font-semibold mt-2">Guru & Tendik</span>
        </div>

        <div className="w-px bg-white opacity-50 mx-6"></div>

        <div className="flex flex-col items-center">
          <CountUp start={0} end={4} duration={2.5} separator="," className="text-5xl font-extrabold" />
          <span className="uppercase text-sm font-semibold mt-2">Program Studi</span>
        </div>

        <div className="w-px bg-white opacity-50 mx-6"></div>

        <div className="flex flex-col items-center">
          <CountUp start={0} end={642} duration={2.5} separator="," className="text-5xl font-extrabold" />
          <span className="uppercase text-sm font-semibold mt-2">Total Alumni</span>
        </div>
      </div>
    </div>
      </div>
    </div>
    <NewsSection />
    <Footer/>
    </main>
  )
}
