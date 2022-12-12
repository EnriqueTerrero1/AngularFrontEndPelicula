import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActoresComponent } from './crear-actores.component';

describe('CrearActoresComponent', () => {
  let component: CrearActoresComponent;
  let fixture: ComponentFixture<CrearActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
