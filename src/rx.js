const Rx = {};

const Instance = function (sub) {
  this.subscribe = (observer) => {
    this.finished = false;
    if (typeof observer === 'function') {
      let obs = observer;
      observer = {
        next: (args) => obs(args)
      }
    }

    this.i_observer = {
      next: (args) => {
        !this.finished && observer.next(args);
      },

      error: (args) => {
        observer.error && observer.error(args);
      },

      complete: (args) => {
        this.finished = true;
        observer.complete && observer.complete(args);
      }
    }

    let unsub = new sub(this.i_observer);

    return {
      unsubscribe: () => {
        this.finished = true;
        if (unsub && typeof unsub === 'function') {
          unsub();
        }
      }
    }
  }
}

const Observable = {
  create: (subscribe) => {
    let ins = new Instance(subscribe);
    return ins;
  }
} 

Rx.Observable = Observable;

export default Rx;