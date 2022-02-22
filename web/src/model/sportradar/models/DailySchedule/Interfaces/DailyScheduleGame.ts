import { Broadcast } from "../../Broadcast";
import { Venue } from "../../Venue";
import { DailyScheduleTeamInfo } from "./DailyScheduleTeamInfo";
import { TimeZones } from "../../TimeZones";

export interface DailyScheduleGame {
    id: string;
    status: string;
    coverage: string;
    scheduled: string;
    home_points: number;
    away_points: number;
    track_on_court: boolean;
    sr_id: string;
    reference: string;
    time_zones: TimeZones;
    venue: Venue;
    broadcasts: Broadcast[];
    home: DailyScheduleTeamInfo;
    away: DailyScheduleTeamInfo;
}