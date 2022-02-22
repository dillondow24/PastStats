import { PlayByPlayEvent } from "./PlayByPlayEvent";
import { PlayByPlayScoring } from "./PlayByPlayScoring";

    export interface PlayByPlayPeriod {
        type: string;
        id: string;
        number: number;
        sequence: number;
        scoring: PlayByPlayScoring;
        events: PlayByPlayEvent[];
    }