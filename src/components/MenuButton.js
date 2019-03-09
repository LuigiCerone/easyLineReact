import React, {Component} from "react";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class MenuButton extends Component {
    render(){
        return (
            <Button
                onPress={() => this.props.navigation.toggleDrawer()}
                buttonStyle={{backgroundColor: 'transparent'}}
                icon={<Icon name="bars" size={20} color="#fff"/>}
            />
        );
    }
}

export default MenuButton;
