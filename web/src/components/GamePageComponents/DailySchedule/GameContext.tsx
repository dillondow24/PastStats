import React, { createContext, useContext } from 'react';
import { DailyScheduleGame } from '../../../model/sportradar/models/DailySchedule/Interfaces/DailyScheduleGame';
import { GameSummary } from '../../../model/sportradar/models/GameSummary';

interface GameContextInterface {
  gameSummary: GameSummary;
  dailyScheduleGame: DailyScheduleGame;
  isLive: boolean;
  isFinal: boolean;
}

const GameContext = createContext<GameContextInterface>({
    gameSummary: {} as GameSummary,
    dailyScheduleGame: {} as DailyScheduleGame,
    isLive: false,
    isFinal: false,
});

export const useGameContext = () => useContext(GameContext);

interface GameContextProviderProps {
    gameSummary: GameSummary;
    dailyScheduleGame: DailyScheduleGame;
    children: any;
}

export const GameContextProvider = ({gameSummary, dailyScheduleGame, children}: GameContextProviderProps) => {


  return (
    <GameContext.Provider value={{
      gameSummary,
      dailyScheduleGame,
      isLive: gameSummary.status === 'inprogress',
      isFinal: ['completed', 'closed'].includes(gameSummary.status),
      }}>
      {children}
    </GameContext.Provider>
  );
};