import React,{useState,useLayoutEffect} from 'react'
import {TextInput,View,ScrollView,TouchableOpacity,Text,ActivityIndicator} from 'react-native'
import { Style } from './style';
import {useNavigation} from '@react-navigation/native'


export const LoginPage =()=>{
    
    const [register,setRegister ]=useState(false)
    const [reset,setReset ]=useState(false)
    const navigator = useNavigation()
    
    const handleRegister =()=>{
        setRegister(true)
       

      }
       const handleResetPass =()=>{
        setReset(true)
    }
    const handleNextPage=()=>{
        setRegister(false)
        setReset(false)
        navigator.navigate("Home",{})
    }
   
    
    return(
    
        <View style={Style.container}>

            {register &&
            
            <ScrollView>
                <View style={Style.areaText}>

                  <Text style={Style.areaTextItem}>Registrar</Text>
                </View>
            <View style={Style.regiterArea}>
            <TextInput 
                placeholder='Email'
                style={Style.inputsRegister}
                keyboardType='email-address'
                
            />
            <TextInput 
                placeholder='Usuario'
                style={Style.inputsRegister}
               
                
            />
             <TextInput 
                placeholder='Senha'
                style={Style.inputsRegister}
                secureTextEntry
            />
            <TouchableOpacity
                style={Style.Btn}
                onPress={handleNextPage}
                
            >
                <Text style={Style.BtnItem}>Registrar</Text>
            </TouchableOpacity>
              <TouchableOpacity
                 style={Style.Btn}
                 onPress={()=>{
                    setRegister(false)
                 }}
                 
             >
                 <Text style={Style.BtnItem}>Voltar</Text>
             </TouchableOpacity>
            
           
            </View>
            </ScrollView>
            }
            {reset &&
            <ScrollView>
                <View style={Style.areaText}>

                    <Text style={Style.areaTextItem}>Redefinir Senha</Text>
                </View>
             <View style={Style.regiterArea}>
                <TextInput 
                placeholder='Email'
                style={Style.inputsRegister}
                keyboardType='email-address'
                
            />
             <TextInput 
                 placeholder='Nova Senha'
                 style={Style.inputsRegister}
                 
             />
              <TextInput 
                 placeholder='Repita Nova Senha'
                 style={Style.inputsRegister}
                 
             
             />
             <TouchableOpacity
                 style={Style.Btn}
                 onPress={handleNextPage}
                 
             >
                 <Text style={Style.BtnItem}>Salvar</Text>
             </TouchableOpacity>
             <TouchableOpacity
                 style={Style.Btn}
                 onPress={()=>{
                    setReset(false)
                 }}
                 
             >
                 <Text style={Style.BtnItem}>Voltar</Text>
             </TouchableOpacity>
            
             </View>
             </ScrollView>
            }
            {!register && !reset &&
            <ScrollView>
            <View style={Style.areaText}>

                <Text style={Style.areaTextItem}>Login</Text>
            </View>
            <View style={Style.AreaLogin}>
            <TextInput 
                placeholder='Usuario'
                style={Style.inputs}
                
            />
             <TextInput 
                placeholder='Senha'
                style={Style.inputs}
                secureTextEntry
            
            />
            <TouchableOpacity
                style={Style.Btn}
                onPress={handleNextPage}
                
            >
                <Text style={Style.BtnItem}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Style.register}
                onPress={handleRegister}
                
            >
                <Text style={Style.registerTxt}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Style.register}
                onPress={handleResetPass}
                
            >
                <Text style={Style.registerTxt}>Esqueceu a Senha?</Text>
            </TouchableOpacity>
            
            </View>
            </ScrollView>}
        </View>
        
    );
}