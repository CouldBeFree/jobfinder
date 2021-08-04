import _ from 'lodash';
console.log(_.join(['Another', 'module', 'loaded!'], ' '));

export const element = () => {
  const el = document.createElement('h1')
  el.innerText = 'Hello from javaScript'
  console.log('el')

  return el
}

export const btn = () => {
  const button = document.createElement('button')
  button.innerText = 'I am button'
  console.log('btn')

  return button
}
