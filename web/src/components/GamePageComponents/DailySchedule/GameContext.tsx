import React, { createContext, useContext, useEffect, useState } from 'react';
import { MOCK_GAME_SUMMARY } from '../../../model/sportradar/mocks/MOCK_GAME_SUMMARY';
import { GameSummary } from '../../../model/sportradar/models/GameSummary';
import { delay } from '../../../utils/delay';

interface GameContextInterface {
  gameSummary: GameSummary;
}

const GameContext = createContext<GameContextInterface>({
    gameSummary: {} as GameSummary
});

export const useGameContext = () => useContext(GameContext);

interface GameContextProviderProps {
    gameSummary: GameSummary;
    children: any;
}

export const GameContextProvider = ({gameSummary, children}: GameContextProviderProps) => {
    
  

  return (
    <GameContext.Provider value={{gameSummary}}>
      {children}
    </GameContext.Provider>
  );
};