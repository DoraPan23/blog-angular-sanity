import { Pipe, PipeTransform } from "@angular/core";

import { PortableTextComponents, toHTML } from "@portabletext/to-html";
import { PortableTextBlock } from "@portabletext/types";
import { SanityImagePipe } from "./sanity-image.pipe";

@Pipe({ name: "portableTextToHTML" })
export class PortableTextToHTML implements PipeTransform {
  constructor(private sanityImagePipe: SanityImagePipe) {}

  components: PortableTextComponents = {
    types: {
      image: ({ value }: { value: string }) =>
        '<img src="' + this.sanityImagePipe.transform(value, 900) + '" />',
    },
    block: {
      h1: ({ children }) =>
        "<h1 class='text-primary'>" + children + "</h1>",
      h2: ({ children }) =>
        "<h2 class='text-primary'>" + children + "</h2>",
      h3: ({ children }) =>
        "<h3 class='text-primary'>" + children + "</h3>",
      h4: ({ children }) =>
        "<h4 class='text-primary'>" + children + "</h4>",
      normal: ({ isInline, index, renderNode, children, value }) => {
        // console.log("isInline", isInline);
        // console.log("index", index);
        // console.log("renderNode", renderNode);
        // console.log("children", children);
        // console.log("value", value);
        if(value.markDefs?.length !=0){
          return "" + children
        }
        return "<span class='text-primary'>" + children + "</span>"
      },
      blockquote: ({children}) => 
        "<span class='flex p-8 my-3 items-center gap-8 border rounded-xl border-l-4 border-solid border-[#E8E8EA]'>" + children + "</span>"
    },
    list: {
      bullet: ({ children }) =>
        "<span class='text-primary'>" + children + "</span>",
    },
  };
  transform(value: PortableTextBlock[]): string {
    return toHTML(value, { components: this.components });
  }
}
