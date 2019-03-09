import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import { Button } from 'react-native-elements';
import DepartmentListScreen from "./screens/DepartmentListScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ActionListScreen from "./screens/ActionListScreen";
import OfficeScreen from "./screens/OfficeScreen";
import Icon from 'react-native-vector-icons/FontAwesome';


const AppNavigator = createStackNavigator({
    DepartmentListScreen: {
        screen: DepartmentListScreen,
        navigationOptions: {
            title: 'EasyLine',
            headerStyle: { backgroundColor: '#822627' }
        },
    },
    CourseListScreen : {
        screen: CourseListScreen,
        navigationOptions: {
            title: 'Dipartimenti',
            headerStyle: { backgroundColor: '#b0e072' }
        }
    },
    ActionListScreen : {
        screen: ActionListScreen,
        navigationOptions: {
            title: 'Corsi',
            headerStyle: { backgroundColor: '#73e2d4' }
        }
    },
    OfficeScreen : {
        screen: OfficeScreen,
        navigationOptions: {
            title: 'Segreteria',
            headerStyle: { backgroundColor: '#e2d373' }
        }
    }
}, {
    initialRouteName: "DepartmentListScreen",
    defaultNavigationOptions: ({ navigation }) => ({
        //headerTitleStyle: { textAlign: "center", flex:1  },
        headerTintColor: '#fff',
        headerRight: (
            <Button
                onPress={() => navigation.toggleDrawer()}
                buttonStyle={{ backgroundColor: 'transparent' }}
                icon={<Icon name="bars" size={20} color="#fff" />}
            />
        )
    })
});

const drawerScreens = createDrawerNavigator({
    Homepage:  AppNavigator
}, {
    initialRouteName: 'Homepage',
    drawerPosition: 'right'
});

const App = createAppContainer(drawerScreens);

export default App;
