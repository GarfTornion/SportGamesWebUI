export class sportGame{
	id: number;
	startTime: Date;
	endTime: Date | undefined;
	team1Name: string;
	team1Score: number;
	team2Name: string;
	team2Score: number;
	finished: boolean;

	constructor(id: number, startTime: Date, team1Name: string, team1Score: number, team2Name : string, team2Score: number, finished: boolean) {
		this.id = id;
		this.startTime = startTime;
		this.endTime = undefined;
		this.team1Name = team1Name;
		this.team1Score = team1Score;
		this.team2Name = team2Name;
		this.team2Score = team2Score;
		this.finished = finished;
	}
}