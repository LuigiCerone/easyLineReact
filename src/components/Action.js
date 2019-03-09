import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Colors } from '../constants';

class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            action: props.action,
        };
    }

    //componentDidMount() {
    //}

    render() {
        const { action } = this.props;

        const onPress = () => {
            console.log('Action clicked');

            this.props.navigation.navigate('OfficeScreen', {
                actionId: this.state.action.id
            });
        };

        return (
            <TouchableWithoutFeedback
                onPress={() => onPress()}
            >
                <View style={styles.containerStyle}>
                    <Text>{action.name}</Text>
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

export default withNavigation(Action);
