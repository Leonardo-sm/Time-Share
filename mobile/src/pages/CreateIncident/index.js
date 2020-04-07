import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default function CreateIncident() {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[time, setTime] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>MEU NOVO CASO</Text>
            </View>

            <View style={ styles.form }>
                <TextInput 
                    placeholder="TÍTULO"
                    value={ title }
                    onChangeText={ setTitle }

                />

                <TextInput 
                    placeholder="Nos conte o que precisa..."
                    multiline={ true }
                    value={ description }
                    onChangeText={ setDescription }
                    
                />

                <TextInput 
                    placeholder="TEMPO ESTIMADO"
                    value={ time }
                    onChangeText={ setTime }
                    
                />
            </View>
        </View>
    )
}