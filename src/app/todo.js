import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Button, FormLabel, FormInput, Grid, Row,Col } from 'react-native-elements';
import { connect } from 'react-redux';

import { styles } from './styles';

import { Reddit } from './Reddit';

export class Todo extends Component {
  constructor() {
    super();

    this.state = {
      editItem: '',
      value: '',
      items: []
    }
  }

  handleClick() {
    let newItem = this.refs.forminput.refs.task._lastNativeText;
    fetch(
      'http://localhost:3000/todos', {
      method: 'post', 
      body: JSON.stringify({
        name: newItem
      }),
      headers: { 
        'Content-Type': 'application/json'
      } 
    })
      .then(res => res.json())
      .then( data => {
        this.setState({items: [...this.state.items, data]});
      })
      .catch( err => console.log(err.stack));
    
    this.refs.forminput.refs.task.clear();
  }

  handleStartEdit(item){
    this.setState({editItem: item});
  }

  componentWillMount() {
    fetch({ 
      url: 'http://localhost:3000/todos', 
      method: 'get', 
      headers: { 
        'Content-Type': 'application/json'
      } 
    }).then( res => res.json())
      .then( data =>  {
        console.log(`fetching data: ${JSON.stringify(data)}`);
        this.setState({items: data});
      });
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
          <Reddit />
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
            <Text style={styles.item}> {item.name} </Text>
          )}/>
        </Row>
      </Grid>
    );
  }
}

