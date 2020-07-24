import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesananDoneComponent } from './pesanan-done.component';

describe('PesananDoneComponent', () => {
  let component: PesananDoneComponent;
  let fixture: ComponentFixture<PesananDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesananDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
