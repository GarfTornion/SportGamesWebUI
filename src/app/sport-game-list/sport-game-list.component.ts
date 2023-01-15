import { Component, OnInit } from '@angular/core';
import { sportGame } from '../models/sportGame.model';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from '../services/services.service';
import { SignalrService } from '../services/signalr.service';

@Component({
  selector: 'app-sport-game-list',
  templateUrl: './sport-game-list.component.html',
  styleUrls: ['./sport-game-list.component.scss']
})
export class SportGameListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'team1', 'team2', 'startTime', 'endTime'];

  constructor(private services: ServicesService, public signalRService: SignalrService) { }

  ngOnInit(): void {
	this.getGames();
	this.signalRService.addGameDataListener();
  }

  async getGames() {
	await this.services.getSportGames().subscribe((data: sportGame[]) => {
		this.signalRService.data = data;
	});
  }

  teamLostClass(team1Score : number, team2Score : number, finished : boolean) {
	if (finished) {
		if (team1Score < team2Score) {
			return true;
		}
	}
	return false;
  }

}

