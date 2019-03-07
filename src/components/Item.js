import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

// import { Colors, Size } from '../constants';

class Item extends Component {

    constructor(props) {
        super(props);
    };

    onPress = () => {
        // this.setState({selected: !this.state.selected});
    };

    render() {
        const {item} = this.props;
        const {image, title, artist} = item;
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
                {/*<View style={containerTouchStyle}>*/}
                <View>
                    {item.id}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// const styles = {
//     containerStyle: {
//         borderColor: Colors.border,
//         borderWidth: 1,
//         marginBottom: Size.margin,
//         notSelected: {
//             backgroundColor: Colors.white
//         },
//         selected: {
//             backgroundColor: Colors.bg_floor
//         }
//     },
//     containerItemStyle: {
//         flexDirection: 'row',
//         height: 75,
//         alignItems: 'center',
//     },
//     containerDescriptionStyle: {
//         padding: Size.padding,
//     },
//     imageStyle: {
//         marginLeft: Size.margin,
//         marginRight: Size.margin,
//         width: 45,
//         height: 45
//     },
//     textStyle: {
//         fontSize: Size.t_2_size,
//         fontWeight: '800',
//         lineHeight: Size.t_2_size,
//         color: Colors.t_1_color
//     }
// };

export default Item;
