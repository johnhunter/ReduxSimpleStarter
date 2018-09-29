import axios from 'axios';
import {
  FETCH_POST,
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST
} from './types';

const ROOT_URL = '	http://reduxblog.herokuapp.com/api';
const API_KEY = 'jlh-83639';

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  return (dispatch) => {
    request.then((payload) => {
      dispatch({ type: FETCH_POSTS, payload });
    });
  }
}

export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);
  return (dispatch) => {
    request.then((payload) => {
      dispatch({ type: FETCH_POST, payload });
    });
  }
}

export function createPost (values, callback) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values);
  return (dispatch) => {
    request.then((payload) => {
      dispatch({ type: CREATE_POST, payload });
      callback();
    });
  };
}

export function deletePost (id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);
  return (dispatch) => {
    request.then(() => {
      dispatch({ type: DELETE_POST, payload: id });
      callback();
    });
  };
}
