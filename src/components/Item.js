import React, {Component} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

import {Colors} from '../constants';

class Item extends Component {
    constructor(props) {
        super(props);
    };

    onPress = () => {
        // this.setState({selected: !this.state.selected}
        console.log("Item clicked");

        // Dove va questo?
        this.props.navigation.navigate('DepartmentDetails')
    };

    render() {
        const {item} = this.props;
        // const {
        //     containerStyle,
        //     containerItemStyle,
        //     containerDescriptionStyle,
        //     imageStyle,
        //     textStyle
        // } = styles;

        // const containerTouchStyle =
        //     this.state.selected ?
        //         {
        //             ...containerStyle,
        //             ...containerStyle.selected
        //         } :
        //         {
        //             ...containerStyle,
        //             ...containerStyle.notSelected
        //         };

        return (
            <TouchableWithoutFeedback
                onPress={() => this.onPress()}
            >
                <View style={styles.containerStyle}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        borderColor: Colors.border,
        borderWidth: 1,
        padding: 20,
        notSelected: {
            backgroundColor: Colors.white
        },
        selected: {
            backgroundColor: Colors.bg_floor
        }
    },
    containerItemStyle: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
    }
    // containerDescriptionStyle: {
    //     padding: Size.padding,
    // },
    // imageStyle: {
    //     marginLeft: Size.margin,
    //     marginRight: Size.margin,
    //     width: 45,
    //     height: 45
    // },
    // textStyle: {
    //     fontSize: Size.t_2_size,
    //     fontWeight: '800',
    //     lineHeight: Size.t_2_size,
    //     color: Colors.t_1_color
    // }
};

export default withNavigation(Item);
