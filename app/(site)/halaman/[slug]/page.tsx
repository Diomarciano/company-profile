import { getPage } from "@/lib/queries";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);
  if (!page) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
      <p className="text-gray-600">{page.description}</p>
    </main>
  );
}