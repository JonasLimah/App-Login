import React from 'react'
import {TextInput,View,ScrollView,TouchableOpacity,Text} from 'react-native'
import { Style } from './style';


export const LoginPage =()=>{
    return(
       
        <View style={Style.container}>
            <ScrollView>
            <View style={Style.AreaLogin}>
            <TextInput 
                placeholder='Usuario'
                style={Style.inputs}
                
            />
             <TextInput 
                placeholder='Senha'
                style={Style.inputs}
            
            />
            <TouchableOpacity
                style={Style.Btn}
            >
                <Text style={Style.BtnItem}>Entrar</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        
    );
}