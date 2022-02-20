import { Box, Tab, Tabs, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { API } from '../../../api';
import { MOCK_DAILY_SCHEDULE } from '../../../model/sportradar/mocks/MOCK_DAILY_SCHEDULE';
import { MOCK_GAME_SUMMARY } from '../../../model/sportradar/mocks/MOCK_GAME_SUMMARY';
import { DailyScheduleGame } from '../../../model/sportradar/models/DailySchedule/Interfaces/DailyScheduleGame';
import { GameSummary } from '../../../model/sportradar/models/GameSummary';
import { delay } from '../../../utils/delay';
import { DailyScheduleGamePreview } from './DailyScheduleGamePreview';
import { LoadingDailySchedulePreview } from './DailyScheduleGamePreview/LoadingDailySchedulePreview';
import FullGameDetails from './FullGameDetails';
import LoadingFullGameDetails from './FullGameDetails/LoadingFullGameDetails';
import { GameContextProvider } from './GameContext';
import { useStyles } from './styles';
import { TabPanel } from './TabPanel';

interface Props {
  year: number;
  month: number;
  day: number;
}

export default function DailySchedule({year, month, day}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [value, setValue] = useState(0);
    const [dailyScheduleGames, setDailyScheduleGames] = useState<DailyScheduleGame[]>([]);
    const [gameSummaries, setGameSummaries] = useState<{[gameId: string]: GameSummary | null}>({});
    const [loading, setLoading] = useState(true);


    
    //TODO: scroll so that today is in the center on first load

    useEffect(() => {
      const setup = async () => {
        try {
          /** -------- get this days games -------- */
          // const newGames = await API.SportRadarAPI.getDailySchedule(year, month, day)
          // setDailyScheduleGames(newGames.games);
          setDailyScheduleGames(MOCK_DAILY_SCHEDULE.games);

          /** -------- get game summaries for each game -------- */
          const newGameSummaries: any = {};
          MOCK_DAILY_SCHEDULE.games.forEach(game => {
            newGameSummaries[game.id] = null;
          })
          setGameSummaries(newGameSummaries);
          setLoading(false);
          for await (const game of MOCK_DAILY_SCHEDULE.games) {
            try {
              await delay(1000); // 1 second delay to throttle api calls TODO: remove when no longer using the sport radar free tier
              const newMockSummary = MOCK_GAME_SUMMARY //await API.SportRadarAPI.getGameSummary(game.id)
              setGameSummaries((prev) => {
                prev[game.id] = newMockSummary
                return {...prev}
              });
            } catch {
              continue
            } 
          }
        } finally {
          console.log('Finished loading daily schedule')
          setLoading(false)
        }
      }
      setup()
    },[day])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={styles.tabs}
        >
                
          
          {loading ? 
            <Tab component={() => <LoadingDailySchedulePreview />} />
            : dailyScheduleGames.map((game, index) => (
              <Tab 
                key={index + 'Tab'}
                component={() => {
                  const gameSummary = gameSummaries[game.id]
                  if(gameSummary === null) return <LoadingDailySchedulePreview />
                  return (
                    <DailyScheduleGamePreview
                      onClick={() => setValue(index)} 
                      gameSummary={gameSummary}
                      selected={index === value}
                    /> 
                  )}}
              />
          ))}
        </Tabs>
      </Box>

      
      {loading ? 
        <TabPanel value={value} index={0}>
          <LoadingFullGameDetails />
        </TabPanel>
        : dailyScheduleGames.map((game, index) => {
          const gameSummary = gameSummaries[game.id]
          return (
            <TabPanel value={value} index={index}>
                {gameSummary === null ?
                  <LoadingFullGameDetails />
                : <GameContextProvider gameSummary={gameSummary}>
                    <FullGameDetails />
                  </GameContextProvider>
                }
              </TabPanel>
          )
        })
      }
    </div>
  );
}
