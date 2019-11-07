import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Item(props) {
  return <View style={styles.item}>
  <Text style={styles.authorHeader}>
  {props.todo.task}
  <Button onPress={props.todo.sent ? props.onDelete : props.resend} title={props.todo.sent ? 'x' : 'resend'} />
  </Text>
  {!props.todo.sent &&
        <Text style={styles.networkError}>
          network failed, please check your connections
        </Text>
      }
  </View>;
}

const styles = StyleSheet.create({
  networkError: {
    color: "red",
    fontSize: 8
  },
  authorHeader: {
    color: "green",
    fontSize: 12
  },
  message: {
    fontSize: 10
  },
  item: {
    padding: 10,
    height: 44,
  }
});

export default Item;
