import { mapper } from '../../helpers/DynamoDBMapper';
const fetch = require('node-fetch');
import { DailySchedule } from './models/DailySchedule';
import { MOCK_DAILY_SCHEDULE } from './models/MOCKS';


/**
 * The services contains the database queries and returning objects or throwing errors
 *
 * @export
 * @class SportRadarService
 */
export class SportRadarService {
    API_KEY = process.env.SPORTRADAR_API_KEY || 'g59c2ewzpb95md22cdvj4kg2'
    /**
     * Get a sportradar from the database by uid
     *
     * @param {string} uid
     * @return {SportRadar} 
     * @memberof SportRadarService
     */
    async getDailySchedule(year: number, month: number, day: number) {
        return MOCK_DAILY_SCHEDULE
        const response = await fetch(`http://api.sportradar.us/nba/trial/v7/en/games/${year}/${month}/${day}/schedule.json?api_key=${this.API_KEY}`);
        return await response.json() as DailySchedule;
    }

}