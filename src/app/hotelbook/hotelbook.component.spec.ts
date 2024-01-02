import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbookComponent } from './hotelbook.component';

describe('HotelbookComponent', () => {
  let component: HotelbookComponent;
  let fixture: ComponentFixture<HotelbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelbookComponent]
    });
    fixture = TestBed.createComponent(HotelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
