import { Tab, Tabs, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { API } from '../../../api';
import { DailyScheduleGame } from '../../../model/sportradar/models/DailySchedule/Interfaces/DailyScheduleGame';
import { DailyScheduleGamePreview } from '../DailyScheduleGamePreview';
import FullGameDetails from '../FullGameDetails';
import { useStyles } from './styles';

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
    const [loading, setLoading] = useState(true);

    //TODO: scroll so that today is in the center on first load

    useEffect(() => {
      const setup = async () => {
        try {
          const newGames = await API.SportRadarAPI.getDailySchedule(year, month, day)
          setDailyScheduleGames(newGames.games);
          setLoading(false)
        } catch {
          setLoading(true)
        }
      }
      setup()
    },[day])


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={styles.tabs}
      >
              
        {loading ? 
            <Tab component={() => (<DailyScheduleGamePreview onClick={() => undefined} selected={false} index={0}/>)} />
            : dailyScheduleGames.map((game, index) => (
              <Tab 
              component={() => (
                  <DailyScheduleGamePreview dailyScheduleGame={game} onClick={() => setValue(index)} selected={index === value} index={index}/>
              )} 
              key={index}
              />
        ))}
      </Tabs>

      {dailyScheduleGames[value] && <FullGameDetails gameId={dailyScheduleGames[value].id} />}
    </div>
  );
}
