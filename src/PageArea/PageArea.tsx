import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginPage} from  '../pages/login/loginPage'

export const PagesArea =()=>{
    const Stack = createNativeStackNavigator()
    return(
            
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage}/>
        </Stack.Navigator>

    );
}