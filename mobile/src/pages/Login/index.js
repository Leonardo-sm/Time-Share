import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home')
    }

    return (
        <View>
            <Text>Olá sou o Login</Text>

            <View style={styles.container}>
                <View style={styles.actions}>

                    <TouchableOpacity style={styles.action} onPress={() => navigateToHome()}>
                        <Text style={styles.actionText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        

    )
}