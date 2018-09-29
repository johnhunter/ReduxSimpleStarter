import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return mapKeys(action.payload.data, 'id');
  case FETCH_POST:
    const post = action.payload.data;
    return { ...state, [post.id]: post };
  case DELETE_POST:
    const id = action.payload
    return omit(state, id);
  default:
    return state;
  }
}

// no point in using lodash
function omit (obj, key) {
  const clone = { ...obj };
  delete clone[key];
  return clone;
}

function mapKeys (arr, name) {
  return arr.reduce((acc, item) => {
    if(item[name]) {
      acc[item[name]] = item;
    }
    return acc;
  }, {});
}
