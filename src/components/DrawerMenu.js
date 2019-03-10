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
                        //source={Images.univaqLogo}
                        source={Images.easyLineLogo}
                        style={styles.logoImage}
                    />
                    <Text style={styles.accessHeader}>Accesso EasyLine</Text>
                    <Text style={styles.accessText}>
                        Accedi con le credenziali della segreteria virtuale Univaq
                    </Text>
                </View>
                <View>
                    <Input
                        //inputStyle={styles.labelStyle}
                        placeholderTextColor='#fff'
                        placeholder='Username'
                        textAlign='center'
                        //leftIcon={{ type: 'font-awesome', name: 'user', color: '#fff' }}
                    />
                    <Input
                        //inputStyle={styles.labelStyle}
                        placeholderTextColor='#fff'
                        placeholder='Password'
                        textAlign='center'
                        //leftIcon={{ type: 'font-awesome', name: 'key', color: '#fff' }}
                    />
                    <Button
                        buttonStyle={styles.loginButton}
                        title='Accedi'
                        color='#6b1819'
                    />
                </View>
                <Text style={styles.recoverPassword}>Recupera Password</Text>
            </View>
        );
    }
}

const styles = {
    drawerMenu: {
        backgroundColor: '#822627',
        height: '100%'
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
        marginTop: 20,
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100
    },
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
    //inputStyle: {
    //    color: '#fff'
    //},
    loginButton: {
        color: '#6b1819'
    },
    recoverPassword: {
        fontSize: 15,
        margin: 20,
        color: '#fff',
        textAlign: 'right'
    }
};

export default DrawerMenu;
