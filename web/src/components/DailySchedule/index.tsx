import { Tab, Tabs, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { API } from '../../api';
import { SportRadarNBAGame } from '../../model/sportradar/NBAGame';
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
    const [games, setGames] = useState<SportRadarNBAGame[]>([]);

    useEffect(() => {
      const setup = async () => {
        const newGames = await API.SportRadarAPI.getDailySchedule(year, month, day)
        setGames(newGames.games);
      }

      setup()
    },[])



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
        {games.map((game, index) => (
            <Tab 
              component={() => (
                  <DailyScheduleGamePreview game={game}  onClick={() => setValue(index)} selected={index === value}/>
              )} 
              key={index}
              />
        ))}
      </Tabs>

      {games[value] && <FullGameDetails game={games[value]} />}
    </div>
  );
}
