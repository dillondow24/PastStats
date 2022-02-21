import { Box, Slider, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useStyles } from './styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
  selected: number;
  handleChange: (newNumber: number) => void;
}
export default function NumberSelector({selected, handleChange}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);


    const handleIncreaseNumber = () => {
      if(selected === 9) return
      handleChange(selected + 1)
    }

    const handleDecreaseNumber = () => {
      if(selected === 0) return
      handleChange(selected - 1)
    }

    return (
      <Box sx={styles.root}>
        <Box 
          sx={styles.iconContainer} 
          onClick={handleIncreaseNumber}
          style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}}>
            <KeyboardArrowUpIcon />
        </Box>
          <Box sx={styles.timeContainer}>
            <Typography variant={'h2'}><b>{selected}</b></Typography>
          </Box>
        <Box 
          sx={styles.iconContainer} 
          onClick={handleDecreaseNumber}
          style={{borderBottomRightRadius: '4px', borderBottomLeftRadius: '4px'}}>
            <KeyboardArrowDownIcon />
        </Box>
      </Box>
    );
}

