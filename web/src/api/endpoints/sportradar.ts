import { DailySchedule } from "../../model/sportradar/DailySchedule";
import { User } from "../../model/user";

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
}