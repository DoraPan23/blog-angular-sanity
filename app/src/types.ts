import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Post {
  _id: string;
  title: string;
  categories: string[];
  author: string;
  description: string;
  slug: string;
  mainImage?: SanityImageSource;
  body?: PortableTextBlock[];
  publishedAt: string;
}
