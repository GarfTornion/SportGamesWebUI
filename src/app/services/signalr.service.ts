import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { sportGame } from '../models/sportGame.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public data: sportGame[]; // This is the data that will be updated by SignalR

  hubConnection: signalR.HubConnection;

  path = environment.hubUrl;

  constructor() {
	console.log(this.path);
	this.data = [];
	this.hubConnection = new signalR.HubConnectionBuilder()
	  .withUrl(this.path)
	  .build();
	this.hubConnection.start().then(() => console.log('Connection started!')).catch(err => console.log('Error while starting connection: ' + err));
  }

  public addGameDataListener() {
	this.hubConnection.on('updategames', (data) => {
	  console.log(data);
	  this.data = data;
	});
  }
}
