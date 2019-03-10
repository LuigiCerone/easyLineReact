import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';

import { Colors } from '../constants';


class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            action: props.action,
        };
    }

    onPress = () => {
        this.props.navigation.navigate('OfficeScreen', {
            actionId: this.state.action.id
        });
    };

    render() {
        const { action } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.onPress()}
            >
                <ListItem 
                style={styles.containerStyle}
                    title={action.name}
                    leftIcon={{ name: 'call-to-action' }}
                    rightIcon={{ name: 'keyboard-arrow-right' }}
                />
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        borderColor: Colors.border,
        borderWidth: 1,
        padding: 5,
        margin: 5,
        borderRadius: 20
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
