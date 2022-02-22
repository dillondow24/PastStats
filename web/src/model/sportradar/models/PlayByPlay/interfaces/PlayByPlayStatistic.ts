import { PlayByPlayPlayer } from "./PlayByPlayPlayer";
import { PlayByPlayTeam } from "./PlayByPlayTeam";

    export interface PlayByPlayStatistic {
        type: string;
        team?: PlayByPlayTeam;
        player?: PlayByPlayPlayer;
        made?: boolean;
        shot_type?: string;
        three_point_shot?: boolean;
        shot_distance?: number;
        rebound_type?: string;
        shot_type_desc?: string;
        points?: number;
        free_throw_type?: string;
    }