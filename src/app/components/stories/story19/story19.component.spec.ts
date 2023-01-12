import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story19Component } from './story19.component';

describe('Story19Component', () => {
  let component: Story19Component;
  let fixture: ComponentFixture<Story19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
