/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, FormLabel, FormInput, Grid, Row,Col, List, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

export default class react_native_app extends Component {
  constructor() {
    super();

    this.state = {
      editItem: '',
      value: '',
      items: ['task #1', 'task #2', 'task #3']
    }
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
                textInputRef='email'   
            />
          </Col>
          <Col size={4}>
          <Button
            raised
            icon={{name: 'cached'}}
            backgroundColor='#397af8'
            title='Submit' />
          </Col>
        </Row>

        <Row size={6.5}>
          <List>
          {
            this.state.items.map((l, i) => (
              <ListItem
                roundAvatar
                key={i}
                style={{ width: 375 }}
                containerStyle={{ borderBottomWidth: 1}}
                title={l}
              />
            ))
          }
          </List>
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

AppRegistry.registerComponent('react_native_app', () => react_native_app);
