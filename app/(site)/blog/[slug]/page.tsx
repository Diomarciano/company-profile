import { getPost, getAllPostSlugs } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s: any) => ({ slug: s.slug }));
}

const components = {
  block: {
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mb-3 text-gray-900 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-900 pl-4 italic text-gray-600 my-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/#blog" className="text-blue-300 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Kembali ke Blog
          </Link>
          <p className="text-blue-300 text-sm mt-2 mb-3">
            {new Date(post.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
          {post.excerpt && <p className="text-blue-200 mt-4 leading-relaxed text-lg">{post.excerpt}</p>}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {post.image && (
          <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-8 shadow-sm">
            <Image src={urlFor(post.image).width(900).height(500).url()} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          {post.body ? (
            <PortableText value={post.body} components={components} />
          ) : (
            <p className="text-gray-400">Konten artikel belum tersedia.</p>
          )}
        </div>

        <div className="bg-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">Butuh konsultasi lebih lanjut?</h2>
          <p className="text-blue-200 mb-6">Tim kami siap membantu kebutuhan pembiayaan alat berat Anda.</p>
          <Link href="/kontak" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block">
            Hubungi kami
          </Link>
        </div>
      </div>
    </main>
  );
}
