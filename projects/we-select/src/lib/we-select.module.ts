import { NgModule } from '@angular/core';
import { MultiColSelectComponent } from './multi-col-select/multi-col-select.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MultiColSelectComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MultiColSelectComponent
  ]
})
export class WeSelectModule { }
