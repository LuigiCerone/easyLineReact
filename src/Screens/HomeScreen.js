import React from "react";
import {View, Text} from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}
export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
