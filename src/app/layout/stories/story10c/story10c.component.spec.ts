import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story10cComponent } from './story10c.component';

describe('Story10cComponent', () => {
  let component: Story10cComponent;
  let fixture: ComponentFixture<Story10cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story10cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story10cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
