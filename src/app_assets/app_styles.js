import { StyleSheet } from 'react-native';
import Colors from "./colors";

const AppStyles = StyleSheet.create({
    fab: {
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor: Colors.colorAccent,
        borderRadius:100,
        position: 'absolute',
        zIndex: 15,
        bottom: 16,
        end: 16,
    }
});

export default AppStyles;


