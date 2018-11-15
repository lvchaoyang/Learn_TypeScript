"use strict";
/**
 * typeScript中的类
 * 4.1 类的定义
 * 4.2 继承
 * 4.3 类里面的修饰符
 * 4.4 静态属性 静态方法
 * 4.5 抽象类 继承 多态
 */
/**
 * 4.1 类的定义
 */
/* es5:
    function Person(name){
        this.name=name;
        this.run=function(){
            console.log(this.name)
        }
    }
    var p=new Person('张三');
    p.run()
*/
/* ts中定义类：
    class Person{
        name:string;   //属性  前面省略了public关键词

        constructor(n:string){  //构造函数   实例化类的时候触发的方法
          this.name=n;
        }

        run():void{
          alert(this.name);
        }
    }
    var p=new Person('张三');
    p.run()

*/
/*
    class Person{
        name:string;

        constructor(name:string){  //构造函数   实例化类的时候触发的方法
            this.name=name;
        }

        getName():string{
            return this.name;
        }
        setName(name:string):void{
            this.name=name;
        }
    }
    var p=new Person('张三');
    console.log(p.getName()); // 张三
    p.setName('李四');
    console.log(p.getName()); // 李四

*/
/**
 * 4.2、ts中实现继承  extends、 super
 */
/*
    class Person{
        name:string; // 默认public

        constructor(name:string){
            this.name=name;
        }

        run():string{
            return `${this.name}在运动`
        }
    }
    var p=new Person('王五');
    alert(p.run()); // 王五在运动


    class Web extends Person{
        constructor(name:string){
            super(name);  // 初始化父类的构造函数
        }
    }
    var w = new Web('李四');
    alert(w.run()); // 李四在运动

 */
/* ts中继承的探讨  父类的方法和子类的方法一致

    class Person{

        name:string;

        constructor(name:string){
            this.name=name;
        }

        run():string{

            return `${this.name}在运动`
        }
    }
    var p=new Person('王五');
    alert(p.run()); // 王五在运动

    class Web extends Person{
        constructor(name:string){
            super(name);  // 初始化父类的构造函数
        }

        run():string{
            return `${this.name}在运动-子类`
        }

        work(){
            alert(`${this.name}在工作`)
        }
    }
    var w=new Web('李四');
    alert(w.run()); // 李四再运动-子类
    alert(w.run()); // 李四在工作
*/
/**
 * 4.3 类里面的修饰符  typescript里面定义属性的时候给我们提供了 三种修饰符
 */
/*
 *   public :公有          在当前类里面、 子类  、类外面都可以访问
 *   protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
 *   private ：私有         在当前类里面可以访问，子类、类外部都没法访问
 *   属性如果不加修饰符 默认就是 公有 （public）
*/
/* public :公有          在类里面、 子类  、类外面都可以访问

    // 父类
    class Person{
        public name:string;  // 公有属性

        constructor(name:string){
            this.name=name;
        }

        run():string{
            return `${this.name}在运动`
        }
    }
    var p=new Person('哈哈哈');
    // public :公有属性    在类外可以访问
    console.log(p.name); // 哈哈哈

    // 子类
    class Web extends Person{
        constructor(name:string){
            super(name);  // 初始化父类的构造函数
        }

        work():string{
            // public :公有属性    在子类里面可以访问
            return `${this.name}在工作`; // 正确
        }
    }
    var w = new Web('李四11');

    console.log(w.work());
    console.log(w.run());

*/
/* protected：保护类型    在类里面、子类里面可以访问 ，在类外部无法访问

    // 父类
    class Person{
        protected name:string;  // 保护类型

        constructor(name:string){
            this.name=name;
        }

        run():string{
            return `${this.name}在运动`
        }
    }
    var  p=new Person('哈哈哈');
    // protected：保护类型属性    在类外不能访问
    console.log(p.name); // 报错 |  Property 'name' is protected and only accessible within class 'Person' and its subclasses

    // 子类
    class Web extends Person{
        constructor(name:string){
            super(name);  // 初始化父类的构造函数
        }

        work():string{
            // protected：保护类型属性    在子类里面可以访问
            return `${this.name}在工作`; // 正确
        }
    }
    var w = new Web('李四11');

    console.log(w.work());
    console.log(w.run());
*/
/* private ：私有        在类里面可以访问，子类、类外部都无法访问

    // 父类
    class Person{
        private name:string;  // 私有

        constructor(name:string){
            this.name=name;
        }

        run():string{
            return `${this.name}在运动`
        }
    }

    var p=new Person('哈哈哈');
    // private ：私有属性在类外无法访问
    console.log(p.name); // 报错 | Property 'name' is private and only accessible within class 'Person'

    // 子类
     class Web extends Person{
        constructor(name:string){
            super(name);  // 初始化父类的构造函数
        }

        work():string{
            // private ：私有属性在子类中无法访问
            return `${this.name}在工作`; // 报错 |  Property 'name' is private and only accessible within class 'Person'
        }
    }
    var w = new Web('李四11');

    console.log(w.work());
    console.log(w.run());
*/
/**
 * 4.4 静态属性 静态方法
 */
/* es5静态属性 静态方法
    function Person(){
        this.run1=function(){}
    }
    Person.name='哈哈哈'; // 静态属性
    Person.run2=function(){  // 静态方法

    }
    var p=new Person();
    Person.run2(); // 静态方法的调用
*/
/* ts静态属性 静态方法
    class Per{
        public name:string;
        public age:number=20;
        //静态属性

        public static sex="男";
        constructor(name:string) {
                this.name=name;
        }
        run() {  // 实例方法
            console.log(`${this.name}在运动`)
        }
        work() {
            console.log(`${this.name}在工作`)
        }
        public static print(){
            console.log('静态方法调用，静态属性是：'+Per.sex);
            // console.log(this.age); // 错误 | 静态方法  里面没法直接调用类里面的属性
        }
    }
    var p=new Per('张三');
    // 调用实例方法
    p.run();
    p.work();
    // 调用静态方法
    Per.print();
    // 调用静态属性
    console.log(Per.sex);
*/
/**
 * 4.5 多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
 *     多态属于继承
 */
/*
    class Animal {
        public name:string;

        constructor(name:string) {
            this.name=name;
        }

        eat(){   // 具体吃什么  不知道，具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
            console.log('吃的方法')
        }
    }

    class Dog extends Animal{
        constructor(name:string){
            super(name)
        }
        eat(){
            return this.name+'吃粮食'
        }
    }
    var dog = new Dog('炒饭');
    console.log(dog.eat()); // 炒饭吃粮食

    class Cat extends Animal{
        constructor(name:string){
            super(name)
        }

        eat(){
            return this.name+'吃老鼠'
        }
    }
    var cat = new Cat('年糕');
    console.log(cat.eat()); // 年糕吃粮食
*/
/**
 * 注意：
 *     1、typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
 *     2、用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 *     3、abstract抽象方法只能放在抽象类里面
 *     4、抽象类和抽象方法用来定义标准 。
 */
/* 标准：Animal 这个类要求它的子类必须包含eat方法
    abstract class Animal{
        public name:string;
        protected constructor(name:string){
            this.name=name;
        }

        abstract eat():any;  // 抽象方法不包含具体实现并且必须在派生类中实现。

        run(){
            console.log('其他方法可以不实现')
        }
    }

    // var a=new Animal() // 错误 | 抽象类不能直接被实例化

    class Dog extends Animal{

        constructor(name:any){
            super(name)
        }
        //抽象类的子类必须实现抽象类里面的抽象方法
        eat(){
            console.log(this.name+'吃粮食')
        }
    }
    var d = new Dog('炒饭');
    d.eat();

    class Cat extends Animal{

        constructor(name:any){
            super(name)
        }
        run(){
            console.log(this.name+'跑步')
        }
         //抽象类的子类必须实现抽象类里面的抽象方法
        eat(){
            console.log(this.name+'吃老鼠')
        }
    }

    var c = new Cat('年糕');
    c.eat();
    c.run();
*/
