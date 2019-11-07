import React from 'react';
import { connect } from 'react-redux';
import { addData  } from '../actions';
import {TextInput, Button, StyleSheet, Text, View} from 'react-native';

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    console.log('ini adalah value', value);
    this.setState({value: value});
  }

  handleSubmit() {
    this.props.addData(this.state.value)
    this.setState({value: ''});
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View  style={{padding: 10, flex: 1}}>
      <Button
      title="Go back"
      onPress={() => this.props.navigation.goBack()}
      />
      <TextInput style={{height: 40}} placeholder="masukkan judul kerjaan" onChangeText={this.handleChange} />
      <Button onPress={this.handleSubmit} title="Kirim" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addData: (task) => dispatch(addData(task)),
})

export default connect(
  null,
  mapDispatchToProps
)(FormItem)
