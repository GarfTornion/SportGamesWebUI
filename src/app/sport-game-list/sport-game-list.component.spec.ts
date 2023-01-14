import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGameListComponent } from './sport-game-list.component';

describe('SportGameListComponent', () => {
  let component: SportGameListComponent;
  let fixture: ComponentFixture<SportGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportGameListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
