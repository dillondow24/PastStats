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
     * Date, time, location, and other event details for every game taking place in the league-defined day
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
     * Top-level boxscore information, along with detailed game stats at the team and player levels
     *
     * @param {*} params
     * @param {*} response
     * @memberof UserController
     */
    @Get('gameSummary/:gameId')
    async getGameSummary(@Params() params: any, @Res() res: Response) {
        try {
            const {gameId} = params;
            const dailySchedule = await this.SportRadarService.getGameSummary(gameId)
            res.status(200).send(dailySchedule)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Getting User: ${error.name}`)
        } 
    }
    
    /**
     * Detailed team records across various views including, overall, conference, and division information
     *
     * @param {*} params
     * @param {*} response
     * @memberof UserController
     */
    @Get('standings/:year')
    async getStandings(@Params() params: any, @Res() res: Response) {
        try {
            const {year} = params;
            const standings = await this.SportRadarService.getStandings(year)
            res.status(200).send(standings)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Getting User: ${error.name}`)
        } 
    }

    /**
     * 
     *
     * @param {*} params
     * @param {*} response
     * @memberof UserController
     */
    @Get('teamProfile/:teamId')
    async getTeamProfile(@Params() params: any, @Res() res: Response) {
        try {
            const {teamId} = params;
            const teamProfile = await this.SportRadarService.getTeamProfile(teamId)
            res.status(200).send(teamProfile)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Getting User: ${error.name}`)
        } 
    }
}