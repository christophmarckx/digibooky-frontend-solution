import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueBooksComponent } from './overdue-books.component';

describe('OverdueBooksComponent', () => {
  let component: OverdueBooksComponent;
  let fixture: ComponentFixture<OverdueBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdueBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
