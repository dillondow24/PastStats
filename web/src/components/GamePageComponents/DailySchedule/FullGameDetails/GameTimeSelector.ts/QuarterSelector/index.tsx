import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toOrdinalSuffix } from '../../../../../../utils/toOrdinalSuffix';
import { Typography } from '@mui/material';

interface Props {
  quarter: number,
  handleChange: (newQuarter: number) => void
}
export default function VerticalToggleButtons({quarter, handleChange} : Props) {

  return (
    <ToggleButtonGroup
      orientation={"horizontal"}
      color='secondary'
      value={quarter}
      exclusive
      onChange={(_, newQuarter) => handleChange(newQuarter)}
    >
      {[1,2,3,4].map((q) => (
        <ToggleButton value={q} sx={{p: 0.5}}>
          <Typography>{`${toOrdinalSuffix(q)}`}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
