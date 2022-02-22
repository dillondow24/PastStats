import { PastStatsTeamInfo } from "./interfaces/PastStatsTeamInfo";

export interface PastStatsStatistics {
    gameId: string,
    clock: string,
    quarter: number,
    homeScore: number,
    awayScore: number,
    home: PastStatsTeamInfo,
    away: PastStatsTeamInfo
}