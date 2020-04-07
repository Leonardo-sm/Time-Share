import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import styles from './styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Logon from './pages/Logon';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import CreateIncident from './pages/CreateIncident';


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
                <Stack.Screen name="Menu" >
                    {() => (
                        <Drawer.Navigator drawerStyle={styles.drawerMenu} 
                            drawerContentOptions={{
                                inactiveTintColor: '#fff',
                                activeTintColor: '#fff',
                                activeBackgroundColor: '#ff8369',
                            }} >
                            <Drawer.Screen name="Home" component={Home} />
                            <Drawer.Screen name="Meu Perfil" component={MyProfile} />
                            <Drawer.Screen name="Criar Caso" component={CreateIncident} />
                        </Drawer.Navigator> 
                    )} 
                </Stack.Screen>              
            </Stack.Navigator>
        </NavigationContainer>
    );
}


