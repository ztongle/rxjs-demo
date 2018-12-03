import Rx from './rx.js'

let obserable = Rx.Observable.create((observer) => {
  observer.next(1)
  observer.next(2)
  setTimeout(() => {
    observer.next(3)
  }, 3000);
  observer.complete();
  observer.next(4)
})

obserable.subscribe({
  next: (obj) => {
    print('hello ' + obj)
  }
})

obserable.subscribe((obj) => {
  print('world ' + obj)
})

function print(str) {
  let ele = document.querySelector('.test');
  let child = document.createElement('div');
  child.textContent = str;
  child.style.color = '#' + Math.floor(Math.random() * 888888 + 111111);
  ele.appendChild(child);
}