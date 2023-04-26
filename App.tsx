import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {PagesArea} from './src/PageArea/PageArea'

export default function App(){
  return(
    <NavigationContainer>
      <PagesArea/>
      
    </NavigationContainer>
  );
}