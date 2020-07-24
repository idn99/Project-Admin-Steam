import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbahLayananComponent } from './ubah-layanan.component';

describe('UbahLayananComponent', () => {
  let component: UbahLayananComponent;
  let fixture: ComponentFixture<UbahLayananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbahLayananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbahLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
