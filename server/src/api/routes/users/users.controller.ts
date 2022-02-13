import { Console } from 'console';
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
    async getUserByUid(@Params() params: any, @Res() response: any) {
        try {
            const {uid} = params;
            const user = await this.userService.getUser(uid)
            response.status(200).json({
                status: 200,
                data: user,
                message: 'Successfully Fetched User'
            })
        } catch (error) {
            response.status(500).json({
                status: 500,
                data: error,
                message: 'Error Fetching User'
            })
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
    async putUser(@Body() body: any, @Req() req: any, @Res() res: any) {
        try {
            const user = await this.userService.putUser(body)
            res.status(200).json({
                status: 200,
                data: user,
                message: 'Successfully Put User'
            })
        } catch (error) {
            res.sendStatus(500).json({
                status: 500,
                data: error,
                message: 'Error While Putting User'
            })
        }
    }
}