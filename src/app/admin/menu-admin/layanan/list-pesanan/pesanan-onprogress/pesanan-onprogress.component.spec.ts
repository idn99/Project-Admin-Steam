import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesananOnprogressComponent } from './pesanan-onprogress.component';

describe('PesananOnprogressComponent', () => {
  let component: PesananOnprogressComponent;
  let fixture: ComponentFixture<PesananOnprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananOnprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesananOnprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
