import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Details() {

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
                    <TouchableOpacity style={styles.switchButtons}>
                        <Text style={styles.buttonFocus}>Detalhes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.switchButtons} onPress={() => {navigation.navigate("Options")}}>
                        <Text>Meus Pedidos</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.formContainer}>
                    <Text style={styles.text}>Descrição:</Text>
                    <TextInput 
                        style={styles.textAreaForm}
                        value={descricao}
                        multiline={true}
                        numberOfLines={15}
                        onChangeText={setDescricao}
                    />
                </View>
                <TouchableOpacity style={styles.editButton} onPress={() => {navigation.navigate("EditProfile")}}>
                    <Text style={styles.editText}>EDITAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}