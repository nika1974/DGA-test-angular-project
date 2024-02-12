import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGhostLoader]'
})
export class GhostLoaderDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'background', 'linear-gradient(90deg, #f0f0f0, #d8d6d6, #f0f0f0) 0 0/ 80vh 100% fixed');
    this.renderer.setStyle(element, 'background-color', 'rgb(204, 199, 199)');
    this.renderer.setStyle(element, 'animation', 'ghost 5s infinite linear');
  }

}
