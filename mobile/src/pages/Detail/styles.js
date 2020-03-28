import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:24,
        paddingVertical:Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    incident:{
        backgroundColor: "#FFF",
        padding: 24,
        borderRadius:8,
        marginBottom:16,
        marginTop:48
    },

    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight: 'bold',
        marginTop:24
    },

    incidentValue:{
        marginTop: 8,
        fontSize:15,
        color:'#737380'
    },

    contactBox:{
        backgroundColor: "#FFF",
        padding: 24,
        borderRadius:8,
        marginBottom:16,
        
    },

    heroTitle:{
        fontWeight: 'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30
    },

    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16
    },

    actions:{
        marginTop:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#E02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent: 'center',
        alignItems:'center'
    },

    actionText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#FFF'
    }


});