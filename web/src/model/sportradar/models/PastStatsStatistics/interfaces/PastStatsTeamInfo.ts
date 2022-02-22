import { PastStatsPlayerStatistics } from "./PastStatsPlayerStatistics";
import { PastStatsQuarterScoring } from "./PastStatsQuarterScoring";
import { PastStatsTeamStatistics } from "./PastStatsTeamStatistics";

export interface PastStatsTeamInfo {
    name: string,
    alias: string,
    market: string,
    id: string,
    points: number,
    scoring: PastStatsQuarterScoring[],
    statistics: PastStatsTeamStatistics,
    players: PastStatsPlayerStatistics[],
}