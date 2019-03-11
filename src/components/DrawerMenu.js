import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { Button, Icon, Input, Header } from 'react-native-elements';

import Images from '../assets/images';
import { Colors } from '../constants';

class DrawerMenu extends Component {
    render() {
        return (
            <ScrollView
                //style={[styles.drawerMenu, { backgroundColor: this.props.backgroundColor }]}
                style={styles.drawerMenu}
                forceInset={{ top: 'always', horizontal: 'never' }}
            >
                <SafeAreaView>
                    {/*<Text style={[styles.header, { borderColor: this.props.borderColor }]}>EasyLine</Text>*/}
                    {/*<Header
                        backgroundColor='transparent'
                        containerStyle={{ borderColor: '#000' }}
                        leftComponent={
                            <Button
                                onPress={() => this.props.navigation.toggleDrawer()}
                                buttonStyle={styles.headerButton}
                                icon={<Icon name="keyboard-arrow-left" color="#fff" /> }
                            />
                        }
                        centerComponent={{ text: 'EasyLine', style: { color: '#fff', fontSize: 20 } }}
                    />*/}

                    <View style={styles.headerContainer}>
                        <Button
                            onPress={() => this.props.navigation.toggleDrawer()}
                            buttonStyle={styles.headerButton}
                            icon={<Icon name="keyboard-arrow-left" color="#fff" />}
                        />
                        <Text style={styles.headerText}>EasyLine</Text>
                    </View>
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
                            //color={this.props.buttonColor}
                        />
                    </View>
                    <Text style={styles.recoverPassword}>Recupera Password</Text>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = {
    drawerMenu: {
        backgroundColor: Colors.drawerColor,
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#6b1819',
    },
    headerText: {
        width: '100%',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    headerButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        bottom: 0,
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
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 0,
        backgroundColor: Colors.statusBarColor
    },
    recoverPassword: {
        fontSize: 15,
        marginTop: 20,
        marginRight: 10,
        color: '#fff',
        textAlign: 'right'
    }
};

export default DrawerMenu;
