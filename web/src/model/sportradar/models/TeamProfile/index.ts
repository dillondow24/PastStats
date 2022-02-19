import { Coach } from "../Coach";
import { League } from "../League";
import { Venue } from "../Venue";
import { TeamProfilePlayer } from "./interfaces/TeamProfilePlayer";

export interface TeamProfile {
    id: string;
    name: string;
    market: string;
    alias: string;
    founded: number;
    sr_id: string;
    reference: string;
    venue: Venue;
    league: League;
    conference: League;
    division: League;
    coaches: Coach[];
    players: TeamProfilePlayer[];
}