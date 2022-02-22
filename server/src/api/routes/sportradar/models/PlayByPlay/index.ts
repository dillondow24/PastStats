import { PlayByPlayPeriod } from "./interfaces/PlayByPlayPeriod";
import { PlayByPlayTeam } from "./interfaces/PlayByPlayTeam";

export interface PlayByPlay {
    id: string;
    status: string;
    coverage: string;
    scheduled: string;
    duration: string;
    attendance: number;
    lead_changes: number;
    times_tied: number;
    clock: string;
    quarter: number;
    track_on_court: boolean;
    reference: string;
    entry_mode: string;
    sr_id: string;
    clock_decimal: string;
    time_zones: any;
    home: PlayByPlayTeam;
    away: PlayByPlayTeam;
    periods: PlayByPlayPeriod[];
    deleted_events: Array<{id: string}>;
}