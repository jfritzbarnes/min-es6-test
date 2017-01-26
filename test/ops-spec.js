import Operations from '../src/operations';

class MockSquare {
  getName() { return 'mocked'; }
}

describe('Operations', () => {
  it('ops rewired', () => {
    Operations.__Rewire__('Square', MockSquare);

    let o = new Operations();
    expect(o.getOps()).toContain('mocked');
  });
});
