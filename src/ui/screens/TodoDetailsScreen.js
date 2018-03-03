import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Colors from "../../app_assets/colors";
import {
    Body,
    List,
    ListItem,
    Button,
    Container,
    Content,
    Card,
    Icon,
    CheckBox,
    Input,
    Item,
    Fab,
} from 'native-base';
import AppStyles from "./../../app_assets/app_styles"
import App from "../../../App";

const datas = [
    'App Design',
    'Client meeting',
    'Release a build',
];

export default class TodoDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            listViewData: datas,
        }
    }

    //  hide toolbar/header
    static navigationOptions = {
        header: null,
    };

    addNewChecklistItem(newTask) {
        let newData = [...this.state.listViewData];
        newData.push(newTask);
        // newData.push('yo');
        this.setState({listViewData: newData});
    }

    render() {
        let newTask = '';
        return (
            <Container style={styles.viewContainer}>
                <Content>
                    <Text style={styles.textTitle}> To do </Text>
                    <Text style={styles.textDate}> March 4, 2018 08:00PM </Text>
                    <View style={styles.viewDivider}/>

                    <List dataArray={this.state.listViewData}
                          style={{marginBottom: 82}}
                          renderRow={(data) =>
                              <ListItem>
                                  <CheckBox
                                      color= {Colors.colorAccent}
                                      // value={this.state.pressed}
                                      // onValueChange={() => this.setState({ pressed: !this.state.pressed })}
                                      // onPress={this.setState({ pressed: !this.state.pressed })}
                                      checked={this.state.pressed}
                                  />
                                  <Body>
                                  <Text style={styles.textCheckbox}>{data}</Text>
                                  </Body>
                              </ListItem>
                          }/>
                </Content>

                <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', bottom: 0,}}>
                    {/*   <TextInput
                            ref={input => {
                                this.textInputMax = input
                            }}
                            style={styles.textInput}
                            // multiline={  false}
                            autoCorrect={true}
                            // keyboardType="numeric"
                            placeholder="Add note"
                            placeholderTextColor={Colors.grey}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => newTask = text}
                        />*/}
                    <Item rounded
                          style={styles.textInput}>
                        <Input
                            ref={input => {
                                this.textInputMax = input
                            }}
                            placeholder="Add note"
                            placeholderTextColor={Colors.grey}
                            onChangeText={(text) => newTask = text }
                        />
                    </Item>

                    <Fab
                        containerStyle={{ }}
                        style={{ backgroundColor: Colors.colorAccent }}
                        position="bottomRight"
                        onPress= {() => {
                            let newData = [...this.state.listViewData];
                            newData.push(newTask);
                            this.setState({listViewData: newData});
                        }
                        }>
                        <Icon name="add" />
                    </Fab>
                </View>
            </Container>
        );
    }

    onCheckBoxPress() {
        console.log(this);
        this.setState({checked: !this.state.checked});
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    viewDivider: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: 0.8,
        marginTop: 16,
        marginBottom: 16,
    },
    viewCheckbox: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
    },
    viewAddMore: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 24,
    },
    textTitle: {
        fontSize: 30,
        color: Colors.colorAccent,
        margin: 16,
    },
    textDate: {
        color: Colors.grey,
        marginLeft: 24,
    },
    textCheckbox: {
        marginLeft: 20
    },
    textInput: {
        // fontSize: 13,
        flex: 1,
        // padding: 0,
        paddingLeft: 24,
        marginLeft: 12,
        marginRight: 84,
        borderWidth: 2,
        borderColor:'rgba(0,0,0,0.2)',
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 100,
        zIndex: 15,
        bottom: 24,
    },
    textAddMore: {
        fontSize: 18,
        color: Colors.colorAccent
    },


});