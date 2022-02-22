import { PlayByPlayAttribution } from "./PlayByPlayAttribution";
import { PlayByPlayLocation } from "./PlayByPlayLocation";
import { PlayByPlayPossession } from "./PlayByPlayPossession";
import { PlayByPlayStatistic } from "./PlayByPlayStatistic";
import { PlayByPlayTeam } from "./PlayByPlayTeam";

    export interface PlayByPlayEvent {
        id: string;
        clock: string;
        updated: string;
        description: string;
        wall_clock: string;
        sequence: any;
        home_points: number;
        away_points: number;
        clock_decimal: string;
        number: number;
        event_type: string;
        attribution?: PlayByPlayAttribution;
        on_court?: {
            home: PlayByPlayTeam;
            away: PlayByPlayTeam;
        }
        possession?: PlayByPlayPossession;
        location?: PlayByPlayLocation;
        statistics?: PlayByPlayStatistic[];
        qualifiers?: Array<{qualifier: string}>;
        duration?: number;
        turnover_type?: string;
        attempt?: string;
    }