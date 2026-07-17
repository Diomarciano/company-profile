export default {
  name: "team",
  title: "Tim & Anggota",
  type: "document",
  fields: [
    { name: "name", title: "Nama lengkap", type: "string" },
    { name: "position", title: "Jabatan", type: "string" },
    { name: "bio", title: "Bio singkat", type: "text" },
    { name: "photo", title: "Foto", type: "image", options: { hotspot: true } },
    { name: "order", title: "Urutan tampil", type: "number" },
  ],
};
