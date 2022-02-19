import { TeamStandings } from "./TeamStandings";

export interface DivisionStandings {
    id: string;
    name: string;
    alias: string;
    teams: TeamStandings[];
}