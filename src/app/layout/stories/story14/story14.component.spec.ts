import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story14Component } from './story14.component';

describe('Story14Component', () => {
  let component: Story14Component;
  let fixture: ComponentFixture<Story14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
