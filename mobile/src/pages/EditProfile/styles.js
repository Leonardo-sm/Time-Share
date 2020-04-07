import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },

    perfilPhotoArea: {
        marginTop: 100,
        marginLeft: 110,
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
    },

    perfilPhoto: {
        marginLeft: 58,
    },

    perfilRank: {
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 137,
    },

    textForm: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginTop: 20,
        marginRight: 60,
        marginLeft: 34,
        padding: 5,
    },

    text: {
        marginTop: 20,
        marginLeft: 34,
    },

    textAreaForm: {
        backgroundColor: "#F8F8F8",
        borderRadius: 20,
        width: 320,
        height: 200,
        marginLeft:34,
    },

    saveButton: {
        backgroundColor: "#FF8369",
        alignItems: "center",
        height: 50,
        width: 320,
        marginTop: 50,
        marginLeft: 34,
        borderRadius: 15,
    },

    saveText: {
        marginTop: 8,
        color: "white",
        fontSize: 25,
    },
    
});