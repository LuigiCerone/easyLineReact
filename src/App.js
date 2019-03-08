import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import {Text, View} from 'react-native';
import {SideMenu, List} from "react-native-elements";
import DepartmentListScreen from "./screens/DepartmentListScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ActionListScreen from "./screens/ActionListScreen";

const AppNavigator = createStackNavigator({
    DepartmentListScreen: DepartmentListScreen,
    CourseListScreen: CourseListScreen,
    ActionListScreen: ActionListScreen
}, {
    initialRouteName: "DepartmentListScreen",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'orange'
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    toggleSideMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const MenuComponent = (
            <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>

            </View>
        );

        return (
            <AppContainer/>
        )
    }
}

export default App;
