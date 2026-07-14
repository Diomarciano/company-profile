import { client } from "./sanity";

// Ambil semua halaman
export async function getPages() {
  return client.fetch(`*[_type == "page"]{ title, slug, description, image }`);
}

// Ambil satu halaman berdasarkan slug
export async function getPage(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{ title, description, image }`,
    { slug }
  );
}

// Ambil semua produk/layanan
export async function getProducts() {
  return client.fetch(`*[_type == "product"]{ name, slug, description, price, image }`);
}

// Ambil semua post blog
export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){ title, slug, excerpt, publishedAt, image }`);
}

// Ambil pengaturan situs
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{ siteName, tagline, email, phone, address, logo }`);
}