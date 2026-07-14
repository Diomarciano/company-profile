export default {
  name: "post",
  title: "Blog / Berita",
  type: "document",
  fields: [
    { name: "title", title: "Judul", type: "string" },
    { name: "slug", title: "Slug URL", type: "slug", options: { source: "title" } },
    { name: "publishedAt", title: "Tanggal publish", type: "datetime" },
    { name: "excerpt", title: "Ringkasan", type: "text" },
    { name: "image", title: "Gambar utama", type: "image", options: { hotspot: true } },
    { name: "body", title: "Isi artikel", type: "array", of: [{ type: "block" }] },
  ],
};