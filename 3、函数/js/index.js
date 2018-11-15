"use strict";
/**
 * 3、typeScript中的函数
 *   3.1、函数的定义
 *   3.2、可选参数
 *   3.3、默认参数
 *   3.4、剩余参数
 *   3.5、函数重载
 *   3.6、箭头函数  es6
 */
/**
 * 3.1、函数的定义
 */
// es5定义函数的方法
/* // 函数声明法
   function run(){
       return 'run';
   }
*/
/* // 匿名函数
   var run2=function(){
       return 'run2';
   }
*/
// ts中定义函数的方法
/* // 函数声明法
   function run(): string{
       return 'run';
   }
*/
/* // 错误写法
   function run(): string{
       return 123;
   }
*/
/* // 匿名函数
   var fun2=function():number{
       return 123;
   }
   console.log(fun2()); // 123
*/
/* // ts中定义方法传参
   function getInfo(name:string,age:number):string{
       return `${name} --- ${age}`;
   }
   console.log(getInfo('zhangsan',20)); // zhangsan ---20
*/
/* // ts中定义方法传参（匿名函数）
   var getInfo=function(name:string,age:number):string{
       return `${name} --- ${age}`;
   }
   console.log(getInfo('zhangsan',40)); // zhangsan ---40
*/
/* // 没有返回值的方法
   function run():void{
       console.log('run')
   }
   run(); // run
*/
/**
 * 3.2、方法可选参数
 */
/* // es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
   function getInfo(name: string, age?: number):string{
       if (age) {
           return `${name} --- ${age}`;
       } else {
           return `${name} ---年龄保密`;
       }
   }
   console.log(getInfo('zhangsan')) // zhangsan ---年龄保密
   console.log(getInfo('zhangsan',123)) // zhangsan ---123
*/
// 注意:可选参数必须配置到参数的最后面
/* // 错误写法
    function getInfo(name?:string,age:number):string{
        if (age) {
            return `${name} --- ${age}`;
        } else {
            return `${name} ---年龄保密`;
        }
    }
    console.log(getInfo('zhangsan'))
*/
/**
 * 3.3、默认参数 可选参数
 */
/* // es5里面没法设置默认参数，es6和ts中都可以设置默认参数
   function getInfo(name:string,age:number=20):string{
       if (age) {
           return `${name} --- ${age}`;
       } else {
           return `${name} ---年龄保密`;
       }
   }
   console.log(getInfo('张三')); // 张三 ---20
   console.log(getInfo('张三',30)); // 张三 ---30
*/
/**
 * 3.4、剩余参数
 */
/*
   function sum(a:number,b:number,c:number,d:number):number{
       return a+b+c+d;
   }
   console.log(sum(1,2,3,4)); // 10
*/
/* // 三点运算符 接受新参传过来的值
   function sum(...result:number[]):number{
       console.log(result);
       var sum=0;
       for(var i=0;i<result.length;i++){
           sum+=result[i];
       }
       return sum;
   }
   console.log(sum(1, 2, 3, 4, 5, 6)); // 21 | ...result = 1,2,3,4,5,6 | result = [1,2,3,4,5,6]
*/
/*
   function sum(a:number,b:number,...result:number[]):number{
       var sum = a + b; // 3
       for(var i=0;i<result.length;i++){
           sum+=result[i];
       }
       return sum;
   }
   console.log(sum(1, 2, 3, 4, 5, 6)); // 21 | a = 1; b = 2, ...result = 3, 4, 5, 6 | result = [3, 4, 5, 6];
*/
/**
 * 3.5、ts函数重载
 */
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
// ts为了兼容es5 以及 es6 重载的写法和java中有区别。
/* // es5中出现同名方法，下面的会替换上面的方法
   function css(config){
   }
   function css(config,value){
   }
*/
//ts中的重载
/*
    function getInfo(name:string):string;
    function getInfo(age:number):string;
    function getInfo(str:any):any{
        if(typeof str==='string'){
            return '我叫'+str;
        }else{
            return '我的年龄是'+str;
        }
    }
    console.log(getInfo('张三'));   //正确
    console.log(getInfo(20));   //正确
    console.log(getInfo(true));    //错误写法 参数只能是string或number
*/
/*
    function getInfo(name:string):string;
    function getInfo(name:string,age:number):string;
    function getInfo(name:any,age?:any):any{
        if(age){
            return '我叫：'+name+'我的年龄是'+age;
        }else{
            return '我叫：'+name;
        }
    }
    console.log(getInfo('zhangsan'));  // 正确

    // console.log(getInfo(123));  // 错误 | 只有一个参数时只能时name(string)

    console.log(getInfo('zhangsan',20)); // 正确

    // console.log(getInfo(123,20)); // 错误 | 有两个参数时，第一个必须为name(string),第二个必须为age(number)

*/
/**
 * 3.6、箭头函数  es6
 */
// this指向的问题===箭头函数里面的this指向上下文
/*
    setTimeout(function(){
        console.log('run'); // run
    },1000)

    setTimeout(()=>{
        console.log('run'); // run
    },1000)
*/
