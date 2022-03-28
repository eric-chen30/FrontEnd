// apply 与 call 实现类型  但是参数形式为数组形式
Function.prototype.myApply = function(context) {
    const fn = Symbol('fn')
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(args)
    delete context.fn
    return result
}

function test(arr){
    console.log(arr)            // [ [ 1, 2 ] ]
    console.log(typeof arr)     // object
    console.log(this.a,this.b)  // a b
}

test.myApply(
    {
      a: 'a',
      b: 'b',
    },
    [1, 2]
  )