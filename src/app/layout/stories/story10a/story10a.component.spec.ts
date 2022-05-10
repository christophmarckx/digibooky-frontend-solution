import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story10aComponent } from './story10a.component';

describe('Story10aComponent', () => {
  let component: Story10aComponent;
  let fixture: ComponentFixture<Story10aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story10aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story10aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
