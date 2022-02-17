import { Response } from 'express';
import 'reflect-metadata';
import { Get, JsonController, Params, Res } from 'routing-controllers';
import { SportRadarService } from './sportradar.service';

/**
 * The controllers handles all the logic behind validating 
 * request parameters, query, Sending Responses with correct codes.
 *
 * @export
 * @class UserController
 */
@JsonController('/sportradar/')
export class SportRadarController {

    SportRadarService = new SportRadarService();

    /**
     * Get a daily schedule for a year, month, and day
     *
     * @param {*} params
     * @param {*} response
     * @memberof UserController
     */
    @Get('dailySchedule/:year/:month/:day')
    async getDailySchedule(@Params() params: any, @Res() res: Response) {
        try {
            const {year, month, day} = params;
            const dailySchedule = await this.SportRadarService.getDailySchedule(year, month, day)
            res.status(200).send(dailySchedule)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Getting User: ${error.name}`)
        } 
    }
    /**
     * Get a daily schedule for a year, month, and day
     *
     * @param {*} params
     * @param {*} response
     * @memberof UserController
     */
    @Get('gameSummary/:gameId')
    async geyGameSummary(@Params() params: any, @Res() res: Response) {
        try {
            const {gameId} = params;
            const dailySchedule = await this.SportRadarService.getGameSummary(gameId)
            res.status(200).send(dailySchedule)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Getting User: ${error.name}`)
        } 
    }
}