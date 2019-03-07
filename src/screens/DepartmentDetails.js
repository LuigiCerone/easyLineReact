import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import Item from '../components/Item';
import {Api} from '../constants';


class DepartmentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // let data = new FormData();
        // data.append('id', 1);
        //
        // axios.post(Api.home_page_endpoint,
        //     data,
        //     {headers: {'Content-Type': 'multipart/form-data'}}
        // ).then((response) => {
        //     console.log(response.data);
        //     this.setState({data: response.data});
        // })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    render() {
        return (
            <View><Text>Test</Text></View>
        );
    }
}

export default DepartmentDetails;

