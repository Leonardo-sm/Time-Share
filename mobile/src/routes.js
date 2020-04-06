import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Logon from './pages/Logon';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';


export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start">
                    {() => (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Logon" component={Logon} />
                            <Stack.Screen name="Register" component={Register} />
                            <Stack.Screen name="Login" component={Login} />
                        </Stack.Navigator>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Home" >
                    {() => (
                        <Drawer.Navigator>
                            <Drawer.Screen name="Home" component={Home} />
                            <Drawer.Screen name="MyProfile" component={MyProfile} />
                        </Drawer.Navigator> 
                    )} 
                </Stack.Screen>              
            </Stack.Navigator>
        </NavigationContainer>
    );
}


