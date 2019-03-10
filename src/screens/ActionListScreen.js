import React, { Component } from 'react';
import { FlatList, StatusBar, SafeAreaView } from 'react-native';
import axios from 'axios';
import Action from '../components/Action';
import { Api , Colors} from '../constants';
import Spinner from 'react-native-loading-spinner-overlay';


class ActionListScreen extends Component {
    constructor(props) {
        super(props);

        const departmentId = this.props.navigation.getParam('departmentId', null);
        const course = this.props.navigation.getParam('course', null);

        this.state = {
            isLoading: true,
            data: [],
            departmentId,
            course
        };
    }

    componentDidMount() {
        const data = new FormData();
        data.append('provid', this.state.departmentId);
        data.append('id', this.state.course.id);

        axios.post(Api.third_page_endpoint,
            data,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then((response) => {
            console.log(response.data);
            this.setState({ data: response.data, isLoading: false });
        })
            .catch((err) => {
                console.log(err);
            });
    }

    keyExtractor(action) {
        return `${action.id}`;
    }

    renderItem(action) {
        return (
            <Action action={action.item} />
        );
    }

    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={Colors.statusBarColor} />
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Loading...'}
                />
                <FlatList
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        );
    }
}

export default ActionListScreen;

