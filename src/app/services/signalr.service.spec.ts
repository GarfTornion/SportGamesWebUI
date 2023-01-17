import { TestBed } from '@angular/core/testing';
import { SignalrService } from './signalr.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SignalrService', () => {
	  let service: SignalrService;

  beforeEach(() => {
	TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule],
	  providers: [SignalrService]
	});
	service = TestBed.inject(SignalrService);
  });

  it('should be created', () => {
	expect(service).toBeTruthy();
  });

  it('should have hubConnection', () => {
	expect(service.hubConnection).toBeTruthy();
  });

});
