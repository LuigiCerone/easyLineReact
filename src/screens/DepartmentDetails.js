import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import Course from '../components/Course';
import {Api} from '../constants';


class DepartmentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            department: null
        };
    }

    componentDidMount() {

        // const {navigation} = this.props;
        let department = this.props.navigation.getParam('department', null);
        this.setState({department: department});


        let data = new FormData();
        data.append('provid', department.id);
        data.append('id', '');

        axios.post(Api.second_page_endpoint,
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

    renderItem(course) {
        return (
            <Course course={course.item}/>
        );
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

export default DepartmentDetails;

