import React, {Component} from 'react';
import {FlatList, Text, View, SectionList, SafeAreaView, StatusBar} from 'react-native';
import axios from 'axios';
import Course from '../components/Course';
import {Api} from '../constants';


class CourseListScreen extends Component {

    constructor(props) {
        super(props);

        let departmentId = this.props.navigation.getParam('departmentId', null);

        this.state = {
            bcCourses: [],
            msCourses: [],
            departmentId: departmentId
        };
    }

    componentDidMount() {

        let data = new FormData();
        data.append('provid', this.state.departmentId);
        data.append('id', '');

        axios.post(Api.second_page_endpoint,
            data,
            {headers: {'Content-Type': 'multipart/form-data'}}
        ).then((response) => {
            console.log(response.data);

            // Split in two arrays according to course level.
            let bcCourses = [];
            let msCourses = [];

            // response.data.forEach((course) => {
            for (const course of response.data) {
                if (course.type_label === "LAUREA TRIENNALE")
                    bcCourses.push(course);
                else if (course.type_label === "LAUREA MAGISTRALE")
                    msCourses.push(course);
            }

            this.setState({
                bcCourses: bcCourses,
                msCourses: msCourses
            })
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
            <SafeAreaView>
                <StatusBar backgroundColor="#8fbc54" />
                <SectionList
                    renderItem={(course) => {
                        // this.renderItem(course, departmentId)
                        return (<Course course={course.item} departmentId={departmentId}/>);
                    }}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'Lauree Triennali', data: this.state.bcCourses},
                        {title: 'Lauree Magistrali', data: this.state.msCourses},
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </SafeAreaView>
        );
    }


}

export default CourseListScreen;


// Previous that works.
// render() {
//     const departmentId = this.state.departmentId;
//     return (
//         <FlatList
//             data={this.state.data}
//             keyExtractor={this.keyExtractor}
//             renderItem={(course) => {
//                 // this.renderItem(course, departmentId)
//                 return (<Course course={course.item} departmentId={departmentId}/>);
//             }}
//         />
//     );
// }
