import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Option } from '../interfaces/option';

@Component({
  selector: 'we-multi-col-select',
  templateUrl: './multi-col-select.component.html',
  styleUrls: ['./multi-col-select.component.scss']
})
export class MultiColSelectComponent implements OnInit {

  @Input() columns: Number = 1;
  @Input() containerWidth: Number = 500; 
  @Input() selectedOption: Option | null = null;
  @Input() options: Option[] = [];
  @Input() disabled: boolean = false;

  isDropdownCollapsed: boolean = true;

  @ViewChild('optionsContainer', { static: false }) divOptionsContainer!: ElementRef; 
  @Output() onSelectChange = new EventEmitter<any>();

  constructor(private renderer: Renderer2) { }
  

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.divOptionsContainer){
      this.renderer.setStyle(this.divOptionsContainer.nativeElement, 'grid-template-columns', `repeat(${this.columns}, 1fr)`);
      this.renderer.setStyle(this.divOptionsContainer.nativeElement, 'width', `${this.containerWidth}px`);
    }
  }

  toggleDropdown(): void{
    if(!this.disabled)
      this.isDropdownCollapsed = !this.isDropdownCollapsed;
  }

  onSelect(option: Option): void{
    if(this.selectedOption == option){
      this.selectedOption = null;
      return;
    }
    this.selectedOption = option;
    this.onSelectChange.emit(option.value);
    this.toggleDropdown();
  }

}
