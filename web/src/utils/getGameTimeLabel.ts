import moment from "moment";
import { GameSummary } from "../model/sportradar/models/GameSummary";
import { toOrdinalSuffix } from "./toOrdinalSuffix";

export const getGameTimeLabel = (showLiveStats: boolean, gameSummary: GameSummary) => {
    const isFinal = ['complete', 'closed'].includes(gameSummary.status)
    const isLive = gameSummary.status === 'inprogress'
    const isHalf = gameSummary.status === 'halftime'

    if(isFinal) return 'Final'
    if(!isLive || !showLiveStats) {
        const scheduled = moment(gameSummary.scheduled)
        return scheduled.format('h:mm a')
    }
    if(isHalf) return 'Half';
    return `${toOrdinalSuffix(gameSummary.quarter)} ${gameSummary.clock}`;
}