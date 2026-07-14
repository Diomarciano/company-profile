import { getSiteSettings, getProducts, getPosts } from "@/lib/queries";

export default async function Home() {
  const settings = await getSiteSettings();
  const products = await getProducts();
  const posts = await getPosts();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-900 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">{settings?.siteName ?? "Nama Perusahaan"}</h1>
        <p className="text-lg text-blue-200 mb-8">{settings?.tagline ?? "Tagline perusahaan"}</p>
        <a href="#layanan" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg">
          Lihat layanan kami
        </a>
      </section>

      {/* Produk / Layanan */}
      <section id="layanan" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Produk & Layanan</h2>
        {products.length === 0 && (
          <p className="text-center text-gray-400">Belum ada produk/layanan.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <div key={p.slug?.current} className="border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{p.description}</p>
              {p.price && <p className="text-blue-700 font-medium">{p.price}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Blog & Berita</h2>
          {posts.length === 0 && (
            <p className="text-center text-gray-400">Belum ada artikel.</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <div key={post.slug?.current} className="bg-white border rounded-xl p-5 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">{new Date(post.publishedAt).toLocaleDateString("id-ID")}</p>
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 text-sm">
        © {new Date().getFullYear()} {settings?.siteName ?? "Nama Perusahaan"}. Semua hak dilindungi.
        {settings?.email && <span className="ml-4">{settings.email}</span>}
      </footer>
    </main>
  );
}