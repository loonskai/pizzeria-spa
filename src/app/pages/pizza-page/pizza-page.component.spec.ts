import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPageComponent } from './pizza-page.component';

describe('PizzaPageComponent', () => {
  let component: PizzaPageComponent;
  let fixture: ComponentFixture<PizzaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
