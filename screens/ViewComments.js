import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { db } from '../config.js';

let commentsData = db.ref('/Comment')
export default class ViewComment extends React.Component {
  state = {
    items : []
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount(){
    commentsData.on('value', (data) => {
      let items = Object.values(data.val());
      this.setState({items});
    });
  }
  render() {
    console.log(this.state.items);
    return (
      <View style={styles.itemsList}>
      {this.state.items.map((item, index) => {
            return (
                <ScrollView key={index}>
                    <Text style={styles.itemtext}>Comment made by User: {item.userid}</Text>
                    <MonoText>created on {item.createDate}</MonoText>
                    <Text style={styles.itemcom}>{item.text}</Text>

                </ScrollView>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
  },
  itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  itemcom: {
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'stretch'
}
});
