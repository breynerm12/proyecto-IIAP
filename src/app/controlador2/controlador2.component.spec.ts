import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controlador2Component } from './controlador2.component';

describe('Controlador2Component', () => {
  let component: Controlador2Component;
  let fixture: ComponentFixture<Controlador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Controlador2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Controlador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
