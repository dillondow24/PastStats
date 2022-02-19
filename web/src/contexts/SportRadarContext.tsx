import React, { createContext, useContext, useState } from 'react';



interface SportRadarAPIInterface {
  
}

const SportRadarAPI = createContext<SportRadarAPIInterface>({
    
});

export const useSportRadarAPI = () => useContext(SportRadarAPI);

export const SportRadarAPIProvider = ({children}: any) => {
  const [teamProfiles, setTeamProfiles] = useState<{[teamId: string]: TeamProfile}>({});


  return (
    <SportRadarAPI.Provider value={{}}>
      {children}
    </SportRadarAPI.Provider>
  );
};