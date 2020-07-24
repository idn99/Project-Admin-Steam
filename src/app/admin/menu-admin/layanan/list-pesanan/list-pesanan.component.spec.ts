import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPesananComponent } from './list-pesanan.component';

describe('ListPesananComponent', () => {
  let component: ListPesananComponent;
  let fixture: ComponentFixture<ListPesananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPesananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
