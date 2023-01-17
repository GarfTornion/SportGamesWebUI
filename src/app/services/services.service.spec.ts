import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicesService } from './services.service';

describe('ServicesService', () => {
  let service: ServicesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [ServicesService] });
    service = TestBed.inject(ServicesService);
	httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call getSportGames and return array of data', () => {
	const mockData = [
	  {
		id: 1,
		team1: 'team1',
		team2: 'team2',
		startTime: '2021-01-01T00:00:00',
		endTime: '2021-01-01T00:00:00',
		team1Score: 0,
		team2Score: 0,
		finished: false
	  },
	  {
		id: 2,
		team1: 'team1',
		team2: 'team2',
		startTime: '2021-01-01T00:00:00',
		endTime: '2021-01-01T00:00:00',
		team1Score: 0,
		team2Score: 0,
		finished: false
	  }
	];

	service.getSportGames().subscribe(data => {
	  expect(data).toEqual(mockData);
	});

	const req = httpController.expectOne('https://localhost:7175/api/SportGame/GetSportGames');
	expect(req.request.method).toEqual('GET');
	req.flush(mockData);
  });
	
});
