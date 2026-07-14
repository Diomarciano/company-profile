import { type SchemaTypeDefinition } from "sanity";
import page from "./page";
import post from "./post";
import product from "./product";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, post, product, siteSettings],
};