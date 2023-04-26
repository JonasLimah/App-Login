import {StyleSheet} from 'react-native'


export const Style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#FFB6C1'
    },
    areaText:{
      alignItems:"center"
        

    },
    areaTextItem:{
        fontSize:30,
        fontWeight:"bold",
        color:"#FFF0F5"
    },
    load:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    AreaLogin:{
        width:300,
        height:380,
        backgroundColor:"#FFF0F5",
        marginTop:150,
        borderRadius:10,
        alignItems:"center",
        flexDirection:"column",
    },
    inputs:{
        backgroundColor:"#fff",
        width:"80%",
        height:50,
        borderRadius:10,
        padding:5,
        fontSize:18,
        textAlign:"center",
        marginTop:55
    },
    Btn:{
        width:"80%",
        height:50,
        backgroundColor:"#FFC0CB",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    BtnItem:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold"
    },
    register:{
        marginVertical:5,
        paddingVertical:8,
        paddingHorizontal:50,
       
    },
    registerTxt:{
        color:'#FFC0CB',
        fontWeight:'bold',
        textDecorationLine: 'underline'

    },
    regiterArea:{
        width:300,
        height:380,
        backgroundColor:"#FFF0F5",
        marginTop:150,
        borderRadius:10,
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-evenly"

    },
    inputsRegister:{
        backgroundColor:"#fff",
        width:"80%",
        height:50,
        borderRadius:10,
        padding:5,
        fontSize:18,
        textAlign:"center",
        marginTop:20
    }

})