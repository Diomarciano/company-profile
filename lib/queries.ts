import { client } from "./sanity";

export async function getPages() {
  return client.fetch(`*[_type == "page" && !(_id in path("drafts.**"))]{ title, slug, description, image }`);
}

export async function getPage(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{ title, description, image }`,
    { slug }
  );
}

export async function getProducts() {
  return client.fetch(`*[_type == "product" && !(_id in path("drafts.**"))]{ name, slug, description, price, image }`);
}

export async function getProduct(slug: string) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug && !(_id in path("drafts.**"))][0]{ name, description, price, image, "slug": slug.current }`,
    { slug }
  );
}

export async function getPosts() {
  return client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc){ title, slug, excerpt, publishedAt, image }`);
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{ title, excerpt, publishedAt, image, body, "slug": slug.current }`,
    { slug }
  );
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings" && !(_id in path("drafts.**"))][0]{ siteName, tagline, email, phone, address, logo }`);
}

export async function getAllProductSlugs() {
  return client.fetch(`*[_type == "product" && !(_id in path("drafts.**"))]{ "slug": slug.current }`);
}

export async function getAllPostSlugs() {
  return client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))]{ "slug": slug.current }`);
}

// Ambil semua anggota tim
export async function getTeam() {
  return client.fetch(
    `*[_type == "team" && !(_id in path("drafts.**"))] | order(order asc){ name, position, bio, photo }`
  );
}
