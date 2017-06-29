import { Injectable } from '@angular/core';

import marked from 'marked';
import MarkedStatic from 'marked';

@Injectable()
export class MarkdownParserService {

  private md: MarkedStatic;

  constructor() {
    this.md = marked;
  }

  convert(markdown: string) {
    return this.md.parse(markdown);
  }

}
