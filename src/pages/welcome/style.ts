import {StyleSheet} from 'react-native'

export const Style = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:"#FFB6C1"
    },
    welcomeInfo:{
        
        height:150,
        marginVertical:20,
        flexDirection:"column",
        justifyContent:"space-evenly"
    },sayHi:{
        fontSize:18,
        fontWeight:"bold",
        color:'#FF69B4'

    },dailyPhase:{
        fontSize:18,
        color:"#F0F8FF",

        
    },
    areaPhase:{
        height:"auto",
        padding:10,
        borderRadius:10,
        backgroundColor:"#F0F8FF",
        alignItems:"center",
        justifyContent:"center"
    },
    Phase:{
        fontSize:14,
        color:"#FF69B4",
        fontWeight:"bold"

    },
    ItemList:{
      
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        borderRadius:10,
        height:100
    },
    listInfo:{
      
        backgroundColor:"#F0F8FF",
        width:200,
        borderRadius:10,
        height:100,
        alignItems:"center",
        justifyContent:"center"
    },
    promoTxt:{
        fontSize:15,
        fontWeight:"bold",
        color:"#FF69B4"
    },
    txtItem:{
        color:'#8A2BE2',
        fontSize:15
    },
    valueItem:{
        color:'#FF69B4',
        fontSize:15
    },
    areaService:{
        height:100,
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center"
    },
    itemService:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F0F8FF",
        borderRadius:10,
        width:100,
        height:80
    }
   
})