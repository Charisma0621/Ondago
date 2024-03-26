import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login} from './src/screens'
import Signup from './src/screens/Signup';
import Resetpassword from './src/screens/Resetpassword';
import SucessPan from './src/screens/SucessPan';
import OptPan from './src/screens/OptPan';
import SelectRole from './src/screens/SelectRole';


const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Resetpassword" component={Resetpassword} />
              <Stack.Screen name="SucessPan" component={SucessPan} />
              <Stack.Screen name="OptPan" component={OptPan} />
              <Stack.Screen name="SelectRole" component={SelectRole} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App