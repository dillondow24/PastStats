import { Coach } from "../../Coach";
import { GameSummaryPlayer } from "./GameSummaryPlayer";
import { GameSummaryStatistic } from "./GameSummaryStatistics";
import { GameSummaryTeamScoring } from "./GameSummaryTeamScoring";

export interface GameSummaryTeamInfo {
        name: string,
        alias: string,
        market: string,
        id: string,
        points: number,
        bonus: boolean,
        sr_id: string,
        reference: string,
        scoring: GameSummaryTeamScoring[],
        statistics: GameSummaryStatistic,
        coaches: Coach[],
        players: GameSummaryPlayer[]
}