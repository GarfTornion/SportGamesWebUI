import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SportGameListComponent } from './sport-game-list.component';
import { MatTableModule } from '@angular/material/table';

describe('SportGameListComponent', () => {
	  let component: SportGameListComponent;
  let fixture: ComponentFixture<SportGameListComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
	  declarations: [ SportGameListComponent ],
	  imports: [HttpClientTestingModule, MatTableModule]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(SportGameListComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});

