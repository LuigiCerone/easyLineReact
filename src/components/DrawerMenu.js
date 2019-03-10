import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Input } from 'react-native-elements';

import Images from '../assets/images';

class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.drawerMenu}>
                <Text style={styles.header}>EasyLine</Text>
                <View style={styles.logoContainer}>
                    <Image
                        source={Images.easyLineLogo}
                        style={styles.logoImage}
                    />
                    <Text style={styles.accessHeader}>Accesso EasyLine</Text>
                    <Text style={styles.accessText}>
                        Accedi ai servizi Univaq con il tuo account provvisorio
                    </Text>
                    <Input
                        inputStyle={styles.labelStyle}
                        placeholderTextColor='#fff'
                        placeholder='Username'
                        textAlign='center'
                        //leftIcon={{ type: 'font-awesome', name: 'user', color: '#fff' }}
                    />
                </View>
                <Input
                    inputStyle={styles.labelStyle}
                    placeholderTextColor='#fff'
                    placeholder='Password'
                    textAlign='center'
                    //leftIcon={{ type: 'font-awesome', name: 'key', color: '#fff' }}
                />
                <Button
                    buttonStyle={styles.loginButton}
                    title='Login'
                    color='#6b1819'
                />
            </View>
        );
    }
}

const styles = {
    drawerMenu: {
        backgroundColor: '#822627',
        flex: 1
    },
    header: {
        width: '100%',
        padding: 15,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#6b1819'
    },
    logoContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    logoImage: {},
    accessHeader: {
        fontWeight: 'bold',
        color: '#fff',
        padding: 15,
        fontSize: 20
    },
    accessText: {
        color: '#fff',
        fontSize: 18,
        padding: 15,
        marginBottom: 20,
        fontWeight: '200',
        textAlign: 'center'
    },
    inputStyle: {
        color: '#fff'
    },
    loginButton: {
        color: '#6b1819'
    }
};

export default DrawerMenu;
