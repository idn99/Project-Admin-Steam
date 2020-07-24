import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahLayananComponent } from './tambah-layanan.component';

describe('TambahLayananComponent', () => {
  let component: TambahLayananComponent;
  let fixture: ComponentFixture<TambahLayananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahLayananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahLayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
