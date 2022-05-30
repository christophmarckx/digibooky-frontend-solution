import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story17Component } from './story17.component';

describe('Story17Component', () => {
  let component: Story17Component;
  let fixture: ComponentFixture<Story17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
