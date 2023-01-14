import { sportGameTeam } from './sportGameTeam.model';

export class sportGame{
	sportGameId: number;
	sportGameStartTime: Date;
	sportGameEndTime: Date | undefined;
	sportGameTeams: sportGameTeam[];
	sportGameFinished: boolean;

	constructor(sportGameId: number, sportGameStartTime: Date, sportGameTeams: sportGameTeam[], sportGameFinished: boolean) {
		this.sportGameId = sportGameId;
		this.sportGameStartTime = sportGameStartTime;
		this.sportGameEndTime = undefined;
		this.sportGameTeams = sportGameTeams;
		this.sportGameFinished = sportGameFinished;
	}
}