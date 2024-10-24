import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = "#28282B";
  @HostBinding('style.border') border: string = "none";
  @HostBinding('style.color') textColor: string = "white";

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = "#404040";
    this.textColor = "white";
    this.border = "2px inset #717171";
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = "#28282B";
    this.textColor = "white";
    this.border = "none";
  }
}
