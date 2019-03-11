import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';

import { Colors } from '../constants';

class Department extends Component {
    constructor(props) {
        super(props);

        this.state = { department: this.props.department };
    }

    onPress = () => {
        console.log(`Department clicked with: ${this.state.department.id}`);

        this.props.navigation.navigate('CourseListScreen', {
            departmentId: this.state.department.id
        });
    };

    render() {
        const { department } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.onPress()}
            >
                <ListItem 
                style={styles.containerStyle}
                    title={department.name}
                    //subtitle={department.name}
                    leftIcon={{ name: 'folder' }}
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
};

export default withNavigation(Department);
