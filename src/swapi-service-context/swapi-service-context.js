import React from 'react';
import { countryData } from "../countryData";


export const stateContext = {
  
  countries: countryData
} = React.createContext();

