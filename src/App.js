import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DepartmentDetails from "./screens/DepartmentDetails";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    DepartmentDetails: DepartmentDetails
}, {
    initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

export default App;