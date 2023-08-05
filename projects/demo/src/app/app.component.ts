import { Component } from '@angular/core';
import { Option } from 'we-select';

@Component({
  selector: 'we-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  numberOfColumns: number = 4;
  optionsContainerWidth: number = 500;
  isDisabled: boolean = false;
  options: {value: any, displayText: string}[] = [
    {value: 1, displayText: "option1"},
    {value: 2, displayText: "option2"},
    {value: 3, displayText: "option3"},
    {value: 4, displayText: "option4"},
    {value: 5, displayText: "option5"},
    {value: 6, displayText: "option6"},
  ];
  selectedOption: Option = this.options[1];

  onOptionSelect(value: any){
    console.log(value);
  }
}
