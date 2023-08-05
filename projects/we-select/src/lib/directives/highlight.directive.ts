import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges, AfterViewInit{

  @Input('highlight') highlight: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['highlight'].currentValue === true){
        this.renderer.addClass(this.elementRef.nativeElement, 'selected-option');
      }
      else{
        this.renderer.removeClass(this.elementRef.nativeElement, 'selected-option');
      }
  }

  ngAfterViewInit() {
    // this.renderer.addClass(this.elementRef.nativeElement, 'selected-option');
  }

}
