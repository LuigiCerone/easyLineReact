import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen
  });

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

export default App;