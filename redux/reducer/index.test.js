const reducer = require('./index.js');
const { INC_COUNTER, DEC_COUNTER } = require('../action-types');

const action = { type: INC_COUNTER }
const initialState = { counter: 0 };

test('should return various states', () => {
  const inc = reducer({ counter: 0 }, { type: INC_COUNTER });
  expect(inc.counter).toBe(1);
  const dec = reducer({ counter: 5 }, { type: DEC_COUNTER });
  expect(dec.counter).toBe(4);
  const def = reducer({ counter: 0 }, { type: null });
  expect(def.counter).toBe(0);
});

test('should return the initial state', () => {
  let result = reducer(undefined, {});
  expect(result).toEqual({ counter: 0 });
})