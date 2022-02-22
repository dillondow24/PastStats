import { DailySchedule } from "../../model/sportradar/models/DailySchedule";
import { GameSummary } from "../../model/sportradar/models/GameSummary";
import { PastStatsStatistics } from "../../model/sportradar/models/PastStatsStatistics";
import { Standings } from "../../model/sportradar/models/Standings";
import { TeamProfile } from "../../model/sportradar/models/TeamProfile";

const BASE_URL = 'http://localhost:8080/sportradar'

export const SportRadarAPI = {
    /** Date, time, location, and other event details for every game taking place in the league-defined day */
    getDailySchedule: async (year: number, month: number, day: number ) => {
        const response = await fetch(`${BASE_URL}/dailySchedule/${year}/${month}/${day}`);
        if(response.status === 200) {
            return await response.json() as DailySchedule;
        } else {
            throw new Error(response.statusText)
        }
    },

    getGameSummary: async (gameId: string) => {
        const response = await fetch(`${BASE_URL}/gameSummary/${gameId}`);
        if(response.status === 200) {
            return await response.json() as GameSummary;
        } else {
            throw new Error(response.statusText)
        }   
    },

    getStandings: async (year: string) => {
        const response = await fetch(`${BASE_URL}/standings/${year}`);
        if(response.status === 200) {
            return await response.json() as Standings;
        } else {
            throw new Error(response.statusText)
        }   
    },

    getTeamProfile: async (teamId: string) => {
        const response = await fetch(`${BASE_URL}/teamProfile/${teamId}`);
        if(response.status === 200) {
            return await response.json() as TeamProfile;
        } else {
            throw new Error(response.statusText)
        }   
    },

    getPastStats: async (gameId: string, minutes: string, seconds: string, quarter: number) => {
        const response = await fetch(`${BASE_URL}/pastStats/${gameId}/${minutes}/${seconds}/${quarter}`);
        if(response.status === 200) {
            return await response.json() as PastStatsStatistics;
        } else {
            throw new Error(response.statusText)
        }   
    }
}
