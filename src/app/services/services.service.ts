import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private path = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSportGames(): Observable<any> {
	return this.http.get(this.path + 'SportGames/GetSportGames');
  }
}
