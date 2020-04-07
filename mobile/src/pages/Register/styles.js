import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffaf69',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        width: '100%',
    },

    containerForm: {
        paddingHorizontal: 50,
        paddingTop: 25,
    },

    form: {
        fontSize: 14,
        alignItems: 'center',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 20,
        paddingTop: 20,
    },

    senhaConfi: {
        fontSize: 14,
        alignItems: 'center',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10,
        paddingTop: 20,
    },

    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    create: {
        backgroundColor: '#ffaf69',
        height: 35,
        borderRadius: 8,
        width: '77%',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    createText: {
        fontSize: 18,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});