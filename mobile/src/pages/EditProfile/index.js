import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function EditProfile() {
    const [name, setName] = useState("");
    const [ocupacao, setOcupacao] = useState("");
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
            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.textForm}
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput 
                    style={styles.textForm}
                    placeholder="Ocupaçãome"
                    value={ocupacao}
                    onChangeText={setOcupacao}
                />
                
                <Text style={styles.text}>Descrição:</Text>
                <TextInput 
                    style={styles.textAreaForm}
                    value={descricao}
                    multiline={true}
                    numberOfLines={15}
                    onChangeText={setDescricao}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={() => {navigation.navigate("MyProfile")}}>
                <Text style={styles.saveText}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    )
}