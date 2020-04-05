import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();


export default function Routes() {
    return(
        <NavigationContainer>

        </NavigationContainer>
    );
}


