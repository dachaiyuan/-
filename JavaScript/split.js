// var text = 'hello$world$';
// console.log(text.split('$'))
// console.log(text.split(/(\$)/g))

let str = '0.15＋7.62＋7.85=<nn contenteditable="false" data-ind="1"></nn>'
// let str1 = '0.15＋7.62＋7.85=<nn contenteditable="false" data-ind="1"></nn>&nbsp;'
let reg = /<nn[^>]*>((?:(?!<\/nn>)[\s\S])*)<\/nn>/gi

let regs = /(<nn[^>]*>(?:(?!<\/nn>)[\s\S])*<\/nn>)/gi
console.log(str.split(reg))
console.log(str.split(regs))