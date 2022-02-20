import { GameSummary } from "../model/sportradar/models/GameSummary";

    export const getWinner = (gameSummary: GameSummary, showLiveStats: boolean) => {
      if (gameSummary.status !== 'closed' || !showLiveStats) return 'none';
      return gameSummary.home.points > gameSummary.away.points ? 'home' : 'away'; 
    }