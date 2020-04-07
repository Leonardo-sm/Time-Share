import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const[search, setSearch] = useState('');
    const[incidents, setIncidents] = useState('');
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);
    const[total, setTotal] = useState(0);

    const navigation = useNavigation();

    function navigateToIncident(incident) {
        navigation.navigate('Incident', {incident})
    }

    function navigateToMenu() {
        navigation.openDrawer()
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length == total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuBotton} onPress={()=> navigateToMenu()}>
                    <MaterialIcons name="dehaze" size={20} color="#fff" />
                </TouchableOpacity>
                
                <Image source={logoImg} style={styles.logoImg} />

            </View>

            <View style={styles.searchForm}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder='Buscar serviços...'
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

            

            <View>
                <FlatList 
                    data={incidents}
                    style={styles.IncidentList}
                    keyExtractor={incidents => String(incidents.username)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadIncidents}
                    onEndReached={0.2}
                    renderItem={({ item: incident }) => (
                        <View style={styles.incident} >
                            <Text style={styles.incidentValue}>{incidents.title}</Text>

                            <Text style={styles.incidentValue}>{incidents.description}</Text>

                            <Text style={styles.incidentValue}>{incidents.type}</Text>

                            <TouchableOpacity style={styles.detailButton} onPress={() => navigateToIncident(incident)}>
                                <Text style={styles.detailsButtonText}>Saiba mais</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

                
            </View>
        </View>
    )
}