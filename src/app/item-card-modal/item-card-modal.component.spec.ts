import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardModalComponent } from './item-card-modal.component';

describe('ItemCardModalComponent', () => {
  let component: ItemCardModalComponent;
  let fixture: ComponentFixture<ItemCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
