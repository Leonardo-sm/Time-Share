import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Logon() {
    const navigation = useNavigation();

    function navigateToRegister() {
        
    }

    return (
        <View>
            <TouchableOpacity>
                <Text>Criar Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}