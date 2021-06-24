const reducer = require('./index.js');
const { INC_COUNTER, DEC_COUNTER } = require('../action-types');

const action = { type: INC_COUNTER }
const initialState = { counter: 0 };

test('Reducer returns updated state', () => {
  let result = reducer({ counter: 0 }, { type: INC_COUNTER });
  expect(result.counter).toBe(1);
  result = reducer({ counter: 5 }, { type: DEC_COUNTER });
  expect(result.counter).toBe(4);
  result = reducer({ counter: 0 }, { type: null });
  expect(result.counter).toBe(0);
});