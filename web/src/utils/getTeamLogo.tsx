
import  {
    ATL,
    BKN,
    BOS,
    CHA,
    CHI,
    CLE,
    DAL,
    DEN,
    DET,
    GSW,
    HOU,
    IND,
    LAC,
    LAL,
    MEM,
    MIA,
    MIL,
    MIN,
    NOP,
    NYK,
    OKC,
    ORL,
    PHI,
    PHX,
    POR,
    SAC,
    SAS,
    TOR,
    UTA,
    WAS
} from 'react-nba-logos';

export const getTeamLogo = (teamId: string, size?: number) => {
    switch (teamId) {
    case '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <ATL size={size}/>
    case '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <BKN size={size}/>
    case '583eccfa-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <BOS size={size}/>
    case '583ec97e-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <CHA size={size}/>
    case '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <CHI size={size}/>
    case '583ec773-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <CLE size={size}/>
    case '583ecf50-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <DAL size={size}/>
    case '583ed102-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <DEN size={size}/>
    case '583ec928-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <DET size={size}/>
    case '583ec825-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <GSW size={size}/>
    case '583ecb3a-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <HOU size={size}/>
    case '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <IND size={size}/>
    case '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <LAC size={size}/>
    case '583ecae2-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <LAL size={size}/>
    case '583eca88-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <MEM size={size}/>
    case '583ecea6-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <MIA size={size}/>
    case '583ecefd-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <MIL size={size}/>
    case '583eca2f-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <MIN size={size}/>
    case '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <NOP size={size}/>
    case '583ec70e-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <NYK size={size}/>
    case '583ecfff-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <OKC size={size}/>
    case '583ed157-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <ORL size={size}/>
    case '583ec87d-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <PHI size={size}/>
    case '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <PHX size={size}/>
    case '583ed056-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <POR size={size}/>
    case '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <SAC size={size}/>
    case '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <SAS size={size}/>
    case '583ecda6-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <TOR size={size}/>
    case '583ece50-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <UTA size={size}/>
    case '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c' : 
        return <WAS size={size}/>
    }
}