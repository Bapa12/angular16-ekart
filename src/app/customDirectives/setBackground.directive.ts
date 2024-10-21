import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[setBackground]'
})
export class SetBackground implements OnInit {

  backColor: string = "#28282B";
  textColor: string = "white";

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#28282B';
    // this.element.nativeElement.style.color = 'white';

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');
  }
}