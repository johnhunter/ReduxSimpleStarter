
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';
import BookList from '../components/book_list';


function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// mapDispatchToProps returns props to BookList container
function mapDispatchToProps(dispatch) {
  // bindActionCreators: when actionCreator called, will pass returned state to dispatch
  // hence passed to all reducers.
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList to connected container and make selectBook available as a prop
// TODO review docs for connect for use strategies
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
