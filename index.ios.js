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

export default class react_native_app extends Component {
  render() {
    return (
      
      <Grid>
        <Row size={10}>
          <View style={{ flex: 1, backgroundColor: '#397af8' }}>
            <View
              style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ color: 'white' }}>Todo App w/ React Native</Text>
            </View>
          </View>
        </Row>
        <Row size={5}>
        </Row>
        <Row size={30}>
          <Col size={60}>
            <FormLabel>Task</FormLabel>
            <FormInput
                ref='forminput'
                textInputRef='email'   
            />
          </Col>
          <Col size={40}>
          <Button
            raised
            icon={{name: 'cached'}}
            backgroundColor='#397af8'
            title='Submit' />
          </Col>
        </Row>
        <Row size={55}>
          {/*<List containerStyle={{marginBottom: 20}}>
            {
              this.state.items.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.name}
                />
              ))
            }
          </List>*/}
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
