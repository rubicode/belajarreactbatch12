import {
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  ADD_DATA,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  DELETE_DATA,
  DELETE_DATA_FAILURE,
  DELETE_DATA_SUCCESS
} from '../constants/actionTypes';

import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});

const loadDataSuccess = (todos) => {
  return {type: LOAD_DATA_SUCCESS, todos}
}

const loadDataFailure = () => {
  return {type: LOAD_DATA_FAILURE}
}

export const loadData = () => {
  return dispatch => {
    return request.get('todos')
    .then(function (response) {
      dispatch(loadDataSuccess(response.data.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(loadDataFailure())
    });
  }
}

// add todo start

export const addDataSuccess = (todo) => ({
  type: ADD_DATA_SUCCESS,
  todo
})

export const addDataFailure = (id) => ({
  type: ADD_DATA_FAILURE, id
})

const addDataRedux = (id, task) => ({
  type: ADD_DATA, id, task
})


export const addData = (task) => {
  let id = Date.now();
  return dispatch => {
    dispatch(addDataRedux(id, task))
    return request.post('todos', {id, task})
    .then(function (response) {
      dispatch(addDataSuccess(response.data.itemAdded))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(addDataFailure(id))
    });
  }
}

// add todo end

// start delete todo

const deleteDataRedux = (id) => ({
  type: DELETE_DATA, id
})

export const deleteDataSuccess = (todo) => ({
  type: DELETE_DATA_SUCCESS,
  todo
})

export const deleteDataFailure = (todo) => ({
  type: DELETE_DATA_FAILURE,
  todo
})


export const deleteData = (todo) => {
  return dispatch => {
    dispatch(deleteDataRedux(todo.id))
    return request.delete(`todos/${todo.id}`)
    .then(function (response) {
      dispatch(deleteDataSuccess(response.data.itemDeleted))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(deleteDataFailure(todo))
    });
  }
}

// end delete comment data

const resendDataSuccess = (todos) => ({
  type: 'RESEND_DATA_SUCCESS',
  todos
})

export const resendData = (id, task) => {
  return dispatch => {
    return request.post('todos/resend', {id, task})
    .then(function (response) {
      dispatch(resendDataSuccess(response.data.todos))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(addDataFailure(id))
    });
  }
}
