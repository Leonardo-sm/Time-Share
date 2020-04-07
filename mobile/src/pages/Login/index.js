import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Linking, TextInput, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons, Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo_branco.png';
import api from '../../services/api';

import styles from './styles';

export default function Login() {
    const [username, setUsername] = useState("");
    const [passaword, setPassword] = useState("");
    const [history, setHistory] = useState("");

    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Menu')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={logoImg} />
            </View>
            <View style={styles.containermiddle}>
                <View style={styles.formUs}>
                    <TextInput
                        style={styles.formTextUs}
                        placeholder="Usuário"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Feather style={styles.fromTextUs} name="x" size={17} color="#FF8369" />
                </View>

                <View style={styles.formPass}>
                    <TextInput
                        style={styles.formTextPass}
                        placeholder="Senha"
                        value={passaword}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <MaterialIcons style={styles.formTextPass} name="visibility" size={25} color="#FF8369" />
                </View>


                <View style={styles.containerBox}>
                    <CheckBox></CheckBox>
                    <Text style={styles.boxText}>LEMBRAR MINHA SENHA</Text>
                </View>

                <View style={styles.containerPassword}>
                    <TouchableOpacity>
                        <Text style={styles.forgetPassword}>ESQUECI MINHA SENHA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity value={history} onPress={() => navigateToHome()} style={styles.login}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}