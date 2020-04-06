import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking, TextInput } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo_branco.png';

import styles from './styles';

export default function Register() {
    const [username, setUsername] = useState("");
    const [passaword, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [passawordConfi, setPasswordConfi] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigation = useNavigation();


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.form}
                    placeholder="NOME COMPLETO"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.form}
                    placeholder="ÚSUARIO"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.form}
                    placeholder="EMAIL"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.form}
                    placeholder="GÊNERO"
                    value={gender}
                    onChangeText={setGender}
                />

                <TextInput
                    style={styles.form}
                    placeholder="SENHA"
                    value={passaword}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    style={styles.senhaConfi}
                    placeholder="CONFIRMAR SENHA"
                    value={passawordConfi}
                    onChangeText={setPasswordConfi}
                    secureTextEntry
                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.create}>
                    <Text style={styles.createText}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}