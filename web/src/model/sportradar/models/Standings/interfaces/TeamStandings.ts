import { CalcRank } from "./CalcRank";
import { GamesBehind } from "./GamesBehind";
import { Streak } from "./Streak";
import { Record } from "./Record";

export interface TeamStandings {
    id: string;
    name: string;
    market: string;
    wins: number;
    losses: number;
    win_pct: number;
    points_for: number;
    points_against: number;
    point_diff: number;
    sr_id: string;
    reference: string;
    games_behind: GamesBehind;
    streak: Streak;
    calc_rank: CalcRank;
    records: Record[];
}