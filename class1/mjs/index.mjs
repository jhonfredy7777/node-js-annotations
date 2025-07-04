// .js uses commonJS by default
// .mjs to utilize ES modules
// .cjs to utilize commonJS

import { sum, mult, sub, div } from './sum.mjs'

console.log(sum(6, 6))
console.log(mult(6, 6))
console.log(sub(6, 6))
console.log(div(6, 6))
