import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createClient, ClientConfig, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { environment } from "src/environments/environment";
import { Blog } from "src/types";

@Injectable({
  providedIn: "root",
})
export class SanityService {
  private client: SanityClient;
  private imageUrlBuilder: ImageUrlBuilder;
  private clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
  };
  constructor(private http: HttpClient) {
    this.client = this.sanityClient();
    this.imageUrlBuilder = imageUrlBuilder(this.client);
  }
  private sanityClient(): SanityClient {
    return createClient(this.clientConfig);
  }

  getImageUrlBuilder(source: SanityImageSource): ImageUrlBuilder {
    return this.imageUrlBuilder.image(source);
  }

  async getAllBlogs(): Promise<Blog[]> {
    return await this.sanityClient().fetch(
      `*[_type == "post"]{
        ...,
        "author": author->{name,_id},
        "categories": categories[]->{title}.title,
        "slug": slug.current,
      }
      |order(_createdAt desc)`
    );
  }
  async getBlogBySlug(slug: string): Promise<Blog> {
    return await this.sanityClient().fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        ...,
        "author": author->{name,_id},
        "categories": categories[]->{title}.title,
        "slug": slug.current,
        "image": *[_type=='author' && _id == author->{_id}._id ][0]{ image }.image

      }`,
      { slug } // chưa get được hình ảnh của tác giả
    );
  }

  async getAllAuthors(): Promise<any> {
    return await this.sanityClient().fetch(
      `*[_type == "author"]{
        ...
      }
      | order(_createdAt desc)`
    );
  }

  async getBlogsByAuthorId(authorId: string): Promise<any> {
    return await this.sanityClient().fetch(
      `*[_type == "post" && author._ref == $authorId]{
        ...,
        "author": author->{name,_id},
        "categories": categories[]->{title}.title,
        "slug": slug.current,
        "image": *[_type=='author' && _id == $authorId ][0]{ image }.image
      }
      | order(_createdAt desc)`,
      { authorId: authorId }
    );
  }

  async getBlogsByTag(tag: string): Promise<any> {
    return await this.sanityClient().fetch(
      `*[_type == "post" && $tag in categories[]->{title}.title ]{
        ...,
        "author": author->{name,_id},
        "categories": categories[]->{title}.title,
        "slug": slug.current
      }
      | order(_createdAt desc)`,
      { tag }
    );
  }
}
