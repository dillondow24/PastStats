import { TeamProfilePlayerDraft } from "./TeamProfilePlayerDraft";
import { TeamProfilePlayerInjury } from "./TeamProfilePlayerInjury";

export interface TeamProfilePlayer {
    id: string;
    status: string;
    full_name: string;
    first_name: string;
    last_name: string;
    abbr_name: string;
    height: number;
    weight: number;
    position: string;
    primary_position: string;
    jersey_number: string;
    experience: string;
    college?: string;
    high_school?: string;
    birth_place: string;
    birthdate: string;
    updated: string;
    sr_id: string;
    rookie_year?: number;
    reference: string;
    draft: TeamProfilePlayerDraft;
    injuries?: TeamProfilePlayerInjury[];
    name_suffix?: string;
}