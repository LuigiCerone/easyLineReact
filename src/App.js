import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import {Text, View, Button} from 'react-native';
import DepartmentListScreen from "./screens/DepartmentListScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ActionListScreen from "./screens/ActionListScreen";
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppNavigator = createStackNavigator({
    DepartmentListScreen: DepartmentListScreen,
    CourseListScreen: CourseListScreen,
    ActionListScreen: ActionListScreen
}, {
    initialRouteName: "DepartmentListScreen",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'orange'
        },
        headerLeft: (
            <Button
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                onPress={() => openControlPanel}
                title=""
            />
        )
    }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render () {
        return (
            <Drawer
                type="static"
                tapToClose={true}
                openDrawerOffset={100}
                styles={drawerStyles}
                tweenHandler={Drawer.tweenPresets.parallax}
                ref={(ref) => this._drawer = ref}
                content={<Text>Qui mettere il componente Menu al posto di Text</Text>}
            >
                <AppContainer />
            </Drawer>
        )
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 30},
    main: {paddingLeft: 3},
}

export default App;
