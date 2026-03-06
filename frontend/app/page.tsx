"use client";

import { Link, Section } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <main>
    <section className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Welcome to SMA Negeri 1</h1>
      <p className="text-lg text-gray-600">
        Explore our website to learn more about our school, programs, and
        achievements.
      </p>
      <Image
        src="/img/1.jpg"
        alt="SMA Negeri 1"
        width={1000}
        height={1000}
        className="rounded-lg shadow-md"
      />
    </section>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* ================= BIG CARD ================= */}
      <Link href="/berita/featured" className="lg:col-span-2">
        <Card className="overflow-hidden rounded-2xl group hover:shadow-xl transition">

          <div className="relative h-[400px] w-full">
            <img src="/img/1.jpg" alt="test" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <CardContent className="absolute bottom-6 left-6 text-white">
            <p className="text-sm bg-white/20 px-3 py-1 rounded-md inline-block mb-3">
              Berita Sekolah
            </p>
            <h1 className="text-2xl font-bold max-w-xl">
              Pengumuman Mutasi Masuk Peserta Didik
              Semester Ganjil T.A 2025/2026
            </h1>
            <p className="text-sm mt-3 opacity-80">
              08/07/2025 • Admin
            </p>
          </CardContent>

        </Card>
      </Link>

      {/* ================= SMALL CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {[1, 2, 3, 4].map((item) => (
          <Link key={item} href={`/berita/${item}`}>
            <Card className="overflow-hidden rounded-2xl group hover:shadow-lg transition">

              <div className="relative h-[190px] w-full">
                <Image
                  src="/img/1.jpg"
                  alt="mutasi"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <CardContent className="absolute bottom-4 left-4 text-white">
                <h2 className="text-sm font-semibold">
                  Pengumuman Hasil Seleksi Peserta Mutasi Masuk
                </h2>
                <p className="text-xs mt-2 opacity-80">
                  14/01/2026
                </p>
              </CardContent>

            </Card>
          </Link>
        ))}

      </div>

    </div>
    </main>
  )
}
