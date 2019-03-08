import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import { Text, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
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
    render() {
        return <AppContainer>
        <SideMenu>
            <View><Text>Prova</Text></View>
        </SideMenu>
        </AppContainer>;
    }
}

export default App;
