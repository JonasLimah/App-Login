import React from 'react';
import {View,Text,Image} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {LoginPage} from  '../pages/login/loginPage'
import { Welcome } from '../pages/welcome/welcome';
import { Setting } from '../pages/Setting/SettingStack';
import { Date } from '../pages/Date/DateScreen';



export const PagesArea =()=>{
    const Stack = createBottomTabNavigator()
    
 return(
      <>
      <Stack.Navigator
       screenOptions={
        ({route})=>({
          tabBarIcon : ({focused,color})=>{
            let img = null
            switch(route.name){
              case 'Configuraçoes':
                img = require("../assets/configuracoes.png")
                if(focused){
                  img = null
                }
              break
              case 'Agendamento':
                img = require("../assets/livro-de-visitas.png")
                 if(focused){
                  img = null
                }
              break
              case 'Home':
                img = require("../assets/home.png")
                if(focused){
                  img = null
                }
              break
              case 'LogOut':
                img = require("../assets/sair.png")
                if(focused){
                  img = null
                }
              break
            }
            return(
              <Image source={img} style={{width:24,height:24}}/>
            );}}) } >


            <Stack.Screen name='LogOut' component={LoginPage}
              options={{
                tabBarStyle:{
                  display:'none'
                },
                headerStyle:{
                  backgroundColor:'#FFB6C1',
                },
                headerTitleStyle:{
                  display:"none"
                }}}/>
            <Stack.Screen name='Home' component={Welcome}
              options={{
                tabBarStyle:{
                  backgroundColor:"#FFB6C1",
                },
              headerStyle:{
                backgroundColor:"#FFB6C1",
              },
              }}
            />
            <Stack.Screen name='Configuraçoes' component={Setting}
              options={{
               tabBarStyle:{
                  backgroundColor:"#FFB6C1",},
                  headerStyle:{
                backgroundColor:"#FFB6C1",
              }, }}/>
            <Stack.Screen name='Agendamento' component={Date}
              options={{
               tabBarStyle:{
                  backgroundColor:"#FFB6C1",
                 },
                headerStyle:{
                backgroundColor:"#FFB6C1",
              }, }}/>
            
               
        </Stack.Navigator>
        
        </>
    );
}