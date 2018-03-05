import React from 'react'
import {StackNavigator} from 'react-navigation';
import TodoListScreen from "./screens/TodoListScreen";
import TodoDetailsScreen from "./screens/TodoDetailsScreen";
import Colors from "../app_assets/colors";
import {Text} from 'react-native';
import Strings from "../app_assets/strings";


export const Navigator = StackNavigator({
        TodoListScreen: {screen: TodoListScreen},
        TodoDetailsScreen: {screen: TodoDetailsScreen},
    },
    // header options
    {
        //  to hide navigation bar
        headerMode: 'screen',
        navigationOptions: ({navigation}) => ({
            title: <Text style={{color: Colors.colorAccent}}> {Strings.app_name} </Text> ,
            headerStyle: {
                backgroundColor: Colors.colorPrimary,
                // elevation: 0,
            },
            headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: "600",
            },
            headerTintColor: Colors.white,
            // headerBackTitle: ''

        }),

    }
);

export default Navigator;
