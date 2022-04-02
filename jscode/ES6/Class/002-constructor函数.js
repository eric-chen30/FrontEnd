class Person3{
    constructor(name){
        this.name = name
        // return {}     // 默认返回当前对象的实例，默认this指向，这里返回一个空对象，故下面实例的p3是一个空对象
    }

    getName(){
        return this.name
    }
}

const p3 = new Person3('Eric')
console.log(p3.getName())       // TypeError: p3.getName is not a function

