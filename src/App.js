import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import { Text, View } from 'react-native';
import { SideMenu, List, ListItem } from "react-native-elements";
import HomeScreen from "./screens/HomeScreen";
import DepartmentDetails from "./screens/DepartmentDetails";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    DepartmentDetails: DepartmentDetails
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'orange'
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }
    toggleSideMenu () {
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

            <SideMenu
                isOpen={this.state.isOpen}
                menu={MenuComponent}>
                <AppContainer toggleSideMenu={this.toggleSideMenu.bind(this)} />
            </SideMenu>)
    }
}

export default App;
