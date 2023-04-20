import React from 'react'
import {TextInput,View,FlatList,ScrollView,TouchableOpacity,Text,Image} from 'react-native'

import { Style } from './style';
import {useState} from 'react'

type item = {
    key:number,
    name:string,
    Preco:number
}

export const Welcome =()=>{
 
    const [phase,setPhase]=useState("hj e um dia muito legal dsnosdfi aisdhfoihsdafoih aosdifhoisdhfisdh")
    const promo:Array<item> = [
        {key:Math.random(),name:"Depilçaão",Preco:10.00},
        {key:Math.random(),name:"Massagem",Preco:10.00},
        {key:Math.random(),name:"Limpeza",Preco:10.00}
        ,{key:Math.random(),name:"Unhas",Preco:10.00},
        {key:Math.random(),name:"Massagem",Preco:10.00},
        {key:Math.random(),name:"Limpeza",Preco:10.00}
        ,{key:Math.random(),name:"Unhas",Preco:10.00}
    ]
    return(
        
        <View style={Style.container}>
       
            
            <View style={Style.welcomeInfo}>
            <Text style={Style.sayHi} >Olá, Jonas</Text>
            <Text style={Style.dailyPhase}>frase do dia </Text>
            <View style={Style.areaPhase}>
                <Text style={Style.Phase} >{phase}</Text>
            </View>
            
            </View>
            
            <FlatList 
                data={promo}
                renderItem={({item})=>
                <View style={Style.ItemList}>
                    <TouchableOpacity style={Style.listInfo}>
                        <Text style={Style.promoTxt}>Promoção</Text>
                        <Text style={Style.txtItem}>{item.name}</Text>
                        <Text style={Style.valueItem}>{item.Preco.toFixed(2)}</Text>
                    </TouchableOpacity>
                </View>}
               
            />
                <View style={Style.areaService}>

                    <View >
                        <TouchableOpacity style={Style.itemService}>
                        <Image source={require('../../assets/livro-de-visitas.png')}
                            style={{width:30,height:30}}
                            />
                               <Text>Agendamento</Text>
                        </TouchableOpacity>
                      
                    </View>
                    <View >
                        <TouchableOpacity style={Style.itemService}>
                           <Image source={require('../../assets/configuracoes.png')}
                            style={{width:30,height:30}}
                            />
                            <Text>Configurações</Text>
                        </TouchableOpacity>
                        
                    </View>

                    
                </View>
            
           
        </View>
    );   
}