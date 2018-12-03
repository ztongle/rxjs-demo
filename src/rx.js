const Rx = {};

const Instance = function (sub) {
  this.subscribe = (observer) => {
    if (typeof observer === 'function') {
      observer = {
        next: observer
      }
    }
    new sub(observer);
  };
}

const Observable = {
  create: (subscribe) => {
    let ins = new Instance(subscribe);
    return ins;
  }
} 

Rx.Observable = Observable;

export default Rx;