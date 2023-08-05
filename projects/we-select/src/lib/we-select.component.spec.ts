import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeSelectComponent } from './we-select.component';

describe('WeSelectComponent', () => {
  let component: WeSelectComponent;
  let fixture: ComponentFixture<WeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
