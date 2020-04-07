import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GestureRecogniser, { swipeDirections } from "react-native-swipe-gestures"; 

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import Details from './Details';
import MyRequests from './MyRequests';


export default function MyProfile() {
    const [name, setName] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [descricao, setDescricao] = useState("");

    const navigation = useNavigation();

    return (
        <Details />
    );
}