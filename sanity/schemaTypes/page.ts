export default {
  name: "page",
  title: "Halaman",
  type: "document",
  fields: [
    { name: "title", title: "Judul", type: "string" },
    { name: "slug", title: "Slug URL", type: "slug", options: { source: "title" } },
    { name: "description", title: "Deskripsi singkat", type: "text" },
    { name: "image", title: "Gambar utama", type: "image", options: { hotspot: true } },
  ],
};