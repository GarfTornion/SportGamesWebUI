export class sportGameTeam {
	sportGameId: number;
	score: number;
	teamName: string;

	constructor(sportGameId: number, score: number, teamName: string) {
		this.sportGameId = sportGameId;
		this.score = score;
		this.teamName = teamName;
	}
}