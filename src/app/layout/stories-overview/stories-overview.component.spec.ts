import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesOverviewComponent } from './stories-overview.component';

describe('StoriesOverviewComponent', () => {
  let component: StoriesOverviewComponent;
  let fixture: ComponentFixture<StoriesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
