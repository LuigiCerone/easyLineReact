import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import Course from '../components/Course';
import {Api} from '../constants';


class CourseListScreen extends Component {

    constructor(props) {
        super(props);

        let departmentId = this.props.navigation.getParam('departmentId', null);

        this.state = {
            data: [],
            departmentId: departmentId
        };
    }

    componentDidMount() {

        // const {navigation} = this.props;
        // this.setState({department: department});


        let data = new FormData();
        data.append('provid', this.state.departmentId);
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

    debugger;

    // renderItem(course, id) {
    //     return (
    //
    //     );
    // }

    render() {
        const departmentId = this.state.departmentId;
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtractor}
                renderItem={(course) => {
                    // this.renderItem(course, departmentId)
                    return (<Course course={course.item} departmentId={departmentId}/>);
                }}
            />
        );
    }
}

export default CourseListScreen;

