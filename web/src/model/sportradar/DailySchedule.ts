import { SportRadarNBAGame } from "./NBAGame";

export interface DailySchedule {
    date: string,
    league: {
        id: string,
        name: string,
        alias: string
    },
    games: SportRadarNBAGame[]
}
