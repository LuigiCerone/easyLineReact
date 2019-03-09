import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import { Button, Icon } from 'react-native-elements';
import DepartmentListScreen from "./screens/DepartmentListScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ActionListScreen from "./screens/ActionListScreen";
import OfficeScreen from "./screens/OfficeScreen";
import { Header } from "react-native-elements";
//import Icon from 'react-native-vector-icons/FontAwesome';

const AppNavigator = createStackNavigator({
    DepartmentListScreen: DepartmentListScreen,
    CourseListScreen: CourseListScreen,
    ActionListScreen: ActionListScreen,
    OfficeScreen: OfficeScreen
}, {
    defaultNavigationOptions: {
        header: (
            <Header
                leftComponent={(
                    <Button
                        onPress={() => console.log('Pressed')}
                        buttonStyle={{
                            backgroundColor: '#822627'
                        }}
                        icon={
                            <Icon
                                name="menu"
                                size={20}
                                color="white"
                            />
                        }
                    />
                )}
                centerComponent={{ text: 'EasyLine', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor: '#822627'
                }}
            />)
    },
    initialRouteName: "DepartmentListScreen"
});

const drawerScreens = createDrawerNavigator({
    Homepage:  AppNavigator
}, {
    initialRouteName: 'Homepage'
});

const App = createAppContainer(drawerScreens);

export default App;
