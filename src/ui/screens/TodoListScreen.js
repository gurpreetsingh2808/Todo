import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity, Dimensions} from 'react-native';
import {Container, Button, Icon, Content, Header, List, ListItem, Card, Fab} from 'native-base';
import Colors from "../../app_assets/colors";
import {responsive, MediaQuery, ResponsiveStyleSheet} from "react-native-responsive-ui";
import TodoDetailsComponent from "./TodoDetailsScreen";
import * as TodoService from "../../service/todo/todoService";

const datas = [
    'Work',
    'Personal',
    'Archive',
];

// @responsive
export default class TodoListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            basic: true,
            listViewData: datas,
            results: []
        };

        TodoService.getAllTodos()
            .then((responseJson) => {
                console.log("RESPONSE FROM API " + responseJson.data);
                this.setState({ results: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /*
        state = Dimensions.get("window");
        handler = dims => this.setState(dims);

        componentWillMount() {
            Dimensions.addEventListener("change", this.handler);
        }

        componentWillUnmount() {
            // Important to stop updating state after unmount
            Dimensions.removeEventListener("change", this.handler);
        }
    */

    deleteRow(todoId, secId, rowId, rowMap) {
        TodoService.deleteTodo(todoId)
            .then((responseJson) => {
                console.log("RESPONSE FROM API " + responseJson.data);
                rowMap[`${secId}${rowId}`].props.closeRow();
                const newData = [...this.state.results];
                newData.splice(rowId, 1);
                this.setState({results: newData});
            })
            .catch((error) => {
                console.error(error);
            });

    }


    render() {
        // const {width, height} = this.state.window;
        // const mode = height > width ? "portrait" : "landscape";
        // console.log(`New dimensions ${width}x${height} (${mode})`);
        //  getting responsive styles
        const responsiveStyle = this.getStyle();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <Container>
                <Content>
                    <View style={responsiveStyle.direction}>
                        <List
                            dataSource={this.ds.cloneWithRows(this.state.results)}
                            renderRow={data =>
                                <ListItem onPress={() => {
                                    // this.props.navigation.navigate('TodoDetailsComponent', {});
                                    this.props.navigation.navigate('TodoDetailsScreen');
                                }
                                }
                                >
                                    <Text> {data.title} </Text>
                                </ListItem>}
                            renderLeftHiddenRow={data =>
                                <Button full onPress={() => alert(data)}>
                                    <Icon active name="information-circle"/>
                                </Button>}
                            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                                <Button full danger onPress={_ => this.deleteRow(data.id, secId, rowId, rowMap)}>
                                    <Icon active name="trash"/>
                                </Button>}
                            leftOpenValue={75}
                            rightOpenValue={-75}
                        />
                        {/*<MediaQuery minWidth={450} orientation="landscape">*/}
                        {/*<TodoDetailsComponent />*/}
                        {/*</MediaQuery>;*/}
                    </View>
                </Content>


                <Fab
                    containerStyle={{}}
                    style={{backgroundColor: Colors.colorAccent}}
                    position="bottomRight"
                    onPress={this.props.navigation.navigate('TodoDetailsScreen')}>
                    <Icon name="add"/>
                </Fab>
            </Container>
        );
    }

    getStyle() {
        return ResponsiveStyleSheet.select([{
            query: {orientation: "landscape"},
            style: {
                direction: {
                    flexDirection: "row"
                },
            }
        }, {
            query: {orientation: "portrait"},
            style: {
                direction: {
                    flexDirection: "column"
                },
            }
        }]);
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
