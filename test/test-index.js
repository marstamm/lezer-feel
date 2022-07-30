import {
  normalizeContext,
  parser,
  trackVariables
} from 'lezer-feel';

import {
  expect
} from 'chai';


describe('lezer-feel', () => {

  it('should parse', () => {

    // then
    parser.parse('foo');
  });


  it('should configure with context', () => {

    // given
    const tracker = trackVariables({
      '+': 1
    });

    // when
    const configuredParser = parser.configure({
      contextTracker: tracker
    });

    // then
    configuredParser.parse('+');
  });


  it('should normalize context', () => {

    // given
    const context = {
      '+++': 1
    };

    // when
    const normalizedContext = normalizeContext(context);

    // then
    expect(normalizedContext).to.have.property('+ + +', 1);
  });

});