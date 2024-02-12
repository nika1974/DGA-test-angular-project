import {Directive, Input, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[highlighter]'
})
export class HighlighterDirective {
  @Input() searchQuery: string;
  @Input() text: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges(): void {
    if (!this.searchQuery || !this.searchQuery.length) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  getFormattedText() {
    const re = new RegExp(this.searchQuery, 'igm');
    return this.text.replace(re, `<mark>$&</mark>`);
  }
}
