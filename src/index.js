import Rx from './rx.js'

let obserable = Rx.Observable.create((observer) => {
  observer.next(1)
  observer.next(2)
  setTimeout(() => {
    observer.next(3)
  }, 3000);
  observer.next(4)
})

obserable.subscribe({
  next: (obj) => {
    console.log('hello', obj)
  }
})

obserable.subscribe((obj) => {
  console.log('world', obj)
})