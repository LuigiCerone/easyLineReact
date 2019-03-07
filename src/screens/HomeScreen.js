import React, {Component} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import Item from '../components/Item';
import {Api} from '../constants';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const url = Api.url;
        axios.get(url)
            .then((response) => {
                this.setState({data: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    keyExtractor(item) {
        return item.title;
    }

    renderItem({item}) {
        return (
            <Item item={item}/>
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

export default HomeScreen;

