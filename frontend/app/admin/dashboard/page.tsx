import NewsForm from "@/components/ui/NewsForm";


export default function AdminNewsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Dashboard Admin - Input Berita
      </h1>

      <NewsForm />
    </main>
  )
}