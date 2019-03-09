import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import { Button } from 'react-native-elements';
import DepartmentListScreen from "./screens/DepartmentListScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ActionListScreen from "./screens/ActionListScreen";
import OfficeScreen from "./screens/OfficeScreen";
import { Header } from "react-native-elements";
import MenuButton from "./components/MenuButton";
import Icon from 'react-native-vector-icons/FontAwesome';


const AppNavigator = createStackNavigator({
    DepartmentListScreen: {
        screen: DepartmentListScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <Header
                    rightComponent={<MenuButton navigation={navigation} />}
                    statusBarProps={{ backgroundColor: '#6b1819' }}
                    centerComponent={{ text: 'EasyLine', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{ backgroundColor: '#822627' }}
                />)})
    },
    CourseListScreen : {
        screen: CourseListScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <Header
                    leftComponent={(
                        <Button
                            onPress={() => navigation.goBack(null)}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            icon={ <Icon name="arrow-left" size={20} color="#fff" /> }
                        />
                    )}
                    rightComponent={<MenuButton navigation={navigation} />}
                    statusBarProps={{ backgroundColor: '#8fbc54' }}
                    centerComponent={{ text: 'Dipartimenti', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{ backgroundColor: '#b0e072' }}
                />)})
    },
    ActionListScreen : {
        screen: ActionListScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <Header
                    leftComponent={(
                        <Button
                            onPress={() => navigation.goBack(null)}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            icon={ <Icon name="arrow-left" size={20} color="#fff" /> }
                        />
                    )}
                    rightComponent={<MenuButton navigation={navigation} />}
                    statusBarProps={{ backgroundColor: '#54c4b6' }}
                    centerComponent={{ text: 'Corsi', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{ backgroundColor: '#73e2d4' }}
                />)})
    },
    OfficeScreen : {
        screen: OfficeScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <Header
                    leftComponent={(
                        <Button
                            onPress={() => navigation.goBack(null)}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            icon={ <Icon name="arrow-left" size={20} color="#fff" /> }
                        />
                    )}
                    rightComponent={<MenuButton navigation={navigation} />}
                    statusBarProps={{ backgroundColor: '#ccbb53' }}
                    centerComponent={{ text: 'Segreteria', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{ backgroundColor: '#e2d373' }}
                />)})
    }
}, {
    initialRouteName: "DepartmentListScreen",
    navigationOptions: ({ navigation }) => ({
        headerLeft : <MenuButton navigate={navigation.navigate} />,
    }),
});

const drawerScreens = createDrawerNavigator({
    Homepage:  AppNavigator
}, {
    initialRouteName: 'Homepage',
    drawerPosition: 'right'
});

const App = createAppContainer(drawerScreens);

export default App;
