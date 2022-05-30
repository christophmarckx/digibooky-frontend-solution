import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story18Component } from './story18.component';

describe('Story18Component', () => {
  let component: Story18Component;
  let fixture: ComponentFixture<Story18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
