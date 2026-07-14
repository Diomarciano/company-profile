import { getSiteSettings, getProducts, getPosts } from "@/lib/queries";
import Link from "next/link";

export default async function Home() {
  const settings = await getSiteSettings();
  const products = await getProducts();
  const posts = await getPosts();

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-700/50 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">Selamat datang</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{settings?.siteName ?? "Nama Perusahaan"}</h1>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">{settings?.tagline ?? "Tagline perusahaan Anda"}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#layanan" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">Lihat layanan kami</a>
            <Link href="/kontak" className="border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Hubungi kami</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10+", label: "Tahun pengalaman" },
            { value: "200+", label: "Klien puas" },
            { value: "50+", label: "Tim profesional" },
            { value: "99%", label: "Tingkat kepuasan" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-blue-900 mb-1">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="layanan" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Yang kami tawarkan</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Produk & Layanan</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Solusi terbaik untuk membantu bisnis Anda berkembang.</p>
          </div>
          {products.length === 0 ? (
            <p className="text-center text-gray-400 py-16">Belum ada produk/layanan. Tambahkan di Studio CMS.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p: any) => (
                <div key={p.slug?.current} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.description}</p>
                  {p.price && <p className="text-blue-900 font-semibold text-sm">{p.price}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-blue-900 py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap memulai kerja sama?</h2>
          <p className="text-blue-200 mb-8">Hubungi kami dan dapatkan konsultasi gratis untuk kebutuhan bisnis Anda.</p>
          <Link href="/kontak" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block">Mulai konsultasi</Link>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Informasi terbaru</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Blog & Berita</h2>
          </div>
          {posts.length === 0 ? (
            <p className="text-center text-gray-400 py-16">Belum ada artikel. Tambahkan di Studio CMS.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <article key={post.slug?.current} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-40" />
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2">{new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-lg mb-2">{settings?.siteName ?? "Company Profile"}</p>
            <p className="text-blue-300 text-sm leading-relaxed">{settings?.tagline}</p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-300">Navigasi</p>
            <div className="flex flex-col gap-2 text-sm text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <Link href="/#layanan" className="hover:text-white transition-colors">Layanan</Link>
              <Link href="/#blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/kontak" className="hover:text-white transition-colors">Kontak</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-300">Kontak</p>
            <div className="flex flex-col gap-2 text-sm text-blue-200">
              {settings?.email && <p>✉ {settings.email}</p>}
              {settings?.phone && <p>☎ {settings.phone}</p>}
              {settings?.address && <p>⊙ {settings.address}</p>}
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900 px-6 py-4 text-center text-xs text-blue-400">
          © {new Date().getFullYear()} {settings?.siteName ?? "Company Profile"}. Semua hak dilindungi.
        </div>
      </footer>
    </main>
  );
}
