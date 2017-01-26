import {Square} from './square';

export default class Operations {
  constructor() {
    this.knownOps = [];
    this.knownOps.push(new Square());
  }

  getOps() {
    const ops = [];
    this.knownOps.forEach((o) => {
      ops.push(o.getName());
    });
    return ops;
  }
}
