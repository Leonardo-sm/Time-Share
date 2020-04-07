import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, EvilIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function MyRequests() {

    const [descricao, setDescricao] = useState("");

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.perfilPhotoArea}>
                <MaterialIcons style={styles.perfilPhoto} name="photo-camera" size={30} color="#5B5B5B" />
            </View>
            <View style={styles.perfilRank}>
                <EvilIcons name="star" size={25} color="#5B5B5B" />
                <EvilIcons name="star" size={25} color="#5B5B5B" />
                <EvilIcons name="star" size={25} color="#5B5B5B" />
                <EvilIcons name="star" size={25} color="#5B5B5B" />
            </View>
            <View style={styles.perfilInfoContainer}>
                <Text style={styles.textNameProfile}>Giovanna Rocha de Almeida, 26</Text>
                <Text style={styles.textCompProfile}>Professora de Inglês</Text>
            </View>
            <View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.switchButtons} onPress={() => {navigation.goBack()}}>
                        <Text>Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.switchButtons}>
                        <Text style={styles.buttonFocus}>Meus Pedidos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <View>
                            <Text style={styles.cardName}>Giovanna Rocha de Almeida, 26</Text>
                        </View>
                        <View style={styles.cardDescriptionContainner}>
                            <Text style={styles.cardTextPro}>Professora de Ingles</Text>
                            <View style={styles.cardDescription}>
                                <Text>Estou em busca de um(a) professor(a) que ensine Alemão.</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cartButton}>
                        <Text style={styles.cartButtonText}>Remover!</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}