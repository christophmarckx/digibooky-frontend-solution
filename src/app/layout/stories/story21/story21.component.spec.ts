import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story21Component } from './story21.component';

describe('Story21Component', () => {
  let component: Story21Component;
  let fixture: ComponentFixture<Story21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
