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

  games!: sportGame[];
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


}

