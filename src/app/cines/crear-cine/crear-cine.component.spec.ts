import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCineComponent } from './crear-cine.component';

describe('CrearCineComponent', () => {
  let component: CrearCineComponent;
  let fixture: ComponentFixture<CrearCineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
