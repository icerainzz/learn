// ------------原型链------------
/**
 * 对应名称
 * - prototype : 原型
 * - __proto__: 原型链（链接点）
 * 
 * 从属关系
 * prototype -> 函数的一个属性 ：对象{}
 * __proto__ => 对象Object的一个属性： 对象 {}
 * 对象的__proto__ => 保存着该对象的构造函数prototype
 * 原型链：就是以一个对象为基准，以__proto__为连接的的链条，一直到Object.prototype为止
 * 原型链继承一直往上找
 */

// function Test() {
//     this.a = 1;
// }

// Test.prototype.b = 2;

// console.log(Test.prototype);

// const test = new Test();



// console.log(test.__proto__);
// console.log(test.__proto__ === Test.prototype);
// console.log(Test.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

// Object.prototype.c = 3;

/**
 * test{
 * a:1,
 * __proto__:Test.prototype={
 * b:2,
 * __proto__:Object.__proto__={
 * c:3,
 * 
 * }
 * }
 * }
 */


// Function Object :函数&&对象
// console.log(Test.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype); // 规定
// console.log(Object.__proto__ === Function.prototype);
// console.log(Object.__proto__ === Function.__proto__);

// 检测对象本身是否有该属性的方法 -hasOwnProperty ;

// 原型脸上是否有该善属性  - in方法

// test.constructor =>实例化test对象的构造函数，可以更改
// console.log(test.constructor===Test);


// ------------深拷贝------------

let obj = {
    name: 'judy',
    age: 26,
    info: {
        hobby: ['food', {
            a: 1
        }],
        career: {
            student: 23,
            engineer: 3,
        }
    },
};


// es5
function deepClone(origin, target) {
    var tar = target || {};
    var toStr = Object.prototype.toString;
    var arrType = '[object Array]';
    for (var k in origin) {
        // 必须是对象自身的属性
        if (origin.hasOwnProperty(k)) {
            if (typeof origin[k] === 'object' && typeof origin[k] !== null) {
                target[k] = toStr.call(origin[k]) === arrType ? [] : {};
                deepClone(origin[k], target[k]);
            } else {
                tar[k] = origin[k];
            }
        }
    }
    return tar;
}

const newObj = deepClone(obj, {});

console.log(newObj);

/**
 * Map 键名 =》 任意类型 
 * weakMap 键名=》对象
 * {} 键名=》字符串
 */


// ------------ 重写arr方法------------

/**
 * forEach
 * map
 * 
 * 
 */