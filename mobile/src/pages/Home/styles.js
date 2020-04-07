import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    menuBotton: {
        position: 'absolute',
        marginHorizontal: -30,
        backgroundColor: '#ff8369',
        width: 45,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#ff5069',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 6,
            height: 6,
        },
        elevation: 8
         
    },

    logoImg: {
        marginLeft: 108,
    },

    searchForm: {
        position: 'absolute',
        marginTop: 60,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },

    searchInput: {
        flex:1,
        height: 35,
        marginLeft: 5,
        marginTop: 48,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 25,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
    },

    loadButton: {
        marginTop: 50,
        width: 30,
        height: 30,
        backgroundColor: '#ff8369',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
})