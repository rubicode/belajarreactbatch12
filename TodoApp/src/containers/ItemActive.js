import { connect } from 'react-redux'
import { deleteData, resendData } from '../actions'
import Item from '../components/Item'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteData(ownProps.todo)),
  resend: () => dispatch(resendData(ownProps.todo.id, ownProps.todo.task))
})

export default connect(
  null,
  mapDispatchToProps
)(Item)
