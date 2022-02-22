import { PlayByPlayTeam } from "./PlayByPlayTeam";

export interface PlayByPlayScoring {
    times_tied: number;
    lead_changes: number;
    home: PlayByPlayTeam;
    away: PlayByPlayTeam;
}
