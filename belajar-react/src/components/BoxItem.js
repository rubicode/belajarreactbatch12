import React from 'react';
import ListItem from '../containers/ListItem';
import FormItem from '../containers/FormItem';
// import io from 'socket.io-client';
//
//
//
// const socket = io('http://localhost:3001');



export default class BoxItem extends React.Component {

render() {
    return (
      <div>
      <h1>TODO</h1>
      <ListItem />
      <FormItem />
      </div>
    );
  }
}
