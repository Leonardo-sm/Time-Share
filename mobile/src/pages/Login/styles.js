import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',

    },

    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFAF69',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        width: '100%',
        height: 170,
    },

    containermiddle: {
        paddingTop: '20%',
        paddingHorizontal: 50,
    },

    formText: {
        fontSize: 18,
        alignItems: 'center',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 20,
        paddingTop: 20,
    },

    containerBox: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    formUs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },

    formPass: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    containerBox: {

    },

    formTextUs: {
        fontSize: 18,
        width: '95%'
    },

    formTextPass: {
        fontSize: 18,
        width: '95%'
    },

    containerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    boxText: {
        marginLeft: 20,
        fontSize: 15,
    },

    containerPassword: {
        alignItems: 'center',
        marginTop: 55,
    },

    forgetPassword: {
        borderColor: '#000',
        borderBottomWidth: 1,
        fontSize: 12,
    },

    containerButton: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login: {
        backgroundColor: '#FFAF69',
        height: 40,
        borderRadius: 8,
        width: '100%',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginText: {
        fontSize: 22,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

