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

    textNameProfile: {
        marginLeft: 90,
        marginTop: 10,
    },

    textCompProfile: {
        marginLeft: 125,
        marginTop: 10,
    },

    buttonsContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 60,
    },

    switchButtons: {
        marginLeft: 50,
        color: "#000000",

    },

    buttonFocus: {
        borderBottomWidth: 1,
        borderBottomColor: "#FF8369",
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

    editButton: {
        backgroundColor: "#FF8369",
        alignItems: "center",
        height: 50,
        width: 320,
        marginTop: 50,
        marginLeft: 34,
        borderRadius: 15,
    },

    editText: {
        marginTop: 8,
        color: "white",
        fontSize: 25,
    },

    cardContainer: {
        backgroundColor: "#F8F8F8",
        height: 250,
        width: 350,
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 30,
    },

    cardName: {
        marginLeft: 88,
        fontWeight: "bold",
    },

    cardDescription: {
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        marginRight: 110,
        height: 180,
    },

    cardDescriptionContainner: {
        flexDirection: "row",
    },

    cardTextPro: {
        width: 80,
        marginTop: 60,
    },

    cartButton: {
        borderWidth: 1,
        borderColor: "#FF8669",
        borderRadius: 50,
        width: 80,
        alignItems: "center",
        marginLeft: 240,
        marginTop: 10,
    },

    cartButtonText: {
        color: "#FF8669"
    },

});