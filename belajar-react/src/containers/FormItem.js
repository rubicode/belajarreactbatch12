import React from 'react';
import { connect } from 'react-redux';
import { addData  } from '../actions';

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addData(this.state.value)
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="masukkan judul kerjaan"/>
        <button type="submit">tambah</button>
      </form>
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
