// action creators

const { INC_COUNTER, DEC_COUNTER } = require('../action-types');

const incCounter = () => ({ type: INC_COUNTER });
const decCounter = () => ({ type: DEC_COUNTER });

module.exports = {
  incCounter,
  decCounter
}