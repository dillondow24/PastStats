import { PlayByPlayPlayer } from "./PlayByPlayPlayer";

export interface PlayByPlayTeam {
    name: string;
    market: string;
    id: string;
    reference: string;
    alias?: string;
    points?: number;
    bonus?: boolean;
    sr_id?: string;
    players?: PlayByPlayPlayer[];
}