import React, {Component} from 'react';
import Item from './ItemActive';
import { connect } from 'react-redux';
import { loadData } from '../actions';
import {FlatList, StyleSheet, Text, View} from 'react-native';

class ListItem extends Component {

  componentDidMount(){
    this.props.loadData();
  }

  render(){
      return(
        <View style={styles.container}>
        <FlatList
        data={this.props.data}
        renderItem={({item}) => <Item
        key={item.id.toString()}
        todo={{...item}}
        />}
        />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    }
  })

  const mapStateToProps = (state) => ({
    data: state.todos
  })

  const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadData())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItem)
