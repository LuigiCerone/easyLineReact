import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import Item from '../components/Item';
import {Api} from '../constants';


class DepartmentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item: null
        };
    }

    componentDidMount() {

        // const {navigation} = this.props;
        let item = this.props.navigation.getParam('item', null);
        this.setState({item: item});


        let data = new FormData();
        data.append('provid', item.id);
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

export default DepartmentDetails;

