import { connect } from 'react-redux';
import BookDetail from '../components/book_detail';


function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

