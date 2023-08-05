import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColSelectComponent } from './multi-col-select.component';

describe('MultiColSelectComponent', () => {
  let component: MultiColSelectComponent;
  let fixture: ComponentFixture<MultiColSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiColSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiColSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
