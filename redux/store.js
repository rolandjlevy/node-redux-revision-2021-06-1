const { createStore, applyMiddleware } = require('redux');
const { axios } = require('axios');
const { logger } = require('redux-logger');
const thunk = require('redux-thunk').default;

const { INC_COUNTER, DEC_COUNTER } = require('./action-types');
const { incCounter, decCounter } = require('./action-creators');
const reducer = require('./reducer');

module.exports = {
  store: createStore(reducer, applyMiddleware(logger)),
  incCounter,
  decCounter
}