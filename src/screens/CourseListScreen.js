import React, { Component } from 'react';
import { Text, SectionList, SafeAreaView, StatusBar } from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import Course from '../components/Course';

import { Api, Colors } from '../constants';

class CourseListScreen extends Component {
    constructor(props) {
        super(props);

        const departmentId = this.props.navigation.getParam('departmentId', null);

        this.state = {
            isLoading: true,
            bcCourses: [],
            msCourses: [],
            departmentId
        };
    }

    componentDidMount() {
        const data = new FormData();
        data.append('provid', this.state.departmentId);
        data.append('id', '');

        axios.post(Api.second_page_endpoint,
            data,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then((response) => {
            console.log(response.data);

            // Split in two arrays according to course level.
            const bcCourses = [];
            const msCourses = [];

            for (const course of response.data) {
                if (course.type_label === 'LAUREA TRIENNALE') {
                    bcCourses.push(course);
                } else if (course.type_label === 'LAUREA MAGISTRALE') {
                    msCourses.push(course);
                }
            }

            // Update and disable spinner.
            this.setState({
                isLoading: false,
                bcCourses,
                msCourses
            });
        })
            .catch((err) => {
                console.log(err);
            });
    }

    keyExtractor(department) {
        return `${department.id}`;
    }

    render() {
        const departmentId = this.state.departmentId;
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={Colors.statusBarColor} />
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Caricamento...'}
                />
                <SectionList
                    renderItem={(course) => {
                        return (<Course course={course.item} departmentId={departmentId} />);
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        !this.state.isLoading &&
                        <Text style={style.sectionHeaderStyle}>{title}</Text>
                    )}
                    sections={[
                        { title: 'Lauree Triennali', data: this.state.bcCourses },
                        { title: 'Lauree Magistrali', data: this.state.msCourses },
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </SafeAreaView>
        );
    }
}
// <StatusBar backgroundColor="#8fbc54" />

const style = {
    sectionHeaderStyle: {
        fontWeight: 'bold', 
        fontSize: 24,
        padding: 5,
        margin: 5
    }
};

export default CourseListScreen;
