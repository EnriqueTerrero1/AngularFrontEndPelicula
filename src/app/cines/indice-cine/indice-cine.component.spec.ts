import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCineComponent } from './indice-cine.component';

describe('IndiceCineComponent', () => {
  let component: IndiceCineComponent;
  let fixture: ComponentFixture<IndiceCineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceCineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
