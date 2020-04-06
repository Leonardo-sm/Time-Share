import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import logoImg from '../../assets/logo2x.png';

import styles from './styles';

export default function Home() {
    const[search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <View>
                <TextInput 
                    style={styles.searchInput}
                    placeholder='Buscar serviços'
                    placeholderTextColor='#ffa28e'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={search}
                    onChangeText={setSearch}

                />

                <TouchableOpacity style={styles.loadButton}>
                    <MaterialIcons name='search' size={20} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    )
}