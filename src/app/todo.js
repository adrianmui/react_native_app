import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList } from 'react-native';
import { Button, FormLabel, FormInput, Grid, Row,Col } from 'react-native-elements';

import { styles } from './styles'

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
          <View style={styles.header}>
            <View style={styles.wrapper}>
              <Text style={styles.text_white}>Todo App w/ React Native</Text>
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
          style={styles.list}
          data={this.state.items}
          renderItem={({item}) => (
            <Text style={styles.item}> {item} </Text>
          )}/>
        </Row>
      </Grid>
    );
  }
}

