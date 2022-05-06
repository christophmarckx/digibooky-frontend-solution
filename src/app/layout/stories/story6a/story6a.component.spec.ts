import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story6aComponent } from './story6a.component';

describe('Story6aComponent', () => {
  let component: Story6aComponent;
  let fixture: ComponentFixture<Story6aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story6aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story6aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
