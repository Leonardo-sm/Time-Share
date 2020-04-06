import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Logon() {
    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate('Register')
    }

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    return (
        
        <View style={styles.container}>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => navigateToRegister()} >
                    <Text style={styles.actionText}>Criar Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={() => navigateToLogin()}>
                    <Text style={styles.actionText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}