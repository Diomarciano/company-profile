export default {
  name: "product",
  title: "Produk / Layanan",
  type: "document",
  fields: [
    { name: "name", title: "Nama", type: "string" },
    { name: "slug", title: "Slug URL", type: "slug", options: { source: "name" } },
    { name: "description", title: "Deskripsi", type: "text" },
    { name: "price", title: "Harga (opsional)", type: "string" },
    { name: "image", title: "Gambar", type: "image", options: { hotspot: true } },
  ],
};