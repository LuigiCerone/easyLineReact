import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { withNavigation } from 'react-navigation';

import { Colors } from '../constants';

class Office extends Component {
    render() {
        const { office } = this.props;
        let tableHead = [''];
        let tableDataStart = [];
        for (let i = 0; i < office.timetable.length; i++)
            {
            tableHead = tableHead.concat(office.timetable[i].weekday);
            //tableDataStart = tableDataStart.concat(office.timetable[i].start);
            }
        let tableTitle = ['Apertura'];
        return (
            <View>
                <Text>{office.name}</Text>
                <Table>
                    <Row data={tableHead} flexArr={[1, 1, 2, 1, 1, 1]} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                        <Rows data={tableDataStart} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        );
    }
}

// {
//     office &&
//     <View style={styles.containerStyle}>
//         <Text>{office.name}</Text>
//     </View>
// }
const styles = {
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' },

    containerStyle: {
        borderColor: Colors.border,
        borderWidth: 1,
        padding: 20,
        notSelected: {
            backgroundColor: Colors.white
        },
        selected: {
            backgroundColor: Colors.bg_floor
        }
    },
    containerItemStyle: {
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
    }
    // containerDescriptionStyle: {
    //     padding: Size.padding,
    // },
    // imageStyle: {
    //     marginLeft: Size.margin,
    //     marginRight: Size.margin,
    //     width: 45,
    //     height: 45
    // },
    // textStyle: {
    //     fontSize: Size.t_2_size,
    //     fontWeight: '800',
    //     lineHeight: Size.t_2_size,
    //     color: Colors.t_1_color
    // }
};

export default withNavigation(Office);
