import React, { createContext, useContext } from 'react';
import { GameSummary } from '../../../model/sportradar/models/GameSummary';

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