import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministraccionComponent } from './administraccion.component';

describe('AdministraccionComponent', () => {
  let component: AdministraccionComponent;
  let fixture: ComponentFixture<AdministraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
