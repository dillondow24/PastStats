import { DivisionStandings } from "./DivisionStandings";

export interface ConferenceStandings {
    id: string;
    name: string;
    alias: string;
    divisions: DivisionStandings[];
}