import { getProduct, getAllProductSlugs } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((s: any) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | PT Manis Manja Grup`,
      description: product.description,
      ...(product.image && { images: [{ url: urlFor(product.image).width(1200).height(630).url() }] }),
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/#layanan" className="text-blue-300 text-sm hover:text-white transition-colors mb-4 inline-block">← Kembali ke Layanan</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{product.name}</h1>
          {product.price && (
            <span className="inline-block mt-4 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">{product.price}</span>
          )}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {product.image && (
          <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-8 shadow-sm">
            <Image src={urlFor(product.image).width(900).height(500).url()} alt={product.name} fill className="object-cover" />
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tentang layanan ini</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "⚡", title: "Proses cepat", desc: "Persetujuan dalam 1-2 hari kerja" },
            { icon: "💼", title: "Konsultasi gratis", desc: "Tim kami siap membantu Anda" },
            { icon: "📋", title: "Syarat mudah", desc: "Dokumen minimal, proses simpel" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">Tertarik dengan layanan ini?</h2>
          <p className="text-blue-200 mb-6">Hubungi tim kami untuk mendapatkan penawaran terbaik.</p>
          <Link href="/kontak" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block">Hubungi kami sekarang</Link>
        </div>
      </div>
    </main>
  );
}
