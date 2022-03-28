let a = 'wangting'
a= a[0].toUpperCase() + a.substr(1)
console.log(a)

let b = 'shopping'
const characters = [...b]
characters[0] = characters[0].toUpperCase();
b = characters.join("");
console.log(b)

let c = 'going'
c = c.charAt(0).toUpperCase() + c.substring(1,c.lenght)
console.log(c)
