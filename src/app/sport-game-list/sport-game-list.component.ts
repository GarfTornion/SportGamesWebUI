import { Component, OnInit } from '@angular/core';
import { sportGame } from '../models/sportGame.model';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-sport-game-list',
  templateUrl: './sport-game-list.component.html',
  styleUrls: ['./sport-game-list.component.scss']
})
export class SportGameListComponent implements OnInit {

  games!: sportGame[];
  displayedColumns: string[] = ['sportGameId', 'sportGameTeams', 'sportGameStartTime', 'sportGameEndTime'];

  constructor(private services: ServicesService) { }

  ngOnInit(): void {
	this.getGames();
  }

  async getGames() {
	await this.services.getSportGames().subscribe((data: sportGame[]) => {
		this.games = data;
	});
  }


}

