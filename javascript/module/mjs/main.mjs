// import {mx, my, mz, mfunc} from "./module.mjs";
// console.log(mx);
// console.log(my);
// console.log(mz);
// mfunc();

import * as md from "./module.mjs";
console.log(md.mx);
console.log(md.my);
console.log(md.mz);
md.mfunc();

import {person} from "./Person.mjs";
console.log(person);