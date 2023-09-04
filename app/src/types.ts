import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Blog {
  _id: string;
  title: string;
  categories: string[];
  author: { name: string; _id: string };
  description: string;
  slug: string;
  mainImage?: SanityImageSource;
  body?: PortableTextBlock[];
  publishedAt: string;
}
