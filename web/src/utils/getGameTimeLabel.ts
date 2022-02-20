import { GameSummary } from "../model/sportradar/models/GameSummary";
import { getGameTime } from "./getGameTime";
import { toOrdinalSuffix } from "./toOrdinalSuffix";

export const getGameTimeLabel = (isLive: boolean, isHalf: boolean, showLiveStats: boolean, gameSummary: GameSummary) => {
    if(!isLive || !showLiveStats) return getGameTime(gameSummary.scheduled, ['complete', 'closed'].includes(gameSummary.status));
    if(isHalf) return 'Half';
    return `${toOrdinalSuffix(gameSummary.quarter)} ${gameSummary.clock}`;
}