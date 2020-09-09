const removeFromArray = require('./removeFromArray')

describe('removeFromArray', function() {
  it('removes a single value in [1, 2, 3, 4], 3', function() {
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('removes multiple values [1, 2, 3, 4], 3, 2', function() {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  it('ignores non present values [1, 2, 3, 4], 7, "tacos"', function() {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  it('ignores non present values, but still works [1, 2, 3, 4], 7, 2', function() {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  it('can remove all values [1, 2, 3, 4], 1, 2, 3, 4', function() {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  it('works with strings ["hey", 2, 3, "ho"], "hey", 3', function() {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  it('only removes same type [1, 2, 3], "1", 3', function() {
    expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
  });
});
