import { GameSummaryOfficial } from "./Interfaces/GameSummaryOfficial";
import { GameSummaryTeamInfo } from "./Interfaces/GameSummaryTeamInfo";

/**
 * Top-level boxscore information, along with detailed game stats at the team and player levels.
 */
export interface GameSummary {
    id: string,
    status: string,
    coverage: string,
    scheduled: string,
    duration: string,
    attendance: number,
    lead_changes: number,
    times_tied: number,
    clock: string,
    quarter: number,
    track_on_court: boolean,
    reference: string,
    entry_mode: string,
    sr_id: string,
    clock_decimal: string,
    time_zones: {
        venue: string,
        home: string,
        away: string,
    },
    venue: {
        id: string,
        name: string,
        capacity: number,
        address: string,
        city: string,
        state: string,
        zip: string,
        country: string,
        sr_id: string,
    },
    home: GameSummaryTeamInfo,
    away: GameSummaryTeamInfo,
    officials: GameSummaryOfficial[]

}