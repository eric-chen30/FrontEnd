let a = [1,2,3];
let b = {
    name: 'eric',
    age: 11
};
console.log(typeof a);   // object 与预期结果有些出入
console.log(typeof b);   // object

/**
 * typeof 运算符并不能直接判断一个变量是对象还是数组类型
 * typeof用来判断基本类型很有用，但是判断引用类型会很费力
 * 引用类型：对象、数组、new Date()等
*/

// 1. instanceof  用于查找原型链来检查某个变量是否为某个类型数据的实例，使用instanceof可以判断一个变量是数组还是对象
// 所以我们在判断一个变量是数组还是对象的时候，应该先判断是否为【数组类型】
console.log(a instanceof Array);      // true
console.log(a instanceof Object);      // true      数组不仅是【Array】的实例，也是【Object】类型的实例
console.log(b instanceof Object);    // true


/**
 * 判断构造函数
 * 每个变量都会有【__proto__】属性，表示隐式原型，一个对象的隐式原型指向的是对象构造函数的原型
 */
let c = [1,2,3];
console.log(c.constructor === Array);   // true
console.log(c.constructor === Object);  // false

var d = {name:'jack', age: 15};
console.log(d.constructor === Array);  // false
console.log(d.constructor === Object);  // true

console.log([].__proto__ === [].constructor.prototype);     // true
console.log([].__proto__ === Array.prototype);              // true
console.log([].__proto__.constructor === Array);            // true
console.log([].__proto__.constructor === Object);           // false


/**
 * toString()  每种引用数据类型都会直接或间接继承自Object类型，因此都包含toString函数
 * 借助call()函数，直接调用Object原型上的toString()函数
 */
console.log(Object.prototype.toString.call(c));     // [object Array] 
console.log(Object.prototype.toString.call(d));    // [object Object]
console.log(Object.prototype.toString.call('string')); //[object String]
console.log(Object.prototype.toString.call(1));  // [object Number]
var m;
console.log(Object.prototype.toString.call(m));  // [object Undefined]


/**
 * Array.isArray()  只能判断出 变量是否为数组
 */
// 结果均为true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
// 结果均为false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray('king'));
console.log(Array.isArray(true));

/**
 * filter()函数过滤满足条件的数据
 * 1. 针对简单类型的数组，找出数组中所有的奇数
 * 2. 针对复杂类型的数组，找出所有年龄大于18岁的男生
 */

console.log([1,2,3,4,5].filter(x => {return x%2 !== 0}));  // [ 1, 3, 5 ]

var arrObj = [
    {
        gender: 'male',
        age: 20
    },
    {
        gender: 'female',
        age: 22
    },
    {
        gender: 'male',
        age: 16
    }
];
console.log(arrObj.filter(function(stu){
    return stu.age>18 && stu.gender == 'male';      // [ { gender: 'male', age: 20 } ]
}));

/**
 * reduce()函数累加器处理数组元素，接收一个函数作为累加器，将数组中的每一个元素从左到右依次累加器，返回最终结果
 * 1. 求数组每个元素相加的和
 *      适合用来累加数组元素，如果不设置初始值，默认数组第一个值为初始值，如果设置初始值，需要设置为0，以便于求和
 * 2. 统计数组中每个元素出现的次数
 * 3. 多维统计数据
 * 
 */

var arr2 = [1,2,3,4,5];         
var sum = arr2.reduce((accumulator,currentValue) => {return accumulator + currentValue;},0);
console.log(sum);       // 15

// 初始值 initValue 设置为 {}空对象用来存储键值对
var countOccurrences = function(arr) {
    return arr.reduce(function(accumulator,currentValue){
        // 三目运算符  如果存在++ 如果不存在为 1  currentValue表示正在处理的值
        accumulator[currentValue] ? accumulator[currentValue]++ : accumulator[currentValue] = 1;
        return accumulator;
    },{});
};
console.log(countOccurrences([1,2,5,3,2,4,3]));     // { '1': 1, '2': 2, '3': 2, '4': 1, '5': 1 }


// 一组人民币值
var items = [{price: 10}, {price: 50}, {price: 100}];

// 设计不同的汇率计算  reduce()函数的第一个参数可以封装为一个reducers数组，数组中每个元素实际为一个函数，利用reduce()函数单独完成一个汇率的计算
var reduces = {
    totalEuros: function(state, item) {
        return state.euros += item.price * 0.1265;
    },
    totalDollars: function(state, item) {
        return state.dollars += item.price * 0.1487;
    }
    
}

var manageReducers = function(reducers) {
    return function(state, item) {
        return Object.keys(reducers).reduce(function(nextState, key){
            reducers[key](state, item);
            return state;
        },{});
    }
};

var bigTotalPriceReducer = manageReducers(reduces);
var initialState = {euros:0,dollars:0};
var totals = items.reduce(bigTotalPriceReducer,initialState);
console.log(totals);        // { euros: 20.240000000000002, dollars: 23.792 }



