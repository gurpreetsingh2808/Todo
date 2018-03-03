import React from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native';
import {Container, Button, Icon, Content, Header, List, ListItem, Card, Fab} from 'native-base';
import Colors from "../../app_assets/colors";
import AppStyles from "./../../app_assets/app_styles"

const datas = [
    'Simon Mignolet',
    'Nathaniel Clyne',
    'Dejan Lovren',
    'Mama Sakho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
    'Alan Baldwin',
    'Erlich Bachman',
    'Peter Gregory',
    'Gilfoyle',
    'Richard Hendricks'
];

export default class TodoListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({listViewData: newData});
    }

    gotoTodoDetails() {
        this.props.navigation.navigate('TodoDetailsScreen')
    }


    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <Container>
                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem onPress={ this.gotoTodoDetails.bind(this) }>
                                <Text> {data} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle"/>
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash"/>
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>


                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: Colors.colorAccent }}
                    position="bottomRight"
                    onPress= { this.gotoTodoDetails.bind(this) }>
                    <Icon name="add" />
                </Fab>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
