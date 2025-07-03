// hello world
const a = 24 / 4
console.log('hola, mundo')
console.info('hola, mundo')
console.error('hola, mundo')
console.log(a)
console.log(globalThis)

// global variables: window vs globalthis
/* window doesn't exist in node. This is different than js in the browser
--> console.log(window) is incorrect, use globalthis */
console.log('hola mundo')
globalThis.console.log('hola,mundo')

console.info('hola, mundo')
globalThis.console.info('hola, mundo')

console.error('mensaje de error')
globalThis.console.error('mensaje de error')
const b = 25 / 5
const c = 25 / 5
console.log(b)
globalThis.console.log(c)

console.log(globalThis)
globalThis.console.log(globalThis)

// commonJS require module
const { sum } = require('./sum')

console.log(`result: ${sum(5, 6)}`)
