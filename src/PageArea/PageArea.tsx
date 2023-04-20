import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginPage} from  '../pages/login/loginPage'
import { Welcome } from '../pages/welcome/welcome';

export const PagesArea =()=>{
    const Stack = createNativeStackNavigator()

    return(
      
        <Stack.Navigator screenOptions={{
           headerStyle:{
            backgroundColor:'#FFB6C1'
           },
        
           
        }}>
            <Stack.Screen name='Login' component={LoginPage}/>
            <Stack.Screen name='Welcome' component={Welcome}
              options={{
                headerBackTitleVisible:false
              }}
            />
        </Stack.Navigator>
       
    );
}