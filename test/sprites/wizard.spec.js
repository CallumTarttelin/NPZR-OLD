import {expect} from 'chai';
import {foo as rules} from '../../src/logic/rules';

describe('wizard', () => {
  it('should do stuff', () => {
    expect(rules('foo')).to.equal('bar');
  });
  it('should do stuff', () => {
    expect(rules('bar')).to.equal('foo');
  });
});
