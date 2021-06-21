// reducer

const { INC_COUNTER, DEC_COUNTER } = require('../action-types');

const initialState = { counter: 0 }

module.exports = (state = initialState, action) => {
  switch(action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}