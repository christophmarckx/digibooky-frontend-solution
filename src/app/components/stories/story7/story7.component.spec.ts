import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story7Component } from './story7.component';

describe('Story7Component', () => {
  let component: Story7Component;
  let fixture: ComponentFixture<Story7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
