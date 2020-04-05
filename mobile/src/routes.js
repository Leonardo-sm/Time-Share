import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

import Logon from './pages/Logon';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Logon" component={Logon} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}


