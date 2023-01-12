import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story13Component } from './story13.component';

describe('Story13Component', () => {
  let component: Story13Component;
  let fixture: ComponentFixture<Story13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
