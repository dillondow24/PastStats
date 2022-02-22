import React, { createContext, useContext, useState } from 'react';
import { API } from '../../../api';
import { DailyScheduleGame } from '../../../model/sportradar/models/DailySchedule/Interfaces/DailyScheduleGame';
import { GameSummary } from '../../../model/sportradar/models/GameSummary';
import { PastStatsStatistics } from '../../../model/sportradar/models/PastStatsStatistics';

interface GameContextInterface {
  gameSummary: GameSummary;
  dailyScheduleGame: DailyScheduleGame;
  isLive: boolean;
  isFinal: boolean;
  isScheduled: boolean;
  showPastStats: boolean;
  setShowPastStats: (newState: 'live' | 'past') => void;
  getPastStats: (minutes: string, seconds: string, quarter: number) => Promise<void>;
  loadingPastStats: boolean;
  pastStats?: PastStatsStatistics
}

const GameContext = createContext<GameContextInterface>({
    gameSummary: {} as GameSummary,
    dailyScheduleGame: {} as DailyScheduleGame,
    isLive: false,
    isFinal: false,
    isScheduled: false,
    showPastStats: false,
    setShowPastStats: () => undefined,
    getPastStats: async () => undefined,
    loadingPastStats: false
});

export const useGameContext = () => useContext(GameContext);

interface GameContextProviderProps {
    gameSummary: GameSummary;
    dailyScheduleGame: DailyScheduleGame;
    children: any;
}

export const GameContextProvider = ({gameSummary, dailyScheduleGame, children}: GameContextProviderProps) => {
  const [showPastStats, setShowPastStats] = useState(false);
  const [loadingPastStats, setLoadingPastStats] = useState(false);
  const [pastStats, setPastStats] = useState<PastStatsStatistics>();


  const getPastStats = async (minutes: string, seconds: string, quarter: number) => {
    try {
      setLoadingPastStats(true)
      const newPastStats = await API.SportRadarAPI.getPastStats(gameSummary.id, minutes, seconds, quarter)
      console.log('newPastStats: ', newPastStats)
      setPastStats(newPastStats)
    } finally {
      setLoadingPastStats(false)
    }
  }

  return (
    <GameContext.Provider value={{
      gameSummary,
      dailyScheduleGame,
      isLive: gameSummary.status === 'inprogress',
      isFinal: ['completed', 'closed'].includes(gameSummary.status),
      isScheduled: gameSummary.status === 'scheduled',
      showPastStats,
      setShowPastStats: (newState: 'live' | 'past') => {setShowPastStats(newState === 'past')},
      getPastStats,
      loadingPastStats,
      pastStats
      }}>
      {children}
    </GameContext.Provider>
  );
};