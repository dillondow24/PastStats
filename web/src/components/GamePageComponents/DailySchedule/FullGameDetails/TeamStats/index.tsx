import { Box, styled, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useShowLiveStats } from '../../../../../contexts/showLiveStatsContext';
import { getTeamColor } from '../../../../../utils/getTeamColor';
import { useGameContext } from '../../GameContext';
import { useStyles } from './styles';
import StatisticComparison from './StatisticComparison';
import { getTeamLogo } from '../../../../../utils/getTeamLogo';




export default function TeamStats() {
    const theme = useTheme();
    const styles = useStyles(theme);

    const {gameSummary, isScheduled} = useGameContext();
    const {showLiveStats} = useShowLiveStats();

    const statisticalCategories = [
      'Field Goal %',
      '3 Point %',
      'Free Throw %',
      'Turnovers',
      'Assists',
      'Rebounds',
      'Steals',
      'Blocks',
      'Total Fouls',
    ]

    const LOGO_SIZE = 50
    const homeStats = gameSummary.home.statistics;
    const awayStats = gameSummary.away.statistics;
    const homeColor = getTeamColor(gameSummary.home.id)
    const awayColor = getTeamColor(gameSummary.away.id)



    const getCategoriesStats = (category: string) => {
      let homeValue = 1
      let homeLabel =  '-'
      let homeSecondaryLabel = undefined
      let awayValue = 1
      let awayLabel =  '-'
      let awaySecondaryLabel = undefined  
      if(!showLiveStats || isScheduled) return {homeLabel, homeValue, homeSecondaryLabel, awayLabel, awayValue, awaySecondaryLabel}

      switch (category){
        case 'Field Goal %':
          homeValue = Math.round(homeStats.field_goals_pct)
          homeLabel =  homeStats.field_goals_att === 0 ? '-' : `${homeValue}%`
          homeSecondaryLabel =  `(${homeStats.field_goals_made}/${homeStats.field_goals_att})`
          awayValue = Math.round(awayStats.field_goals_pct)
          awayLabel =  homeStats.field_goals_att === 0 ? '-' : `${awayValue}%`
          awaySecondaryLabel =  `(${awayStats.field_goals_made}/${awayStats.field_goals_att})`
          return {homeLabel, homeValue, homeSecondaryLabel, awayLabel, awayValue, awaySecondaryLabel}
        case '3 Point %':
          homeValue = Math.round(homeStats.three_points_pct)
          homeLabel =  homeStats.three_points_att === 0 ? '-' : `${homeValue}%`
          homeSecondaryLabel =  `(${homeStats.three_points_made}/${homeStats.three_points_att})`
          awayValue = Math.round((awayStats.three_points_made / awayStats.three_points_att) * 100)
          awayLabel =  homeStats.three_points_att === 0 ? '-' : `${awayValue}%`
          awaySecondaryLabel =  `(${awayStats.three_points_made}/${awayStats.three_points_att})`
          return {homeLabel, homeValue, homeSecondaryLabel, awayLabel, awayValue, awaySecondaryLabel}
        case 'Free Throw %':
          homeValue = Math.round(homeStats.free_throws_pct)
          homeLabel =  homeStats.free_throws_att === 0 ? '-' : `${homeValue}%`
          homeSecondaryLabel =  `(${homeStats.free_throws_made}/${homeStats.free_throws_att})`
          awayValue = Math.round((awayStats.free_throws_made / awayStats.free_throws_att) * 100)
          awayLabel =  homeStats.free_throws_att === 0 ? '-' : `${awayValue}%`
          awaySecondaryLabel =  `(${awayStats.free_throws_made}/${awayStats.free_throws_att})`
          return {homeLabel, homeValue, homeSecondaryLabel, awayLabel, awayValue, awaySecondaryLabel}
        case 'Turnovers':
          homeValue = homeStats.turnovers
          homeLabel = `${homeValue}`
          awayValue = awayStats.turnovers
          awayLabel = `${awayValue}`
          return {homeLabel, homeValue, awayLabel, awayValue}
        case 'Assists':
          homeValue = homeStats.assists
          homeLabel = `${homeValue}`
          awayValue = awayStats.assists
          awayLabel = `${awayValue}`
          return {homeLabel, homeValue, awayLabel, awayValue}
        case 'Rebounds':
          homeValue = homeStats.rebounds
          homeLabel = `${homeValue}`
          awayValue = awayStats.rebounds
          awayLabel = `${awayValue}`
          return {homeLabel, homeValue, awayLabel, awayValue}
        case 'Steals':
          homeValue = homeStats.steals
          homeLabel = `${homeValue}`
          awayValue = awayStats.steals
          awayLabel = `${awayValue}`
          return {homeLabel, homeValue, awayLabel, awayValue}
        case 'Blocks':
          homeValue = homeStats.blocks
          homeLabel = `${homeValue}`
          awayValue = awayStats.blocks
          awayLabel = `${awayValue}`
          return {homeLabel, homeValue, awayLabel, awayValue}
        case 'Total Fouls':
          homeValue = homeStats.total_fouls
          homeLabel = `${homeValue}`
          awayValue = awayStats.total_fouls
          awayLabel = `${awayValue}`
          return {homeLabel, homeValue, awayLabel, awayValue}
        default:
          return {homeLabel, homeValue, homeSecondaryLabel, awayLabel, awayValue, awaySecondaryLabel}
      }
    }

    return (
      <div>

        <Box sx={styles.header}>
          {getTeamLogo(gameSummary.home.id, LOGO_SIZE)}
          {getTeamLogo(gameSummary.away.id, LOGO_SIZE)}
        </Box>
        {statisticalCategories.map((category, index) => {

          const stats = getCategoriesStats(category)
          return (
            <StatisticComparison 
              category={category}
              homeColor={homeColor ? homeColor : theme.palette.primary.main}
              awayColor={awayColor ? awayColor : theme.palette.secondary.main}
              {...stats}
              />
          )
        }
        )}
      </div>
    );
}
