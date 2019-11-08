import React from 'react';

function Item(props) {
  return <li>
  <h4>
  {props.todo.task}
  <button type="button" onClick={props.todo.sent ? props.onDelete : props.resend}>{props.todo.sent ? 'x' : 'resend'}</button>
  </h4>
  {!props.todo.sent &&
        <p style={{color: "red", fontSize: "8px"}}>
          network failed, please check your connections
        </p>
      }
  </li>;
}

export default Item;
