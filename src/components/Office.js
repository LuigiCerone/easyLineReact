import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { Colors } from '../constants';

class Office extends Component {
    render() {
        const { office } = this.props;
        const week =
        {
            1: 'Lunedì',
            2: 'Martedì',
            3: 'Mercoledì',
            4: 'Giovedì',
            5: 'Venerdì'
        };

        // Sort the weekday taken form the REST endpoint.
        office.timetable = office.timetable.sort((a, b) => a.weekday - b.weekday);

        const tableTitle = ['Apertura', 'Chiusura'];
        let tableHead = ['Orari'];
        let tableDataStart = [];
        let tableDataEnd = [];
        const tableData = [[], []];
        for (let i = 0; i < office.timetable.length; i++) {
            tableHead = tableHead.concat(week[office.timetable[i].weekday]);
            tableDataStart = tableDataStart.concat(office.timetable[i].start.substring(0, 5));
            tableDataEnd = tableDataEnd.concat(office.timetable[i].end.substring(0, 5));
        }
        tableData[0] = tableData[0].concat(tableDataStart);
        tableData[1] = tableData[1].concat(tableDataEnd);
        return (
            <View>
                <Text style={styles.textTitle}>{office.name} </Text>
                <Text style={styles.textTitle}>Email: {office.email} </Text>
                <Table style={styles.tab}>
                    <Row data={tableHead} style={styles.tabHead} textStyle={styles.tabText} flexArr={[1, 1, 1, 1, 1, 1]} />
                    <TableWrapper style={styles.tabWrapper}>
                        <Col data={tableTitle} heightArr={[28, 28]} textStyle={styles.tabText} style={styles.tabHead} />
                        <Rows data={tableData} flexArr={[1, 1, 1, 1, 1]} style={styles.tabRow} textStyle={styles.tabText} />
                    </TableWrapper>
                </Table>
                <Card
                    containerStyle={{ borderRadius: 20 }}
                    title='Prenotazione ticket'
                >
                    <Text>Qui puoi avere informazioni sulla coda attuale della segreteria.</Text>
                    <View style={styles.infoLineContainer}>
                        <Text>Persone in coda: {office.ticket_waiting}</Text>
                        <Text>Ultimo ticket servito: {office.ticket_lastserved}</Text>
                        <Text>Ultimo ticket emesso: {office.ticket_lastemitted}</Text>
                    </View>
                    <Button
                        //backgroundColor={Colors.statusBarColor}
                        buttonStyle={styles.buttonStyle}
                        title='Prenota ticket'
                    />
                </Card>
            </View>
        );
    }
}

const styles = {
    tab: {
        margin: 10
    },
    tabHead: {
        height: 60,
        backgroundColor: Colors.tabHead
    },

    tabWrapper: {
        flexDirection: 'row'
    },
    tabTitle: {
        padding: 10,
        backgroundColor: Colors.tabTitle
    },
    tabRow: {
        height: 28
    },
    tabText: {
        textAlign: 'center'
    },
    textTitle: {
        padding: 10,
        fontSize: 18,
        color: '#000000'
    },
    containerStyle: {
        borderColor: Colors.border,
        borderWidth: 1,
        padding: 20,
    },
    containerItemStyle: {
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 0,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: Colors.statusBarColor
    },
    infoLineContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1
    }
};

export default withNavigation(Office);
