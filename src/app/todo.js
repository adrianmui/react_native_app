import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';
import { Button, FormLabel, FormInput, Grid, Row,Col } from 'react-native-elements';

export class Todo extends Component {
  constructor() {
    super();

    this.state = {
      editItem: '',
      value: '',
      items: ['task #1', 'task #2', 'task #3']
    }
  }

  handleClick() {
    let items = [...this.state.items, this.refs.forminput.refs.task._lastNativeText];
    this.setState({items: items});
    this.refs.forminput.refs.task.clear();
  }

  handleStartEdit(item){
    this.setState({editItem: item});
  }

  render() {
    return (
      <Grid>
        <Row size={1}>
          <View style={{ flex: 1, backgroundColor: '#397af8' }}>
            <View
              style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ color: 'white' }}>Todo App w/ React Native</Text>
            </View>
          </View>
        </Row>

        <Row size={0.5}>
        </Row>

        <Row size={2}>
          <Col size={6}>
            <FormLabel>Task</FormLabel>
            <FormInput
              ref='forminput'
              textInputRef='task'
            />
          </Col>
          <Col size={4}>
          <Button
            raised
            icon={{name: 'cached'}}
            backgroundColor='#397af8'
            title='Submit' 
            onPress={this.handleClick.bind(this)}/>
          </Col>
        </Row>

        <Row size={6.5}>
          <FlatList
          style={{ marginLeft: 20}}
          data={this.state.items}
          renderItem={({item}) => (
            <Text style={{ marginBottom: 5 }}> {item} </Text>
          )}/>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});