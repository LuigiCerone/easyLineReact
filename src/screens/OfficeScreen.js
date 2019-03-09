import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import Office from '../components/Office';
import {Api} from '../constants';


class OfficeScreen extends Component {

    constructor(props) {
        super(props);

        let actionId = this.props.navigation.getParam('actionId', null);

        this.state = {
            officeData: null,
            actionId: actionId
        };

        console.debug("constructor");

    }

    componentDidMount() {

        let data = new FormData();
        data.append('id', this.state.actionId);

        axios.post(Api.forth_page_endpoint,
            data,
            {headers: {'Content-Type': 'multipart/form-data'}}
        ).then((response) => {
            this.setState({officeData: response.data[0]});
        })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        return (
            <Office
                office={this.state.officeData}
            />
        );
    }
}

export default OfficeScreen;

