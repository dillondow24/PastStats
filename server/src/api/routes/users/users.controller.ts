/** 
 * The controllers handles all the logic behind validating 
 * request parameters, query, Sending Responses with correct codes.
 */

import { UserService } from "./users.service"
import { Body, Controller, Get, Params, Post, Put, QueryParam, Req, Res } from 'routing-controllers';
import 'reflect-metadata';
import { User } from "./users.model";

@Controller('/users/')
export class UserController {
    userService = new UserService();

    @Get('user/:uid')
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

    @Post('putUser')
    async putUser(@Body() body: any, @Req() request: any, @Res() response: any) {
        try {
            await this.userService.putUser(body)
            response.status(200).json({
                status: 200,
                data: {BODY: body},
                message: 'Successfully Put User'
            })
        } catch (error) {
            response.sendStatus(500).json({
                status: 500,
                data: error,
                message: 'Error While Putting User'
            })
        }
    }
}