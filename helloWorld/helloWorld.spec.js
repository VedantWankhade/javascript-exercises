const helloWorld = require('./helloWorld');

describe('helloWorld', function() {
  it('should give hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
