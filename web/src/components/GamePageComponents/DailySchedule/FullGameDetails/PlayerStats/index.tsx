import { Accordion, AccordionDetails, AccordionSummary, Box, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { TabPanel } from '../../../../TabPanel';
import { useGameContext } from '../../GameContext';
import { useStyles } from '../styles';
import BoxScore from './BoxScore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function PlayerStats() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary} = useGameContext();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const homeStarters = gameSummary.home.players.filter(player => player.starter);
    const homeBench = gameSummary.home.players.filter(player => !player.starter);
    const awayStarters = gameSummary.away.players.filter(player => player.starter);
    const awayBench = gameSummary.away.players.filter(player => !player.starter);

    return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={styles.tabs}
        >
          <Tab label={`${gameSummary.home.market} ${gameSummary.home.name}`}/>
          <Tab label={`${gameSummary.away.market} ${gameSummary.away.name}`}/>
        </Tabs>
      </Box>

      
      <TabPanel value={value} index={0}>
        <BoxScore playerType={'Starters'} players={homeStarters}/>
        <Accordion sx={{boxShadow: 'none'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor: theme.palette.background.paper}}>
            <Typography>View More</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: theme.palette.background.paper, p: 0}}>
            <BoxScore playerType={'Bench'} players={homeBench}/>
          </AccordionDetails>
        </Accordion>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <BoxScore playerType={'Starters'} players={awayStarters}/>
        <Accordion sx={{boxShadow: 'none'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{backgroundColor: theme.palette.background.paper}}>
            <Typography>View More</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: theme.palette.background.paper, p: 0}}>
            <BoxScore playerType={'Bench'} players={awayBench}/>
          </AccordionDetails>
        </Accordion>
      </TabPanel>
    </div>
    );
}



