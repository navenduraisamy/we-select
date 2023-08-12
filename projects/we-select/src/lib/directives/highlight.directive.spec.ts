import { Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <div [highlight]="value">option</div>
        <div [highlight]="!value">option</div>
        `
  })
class TestComponent { 
    value: boolean = true;
}

describe('HighlightDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                TestComponent,
                HighlightDirective
            ]
        });

        fixture = TestBed.createComponent(TestComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should add class selected option if input is true', () => {
        let divsDE: DebugElement[] = fixture.debugElement.queryAll(By.directive(HighlightDirective));
        expect(divsDE[0].nativeElement.classList.contains('selected-option')).toBeTrue();
    });

    it('should remove class selected option if input is false', () => {
        let divsDE: DebugElement[] = fixture.debugElement.queryAll(By.directive(HighlightDirective));
        expect(divsDE[1].nativeElement.classList.contains('selected-option')).toBeFalse();
    });
});
