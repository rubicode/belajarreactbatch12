import React, {Component} from 'react';
import Item from './ItemActive';
import { connect } from 'react-redux';
import { loadData } from '../actions';

class ListItem extends Component {

  componentDidMount(){
    this.props.loadData();
  }

  render(){
    console.log(this.props.data);
    const nodes = this.props.data.map((item, index)=>{
      return (
        <Item
        key={index}
        todo={{...item}}
         />)
      })
      return(
        <ul>
        {nodes}
        </ul>
      )
    }
  }

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
