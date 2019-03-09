import React, {Component} from 'react';
import {FlatList, StatusBar, SafeAreaView} from 'react-native';
import axios from 'axios';
import Department from '../components/Department';
import {Api} from '../constants';


class DepartmentListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let data = new FormData();
        data.append('id', 1);

        axios.post(Api.home_page_endpoint,
            data,
            {headers: {'Content-Type': 'multipart/form-data'}}
        ).then((response) => {
            console.log(response.data);
            this.setState({data: response.data});
        })
            .catch((err) => {
                console.log(err);
            });
    }

    keyExtractor(department) {
        return `${department.id}`;
    }

    renderItem(department) {
        return (
            <Department department={department.item}/>
        );
    }

    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor="#6b1819" />
                <FlatList
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        );
    }
}

export default DepartmentListScreen;

