import { Avatar } from '@mui/material'
import React from 'react'

interface Props {
  /**
   * if true render the full logo
   *
   * @type {boolean}
   * @memberof Props
   */
  full?: boolean
}

function PastStatsLogo({full}: Props) {

  if(full){
    return (
      <Avatar  
          src={require('../../assets/images/logo_full_primary.png')}
          alt="PastStats"
          variant="rounded"
          sx={{objectFit: 'contain'}}
      />
    )
  }

  return (
    <img  
        src={require('../../assets/images/logo_icon_primary.png')}
        alt="PastStats"
        style={{height: 45, width: 45, objectFit: 'contain'}}
    />
  )
}

export default PastStatsLogo