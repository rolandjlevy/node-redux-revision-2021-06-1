const { incCounter, decCounter } = require('./index.js');
const { INC_COUNTER, DEC_COUNTER } = require('../action-types');

describe('Testing action creators', () => {
  
  test('should return actions', () => {
    const inc = incCounter();
    expect(inc).toEqual({ type: INC_COUNTER });
    const dec = decCounter();
    expect(dec).toEqual({ type: DEC_COUNTER });
  });
  
});