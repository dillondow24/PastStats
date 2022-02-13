/** 
 * The controllers handles all the logic behind validating 
 * request parameters, query, Sending Responses with correct codes.
 */

import { Response, Request } from "express";
import { getUser } from "./users.service";

var express = require('express');
var router = express.Router();

router.get('/getUser/:uid', async (req: Request, res: Response) => {
    try {
        const {uid} = req.params;
        const user = await getUser(uid)
        res.status(200).json({
            status: 200,
            data: user,
            message: 'Successfully Fetched User'
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            data: error,
            message: 'Error Fetching User'
        })
    }
})

router.post('/putUser', async (req: Request, res: Response) => {
    try {
        const user = req.body;
        // await putUser(user)
        res.status(200).json({
            status: 200,
            data: user,
            message: 'Successfully Put User'
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            data: error,
            message: 'Error Putting User'
        })
    }
})

module.exports = router;