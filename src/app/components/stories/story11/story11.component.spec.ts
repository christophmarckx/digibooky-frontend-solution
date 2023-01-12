import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story11Component } from './story11.component';

describe('Story11Component', () => {
  let component: Story11Component;
  let fixture: ComponentFixture<Story11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
