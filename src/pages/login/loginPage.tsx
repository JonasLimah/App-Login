import React,{useState} from 'react'
import {TextInput,View,ScrollView,TouchableOpacity,Text,ActivityIndicator} from 'react-native'
import { Style } from './style';
import {useNavigation} from '@react-navigation/native'


export const LoginPage =()=>{
    const [load,setLoad] = useState(true)
    const navigator = useNavigation()
   
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
                onPress={()=>{
                    navigator.navigate("Welcome")
                }}
                
            >
                <Text style={Style.BtnItem}>Entrar</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        
    );
}