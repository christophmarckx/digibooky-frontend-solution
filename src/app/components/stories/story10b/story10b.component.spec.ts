import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story10bComponent } from './story10b.component';

describe('Story10bComponent', () => {
  let component: Story10bComponent;
  let fixture: ComponentFixture<Story10bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story10bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story10bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
