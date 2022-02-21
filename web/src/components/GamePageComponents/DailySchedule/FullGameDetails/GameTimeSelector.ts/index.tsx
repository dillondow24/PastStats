import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Enumerate } from '../../../../../utils/enumerate';
import NumberSelector from './NumberSelector';
import QuarterSelector from './QuarterSelector';
import { useStyles } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function GameTimeSelector() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const [expanded, setExpanded] = useState(false);

    const [minuteTens, setMinuteTens] = useState(1);
    const [minuteOnes, setMinuteOnes] = useState(4);
    const [secondTens, setSecondTens] = useState(3);
    const [secondOnes, setSecondOnes] = useState(0);
    const [quarter, setQuarter] = useState(1);
    

    const adjustValues = (tens: number, ones: number) => {
      if(tens === 1){
        if(ones > 5){
          if(secondTens === 0 && secondOnes === 0){
            setMinuteOnes(5) // if seconds are 00, set to 15 minutes
          } else {
            setMinuteOnes(4) // if seconds are > 00, set to 14 minutes
          }
        } else if (ones === 5) { // if setting to 15 minutes, seconds must be 00
          setSecondTens(0)
          setSecondOnes(0)
        }
      }
    }

    const handleChangeMinuteTens = (newNumber: number) => {
      if(newNumber === 2) return
      setMinuteTens(newNumber);
      adjustValues(newNumber, minuteOnes)
    }

    const handleChangeMinuteOnes = (newNumber: number) => {
      if(minuteTens === 1 && newNumber > 5) return
      setMinuteOnes(newNumber);
      adjustValues(minuteTens, newNumber)
    }

    const handleChangeSecondTens = (newNumber: number) => {
        if(minuteTens === 1 && minuteOnes === 5) return // seconds must stay at 0 if minutes is at 15
        if(newNumber > 5) return // seconds cannot be greater than 59){
        setSecondTens(newNumber);
    }

    const handleChangeSecondOnes = (newNumber: number) => {
        if(minuteTens === 1 && minuteOnes === 5) return // seconds must stay at 0 if minutes is at 15
        setSecondOnes(newNumber);
    }

    const handleChangeQuarter = (newNumber: number) => {
      setQuarter(newNumber);
    }


    const handleSetGameTime = () => {
      console.log(`${minuteTens}${minuteOnes}:${secondTens}${secondOnes} ${quarter}`)
    }

    return (
      <Accordion sx={{boxShadow: 'none'}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{backgroundColor: theme.palette.background.paper}}
          onClick={() => {setExpanded(!expanded)}}
          >
          <Typography>{expanded ? 'Close' : 'Select Game Time'}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: theme.palette.background.paper, p: 0}}>
          <Box sx={{
              display: 'flex',
              flexDirection: {xs: 'column', sm: 'row'},
              alignItems: 'center',
              justifyContent: 'center',
            }}>


              <Box sx={{display: {xs: 'flex', sm: 'none'}, flexDirection: 'column', alignItems: 'center', mb: 2}}>
                <Typography variant='subtitle1' color='textSecondary' gutterBottom>Quarter</Typography>
                <QuarterSelector quarter={quarter} handleChange={handleChangeQuarter}/>
              </Box>
              
              <Box sx={styles.timeContainer}>
            
                <NumberSelector selected={minuteTens} handleChange={handleChangeMinuteTens}/>
                <NumberSelector selected={minuteOnes} handleChange={handleChangeMinuteOnes}/>
                <Typography variant='h4'>:</Typography>

                <NumberSelector selected={secondTens} handleChange={handleChangeSecondTens}/>
                <NumberSelector selected={secondOnes} handleChange={handleChangeSecondOnes}/>

              </Box>


            <Box>
              <Box sx={{display: {xs: 'none', sm: 'flex'}, flexDirection: 'column', alignItems: 'center', mx: 2}}>
                <Typography variant='subtitle1' color='textSecondary' gutterBottom>Quarter</Typography>
                <QuarterSelector quarter={quarter} handleChange={handleChangeQuarter}/>
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'center', m: 2}}>
                <Button variant={'contained'} onClick={handleSetGameTime}>
                  Set Game Time
                </Button>
              </Box>
            </Box>

            </Box>
        </AccordionDetails>
      </Accordion>
    );
}

