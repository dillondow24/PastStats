import { League } from "../League";
import { Season } from "../Season";
import { ConferenceStandings } from "./interfaces/ConferenceStandings";

export interface Standings {
    league: League;
    season: Season;
    conferences: ConferenceStandings[];
}
