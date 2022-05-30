import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story5Component } from './story5.component';

describe('Story5Component', () => {
  let component: Story5Component;
  let fixture: ComponentFixture<Story5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
