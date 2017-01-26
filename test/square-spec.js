import Square from '../src/square';

describe('Square', () => {

 it('without rewiring', () => {
   let square = new Square();
   let sum = square.square(4);

   expect(sum).toBe(16);
 });

 class MockCalculator {
   multiply(num) {
     return 'no one wants to be square';
   }
 }

  it('rewired', () => {
    Square.__Rewire__('Calculator', MockCalculator);

    let square = new Square();
    let snark = square.square(4);

    expect(snark).toBe('no one wants to be square');
    expect(square.getName()).toBe('square');
  });

});

