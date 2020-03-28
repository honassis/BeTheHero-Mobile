import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight+20,
        backgroundColor: '#7159c1'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 15,
        color: '#ebebfb'
    }, 
    headerTextBold:{
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#00ffff',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight:24,
        color: '#e6e6fa'
    },
    incidentList:{
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom:24,
        color: '#737380'
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#59c164',
        fontSize: 15,
        fontWeight: 'bold'
    }
})