import { MOCK_PAST_STATS_STATISTICS } from './../../mocks/MOCK_PAST_STATS_STATISTICS';
import { MOCK_TEAM_PROFILE } from './../../mocks/MOCK_TEAM_PROFILE';
import { MOCK_STANDINGS } from './../../mocks/MOCK_STANDINGS';
import { MOCK_GAME_SUMMARIES } from './../../mocks/MOCK_GAME_SUMMARIES';
import { MOCK_DAILY_SCHEDULE } from './../../mocks/MOCK_DAILY_SCHEDULE';
import { MOCK_GAME_SUMMARY } from './../../mocks/MOCK_GAME_SUMMARY';
import { MOCK_PLAY_BY_PLAY } from './../../mocks/MOCK_PLAY_BY_PLAY';
const fetch = require('node-fetch');


/**
 * The services contains the database queries and returning objects or throwing errors
 *
 * @export
 * @class SportRadarService
 */
export class SportRadarService {
    API_KEY = process.env.SPORTRADAR_API_KEY || 'wfp6ghh2vknnfd5fqt7e5d4k'

    async getDailySchedule(year: number, month: number, day: number) {
        return MOCK_DAILY_SCHEDULE
        const response = await fetch(`http://api.sportradar.us/nba/trial/v7/en/games/${year}/${month}/${day}/schedule.json?api_key=${this.API_KEY}`);
        return await response.json();
    }

    async getGameSummary(gameId: string) {
        if(MOCK_GAME_SUMMARIES.hasOwnProperty(gameId)) {
            //@ts-ignore
            return MOCK_GAME_SUMMARIES[gameId];
        } else {
            return MOCK_GAME_SUMMARY
        }
        const response = await fetch(`http://api.sportradar.us/nba/trial/v7/en/games/${gameId}/summary.json?api_key=${this.API_KEY}`);
        return await response.json();
    }

    async getStandings(year: string) {
        return MOCK_STANDINGS
        const response = await fetch(`http://api.sportradar.us/nba/trial/v7/en/seasons/${year}/REG/standings.json?api_key=${this.API_KEY}`);
        return await response.json();
    }

    async getTeamProfile(teamId: string) {
        return MOCK_TEAM_PROFILE
        const response = await fetch(`http://api.sportradar.us/nba/trial/v7/en/teams/${teamId}/profile.json?api_key=${this.API_KEY}`);
        return await response.json();
    }

    async getPlayByPlay(gameId: string) {
        return MOCK_PLAY_BY_PLAY
        const response = await fetch(`http://api.sportradar.us/nba/trial/v7/en/games/${gameId}/pbp.json?api_key=${this.API_KEY}`)
        return await response.json();
    }

    async getPastStats(gameId: string, minutes: string, seconds: string, quarter: string) {
        const playByPlay = await this.getPlayByPlay(gameId) 

        console.log(playByPlay)
        return MOCK_PAST_STATS_STATISTICS;
    }

}