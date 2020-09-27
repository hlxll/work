"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
var helloStr = '类型检验';
console.log(helloStr);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('runoob');
    };
    return Site;
}());
var obj = new Site();
obj.name();
//元祖类型,数组类型可以不一样，但是对应类型必须一样
var yuanzuArr;
yuanzuArr = ['huang', 1];
console.log(yuanzuArr[0]);
//任意类型 Any类型，当不知道数据类型，可以定义Any
//在js中null和underfined可以赋值给任意类型的值，但是在ts中启用严格的空校验，null和underfined只能赋值给void和本身对应类型
//never类型是其他类型的子类型，代表从不会出现的值，在函数中通常表现为抛出异常或无法执行到终点
//联合类型
// 一个数据声明，使用两个类型定义
var lotType;
//类型断言
// 手动指定一个值的类型，允许变量从一种类型更改为另一种类型
// <类型>值    或者     值 as 类型
var str1 = '1';
var str2 = str1;
console.log(str2);
//作用域，全局，类，局部
var All_num = 12; //全局
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //实例
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部
    };
    Numbers.sval = 10; //静态
    return Numbers;
}());
console.log(All_num);
console.log(Numbers.sval);
var Classobj = new Numbers();
console.log(Classobj.num_val);
var customer = {
    firstName: 'huang',
    sayHi: function () { return "Hi huanglin"; }
};
var list2 = ["huang", "lin"];
var firendChild = {};
firendChild.firstName = 'huang';
// 命名空间，解决重名问题
// /// <reference path = "IShape.ts" /> 
// namespace Drawing { 
//     export class Circle implements IShape { 
//         public draw() { 
//             console.log("Circle is drawn"); 
//         }  
//     }
// }
// 函数定义
function run(name, age) {
    //定义返回值类型
    //形参加问好，调用时候就可传可不传,可选参数必须放最后面
    // 调用实参
    if (age) {
        console.log(name + "+" + age);
    }
    else {
        console.log("" + name);
    }
    return 'run';
}
var run2 = function (name, age) {
    if (age === void 0) { age = 20; }
    //默认参数，调用这个方法的时候，就可以不传
    return 1;
};
//void用于定义没有返回值的方法
function nullReturn() {
    console.log('null return');
}
// 剩余参数
function run3(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    //形参可以前面放一两个参数，也可以不放
    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
    return 1;
}
function getInfo(str) {
    if (typeof str == 'string') {
        return '名称' + str;
    }
    else {
        return '年龄' + str;
    }
}
// 类
var person = /** @class */ (function () {
    function person(n) {
        this.name = n;
        this.age = 12;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setName = function (name) {
        this.name = name;
    };
    return person;
}());
var p = new person('huanglin');
//类继承
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    //自定义方法,如果父类和子类有一样的方法，先找子类，没有才会去父类找
    Web.prototype.work = function () {
        console.log("" + this.name);
    };
    return Web;
}(person));
// 类修饰符，默认，pubilc，共有 在类里面，子类，类外面都可以访问
//private在类里面，子类可以访问类外面不能
//protected类里面可以访问，子类和类外部不能访问
// 静态属性和方法
// es5中
// function jintai(){}
// jintai.run = function(){}
// 使用时候可以直接jintai.run()
var JtPerson = /** @class */ (function () {
    function JtPerson(name) {
        this.name = name;
    }
    JtPerson.prototype.run = function () {
        console.log('实例方法');
    };
    //静态方法不能直接调用类里面的属性，需要定义静态属性
    JtPerson.print = function () {
        console.log('静态方法' + JtPerson.age);
    };
    JtPerson.age = 12;
    return JtPerson;
}());
// 实例方法调用
var Jp = new JtPerson('huang');
Jp.run();
// 静态方法调用
JtPerson.print();
// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现
//多态继承
var Animai = /** @class */ (function () {
    function Animai(name) {
        this.name = name;
    }
    Animai.prototype.eat = function () {
        console.log('多态方法');
    };
    return Animai;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃死';
    };
    return Dog;
}(Animai));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃老鼠';
    };
    return Cat;
}(Animai));
//抽象:abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准，animal这个类要求子类必须包含eat方法
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    return animal;
}());
//var a = new animal() /*错误的写法，不能直接实例化*/
var animalChild = /** @class */ (function (_super) {
    __extends(animalChild, _super);
    function animalChild(name) {
        return _super.call(this, name) || this;
    }
    animalChild.prototype.eat = function () {
        console.log('继承抽象类。必须实现这个方法');
    };
    return animalChild;
}(animal));
// 接口
