import { League } from "../League";
import { DailyScheduleGame } from "./Interfaces/DailyScheduleGame";

export interface DailySchedule {
    date: string;
    league: League;
    games: DailyScheduleGame[];
}