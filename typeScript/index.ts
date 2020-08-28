function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user));

const helloStr : string = '类型检验';
console.log(helloStr)
class Site {
    name(): void {
        console.log('runoob')
    }
}
var obj = new Site();
obj.name();

//元祖类型,数组类型可以不一样，但是对应类型必须一样
let yuanzuArr : [string, number];
yuanzuArr = ['huang', 1];
console.log(yuanzuArr[0])

//void用于定义没有返回值的方法
function nullReturn() :void{
    console.log('null return')
}
nullReturn()

//任意类型 Any类型，当不知道数据类型，可以定义Any
//在js中null和underfined可以赋值给任意类型的值，但是在ts中启用严格的空校验，null和underfined只能赋值给void和本身对应类型
//never类型是其他类型的子类型，代表从不会出现的值，在函数中通常表现为抛出异常或无法执行到终点

//类型断言
// 手动指定一个值的类型，允许变量从一种类型更改为另一种类型
// <类型>值    或者     值 as 类型
var str1:string = '1';
var str2:number = <number><any> str1;
console.log(str2)

//作用域，全局，类，局部
var All_num = 12;  //全局
class Numbers {
    num_val = 13;  //实例
    static sval = 10;  //静态
    storeNum():void{
        var local_num = 14; // 局部
    }
}
console.log(All_num);
console.log(Numbers.sval);
var Classobj = new Numbers();
console.log(Classobj.num_val)