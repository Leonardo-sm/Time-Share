import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

import Logon from './pages/Logon';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';

function Stack() {
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Logon" component={Logon} />
            <AppStack.Screen name="Register" component={Register} />
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    );
}

function Drawer() {
    return (
        <AppDrawer.Navigator screenOptions={{ headerShown: false }}>
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="MyProfile" component={MyProfile} />
        </AppDrawer.Navigator>
    );
}

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='screen' component={Stack} />
                <AppStack.Screen name='menu' component={Drawer} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}


