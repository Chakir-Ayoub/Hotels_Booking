import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRommsComponent } from './available-romms.component';

describe('AvailableRommsComponent', () => {
  let component: AvailableRommsComponent;
  let fixture: ComponentFixture<AvailableRommsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableRommsComponent]
    });
    fixture = TestBed.createComponent(AvailableRommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
