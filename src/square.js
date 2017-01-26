import {Calculator} from './calculator';

export default class Square {
  square(num) {
    let c = new Calculator();
    return c.multiply(num, num);
  }

  getName() {
    return 'square';
  }
}
