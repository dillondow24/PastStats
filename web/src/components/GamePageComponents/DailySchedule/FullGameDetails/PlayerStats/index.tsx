import { Accordion, AccordionDetails, AccordionSummary, Box, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { TabPanel } from '../../../../TabPanel';
import { useGameContext } from '../../GameContext';
import { useStyles } from '../styles';
import BoxScore from './BoxScore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GameSummaryPlayer } from '../../../../../model/sportradar/models/GameSummary/Interfaces/GameSummaryPlayer';



export default function PlayerStats() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary} = useGameContext();
    const [value, setValue] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };


    const convertMinutesToNumber = (player: GameSummaryPlayer) => {
        const [mins, secs] = player.statistics.minutes.split(':');
        return Number(mins + secs)
    }

    const stats = [
      {
        starters: gameSummary.home.players.filter(player => player.starter).sort((a, b) => convertMinutesToNumber(b) - convertMinutesToNumber(a)),
        bench: gameSummary.home.players.filter(player => !player.starter).sort((a, b) => convertMinutesToNumber(b) - convertMinutesToNumber(a))
      },{
        starters: gameSummary.away.players.filter(player => player.starter).sort((a, b) => convertMinutesToNumber(b) - convertMinutesToNumber(a)),
        bench: gameSummary.away.players.filter(player => !player.starter).sort((a, b) => convertMinutesToNumber(b) - convertMinutesToNumber(a)),
      },
    ]

    return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={styles.tabs}
        >
          <Tab label={`${gameSummary.home.name}`}/>
          <Tab label={`${gameSummary.away.name}`}/>
        </Tabs>
      </Box>


      {stats.map(({starters, bench}, index) => (
        <TabPanel value={value} index={index}>
          <BoxScore playerType={'Starters'} players={starters}/>
          <Accordion sx={{boxShadow: 'none'}}>
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />} 
              sx={{backgroundColor: theme.palette.background.paper}}
              onClick={() => {setExpanded(!expanded)}}
              >
              <Typography>{expanded ? 'View Less' : 'View More'}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: theme.palette.background.paper, p: 0}}>
              <BoxScore playerType={'Bench'} players={bench}/>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
      ))}
      
    </div>
    );
}



