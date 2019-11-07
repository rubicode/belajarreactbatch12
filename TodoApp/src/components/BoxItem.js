import React from 'react';
import ListItem from '../containers/ListItem';
import FormItem from '../containers/FormItem';
import {TouchableOpacity, Button, StyleSheet, Text, View} from 'react-native';



export default class BoxItem extends React.Component {

render() {
    return (
      <View style={styles.commentBox}>
      <Text style={styles.headerBox}>TODO</Text>
      <ListItem />
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>
      <Text>Tulis Todo</Text>
          </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentBox: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    margin: 4,
    borderColor: "grey",
    backgroundColor: "white"
  },
  headerBox: {
    fontSize: 20,
    color: "brown"
  }
});
