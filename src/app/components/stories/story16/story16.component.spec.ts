import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story16Component } from './story16.component';

describe('Story16Component', () => {
  let component: Story16Component;
  let fixture: ComponentFixture<Story16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
