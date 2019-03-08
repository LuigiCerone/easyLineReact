import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import Item from '../components/Department';
import {Api} from '../constants';


class CourseDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item: null
        };
    }

    componentDidMount() {

        // const {navigation} = this.props;
        let department = this.props.navigation.getParam('department', null);
        this.setState({department: department});


        let data = new FormData();
        data.append('provid', item.id);
        data.append('id', '');

        axios.post(Api.third_page_endpoint,
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

    keyExtractor(item) {
        return `${item.id}`;
    }

    renderItem({item}) {
        return (
            <Item item={item}/>
        );
    }

    render() {
        let item = this.state.item;
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

export default CourseDetails;

