import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColSelectComponent } from './multi-col-select.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Option } from '../interfaces/option';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from '../directives/highlight.directive';

describe('MultiColSelectComponent', () => {
  let component: MultiColSelectComponent;
  let fixture: ComponentFixture<MultiColSelectComponent>;
  let OPTIONS: Option[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MultiColSelectComponent,
        HighlightDirective
      ],
      imports: [ MatIconModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiColSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    OPTIONS = [
      { value: 1, displayText: "option1" },
      { value: 2, displayText: "option2" },
      { value: 3, displayText: "option3" }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleDropdown', () => {
    it('should toggle isDropdownCollapsed property to true', () => {
      component.isDropdownCollapsed = false;
      component.toggleDropdown();
      expect(component.isDropdownCollapsed).toEqual(true);
    });

    it('should toggle isDropdownCollapsed property to false', () => {
      component.isDropdownCollapsed = true;
      component.toggleDropdown();
      expect(component.isDropdownCollapsed).toEqual(false);
    });
  });

  it('click event on an option should call onSelect funtion', () => {
    spyOn(component, 'onSelect');
    component.options = OPTIONS;
    fixture.detectChanges();
    let optionDE: DebugElement = fixture.debugElement.query(By.css('.option'));

    optionDE.triggerEventHandler('click');

    expect(component.onSelect).toHaveBeenCalledOnceWith(OPTIONS[0]);
  });

  describe('default template', () => {
    it('should be rendered when there is no options', () => {
      component.options = [];

      fixture.detectChanges();
      let defaultTemplateDE: DebugElement = fixture.debugElement.query(By.css('.default-template'));
      expect(defaultTemplateDE).toBeTruthy();
    });

    it('should be falsy when there are options', () => {
      component.options = OPTIONS;

      fixture.detectChanges();

      let defaultTemplateDE: DebugElement = fixture.debugElement.query(By.css('.default-template'));
      expect(defaultTemplateDE).toBeFalsy();
    });
  });
  
  describe('onSelect', () => {
    beforeEach(() => {
      component.options = OPTIONS;
    });

    it('should set the selectedOption', () => {
      component.onSelect(OPTIONS[1]);
      expect(component.selectedOption).toEqual(OPTIONS[1]);
    });

    it('should deselect the option if same option is passed', () => {
      component.onSelect(OPTIONS[1]);
      component.onSelect(OPTIONS[1]);

      expect(component.selectedOption).toEqual(null);
    });

    it('should collapse the optionsContainer', () => {
      component.isDropdownCollapsed = false;
      component.onSelect(OPTIONS[1]);
      expect(component.isDropdownCollapsed).toBeTrue();
    })
  });

  it('should toggle the dropdown on click on selected', () => {
    spyOn(component, 'toggleDropdown');
    let selectedDE: DebugElement = fixture.debugElement.query(By.css('.selected'));
    
    selectedDE.triggerEventHandler('click');

    expect(component.toggleDropdown).toHaveBeenCalled();
  });

  it('should have width and columns based on input properties', () => {
    component.columns = 2;
    component.containerWidth = 600;
    component.options = OPTIONS;

    fixture.detectChanges();
    component.ngAfterViewInit();

    let optionsContainer: HTMLDivElement = fixture.debugElement.query(By.css('.options-container')).nativeElement;
    expect(getComputedStyle(optionsContainer).gridTemplateColumns).toEqual("repeat(2, 1fr)");
    expect(getComputedStyle(optionsContainer).width).toEqual("600px");
  });

});
