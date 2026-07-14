export default {
  name: "siteSettings",
  title: "Pengaturan situs",
  type: "document",
  fields: [
    { name: "siteName", title: "Nama perusahaan", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "logo", title: "Logo", type: "image" },
    { name: "email", title: "Email kontak", type: "string" },
    { name: "phone", title: "Nomor telepon", type: "string" },
    { name: "address", title: "Alamat", type: "text" },
  ],
};