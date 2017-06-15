import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, FormLabel, FormInput, Grid, Row,Col } from 'react-native-elements';
import { connect } from 'react-redux';

import { ADD_POST } from './reducers';

const _Reddit = props => (
  <View>
    { 
      props.data.map( post => 
      <Text> {post.name} </Text> )
    }
    <Button title="add post" onPress={props.addRedditPost}></Button>
  </View>
)

const mapStateToProps = state => ({
  data: state.reddit
});

const mapActionToProps = dispatch => ({
  addRedditPost() {
    let post = { name: 'newpost '};
    dispatch({type: ADD_POST, payload: post})
  }
});

export const Reddit = connect(mapStateToProps, mapActionToProps)(_Reddit);

// export class Reddit extends Component {
//   constructor() {
//     super();
//     this.state = { data: [

//     ]};
//   }

//   logger() {
//     console.log(this.state.data);
//     debugger;
//   }

//   render() {
//     return (
//       <Grid>
//         <Row></Row>
//         <Row size={0.5}>
//           <View>
//             <Text> Reddit/r/nba </Text>
            
//             <Button
//               raised
//               icon={{name: 'cached'}}
//               backgroundColor='#397af8'
//               title='logger' 
//               onPress={this.logger.bind(this)}/>
//           </View>
//         </Row>
//         <Row size={7.5}>
//           { this.state.data.map(post => 
//             <View>
//               <Text>
//                 {post.data.author || 's'} {"\n"}
//               </Text> 
//             </View>)
//           }
//         </Row>
//       </Grid>
//     );
//   }

//   componentWillMount() {
//     fetch('https://www.reddit.com/r/nba/.json', { Accept: 'application/json' })
//       .then(res => res.json())
//       .then(data => {
//         console.log('fetching data'); 
//         this.setState({data: data.data.children})
//       });
//       // .then(data => console.log(data.data.children));
//   }
  
// }
