import { Console } from 'console';
import { Response } from 'express';
import 'reflect-metadata';
import { Body, Get, JsonController, Params, Post, Req, Res } from 'routing-controllers';
import { UserService } from "./users.service";

/**
 * The controllers handles all the logic behind validating 
 * request parameters, query, Sending Responses with correct codes.
 *
 * @export
 * @class UserController
 */
@JsonController('/users/')
export class UserController {

    userService = new UserService();

    /**
     * Get a user by uid from the database
     *
     * @param {*} params
     * @param {*} response
     * @memberof UserController
     */
    @Get('getUser/:uid')
    async getUserByUid(@Params() params: any, @Res() res: Response) {
        try {
            const {uid} = params;
            const user = await this.userService.getUser(uid)
            res.status(200).send(user)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Getting User: ${error.name}`)
        } 
    }

    /**
     * Put a user in the database
     *
     * @param {*} body
     * @param {*} req
     * @param {*} res
     * @memberof UserController
     */
    @Post('putUser')
    async putUser(@Body() body: any, @Req() req: any, @Res() res: Response) {
        try {
            const user = await this.userService.putUser(body)
            res.status(200).send(user)
        } catch (error: any) {
            res.statusMessage = error.name
            res.status(500).send(`Error Putting User: ${error.name}`)
        }
    }
}