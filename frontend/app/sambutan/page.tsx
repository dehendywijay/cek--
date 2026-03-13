import Sidebar from "@/components/SideNews";
import Footer from "@/components/footer";
import Image from "next/image";


export default function Home(){
    return(
        <main >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 max-w-6xl mx-auto p-6 mt-20">          
            <section className="col-span-3 gap-10 max-w-6xl mx-auto p-6 "> 
                <div className="relative w-64 h-64 shrink-0 ">
                        <div className="absolute inset-0 rounded-full border-8 border-red-800"></div>
                        <Image
                          src="/path-to-image.jpg"
                          alt="Kepala Sekolah"
                          fill
                          className="rounded-full w-full h-full object-cover relative z-10"
                        />
                      </div>
                      
                      <div className="max-w-xl text-gray-700">
                        <h2 className="text-red-700 font-bold text-xl md:text-2xl mb-2 mt-6">
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
                      </div>
                     
            </section>
            <div className="">
            <Sidebar/>
            </div>
            
            </div>
             <Footer/>
        </main>
    )
}