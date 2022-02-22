import { Tab, Tabs, useTheme } from '@mui/material'
import React from 'react'
import { useShowLiveStats } from '../../../../../../contexts/showLiveStatsContext';
import { useGameContext } from '../../../GameContext';
import { useStyles } from './styles';

export default function StatTypeSelector() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const {showPastStats, setShowPastStats} = useGameContext();

  return (
    <Tabs
      value={showPastStats ? 'past' : 'live'}
      onChange={(_, value) => {
        setShowPastStats(value as "live" | "past")
      }}
      centered
      sx={styles.tabs}
    >
      <Tab label={`Live Stats`} value={'live'}/>
      <Tab label={`Past Stats`} value={'past'}/>
    </Tabs>
  )
}
