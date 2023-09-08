import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityImagePipe } from './sanity-image.pipe';
import { PortableTextToHTML } from './portable-text.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [SanityImagePipe, PortableTextToHTML],
    exports: [SanityImagePipe, PortableTextToHTML],
})
export class PipeModule { }
