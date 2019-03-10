import React, { Component } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import axios from 'axios';
import Office, { Text, View } from '../components/Office';
import { Api, Colors } from '../constants';
import Spinner from 'react-native-loading-spinner-overlay';


class OfficeScreen extends Component {
    constructor(props) {
        super(props);

        const actionId = this.props.navigation.getParam('actionId', null);

        this.state = {
            actionId,
            isLoading: true
        };
    }

    componentDidMount() {
        const data = new FormData();
        data.append('id', this.state.actionId);

        axios.post(Api.forth_page_endpoint,
            data,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then((response) => {
            console.log(response.data);
            this.setState({ officeData: response.data[0], isLoading: false });
        })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={Colors.statusBarColor} />
                
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Loading...'}
                />
                {this.state.officeData &&
                    <Office
                        office={this.state.officeData}
                    />
                }

            </SafeAreaView>
        );
    }
}

export default OfficeScreen;

// <StatusBar backgroundColor="#ccbb53" />
