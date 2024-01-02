import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookComponent } from './bus-book.component';

describe('BusBookComponent', () => {
  let component: BusBookComponent;
  let fixture: ComponentFixture<BusBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusBookComponent]
    });
    fixture = TestBed.createComponent(BusBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
