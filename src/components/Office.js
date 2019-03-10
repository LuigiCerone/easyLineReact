import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
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
    }

};

export default withNavigation(Office);
