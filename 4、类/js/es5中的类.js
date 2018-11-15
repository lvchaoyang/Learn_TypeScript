// es5里面的类


/**
 * 1.最简单的类
 */

/*
    function Person(){
        this.name='张三';
        this.age=20;
    }
    var p = new Person();
    console.log(p.name); // 张三

*/

/**
 * 2、构造函数和原型链里面增加方法
 */

/*
    function Person(){
        this.name='张三';  // 属性
        this.age=20;
        this.run=function(){
            alert(this.name+'在运动');
        }
    }
// 原型链上面的属性会被多个实例共享   构造函数不会
    Person.prototype.sex="男";
    Person.prototype.work=function(){
        alert(this.name+'在工作');
    }
    var p = new Person();
    console.log(p.name); // 张三
    p.run(); // 张三在运动
    p.work(); // 张三在工作

*/

/**
 * 3 类里面的静态方法
 */
/*
    function Person(){
        this.name='张三';  // 属性
        this.age=20;
        this.run=function(){  // 实例方法
            alert(this.name+'在运动');
        }
    }

    Person.getInfo=function(){
        alert('我是静态方法');
    }
//原型链上面的属性会被多个实例共享   构造函数不会
    Person.prototype.sex="男";
    Person.prototype.work=function(){
        alert(this.name+'在工作');
    }
    var p=new Person();
    p.work();

//调用静态方法

    Person.getInfo();

*/


/**
 * 4、es5里面的继承   对象冒充实现继承
 */

/*
   function Person(){
        this.name='张三';  // 属性
        this.age=20;
        this.run=function(){  // 实例方法
            alert(this.name+'在运动');
        }
    }
    Person.prototype.sex="男";
    Person.prototype.work=function(){
         alert(this.name+'在工作');

    }
    //Web类 继承Person类   原型链+对象冒充的组合继承模式

    function Web(){
        Person.call(this);    // 对象冒充实现继承
    }
    var w=new Web();
    w.run();  // 对象冒充可以继承构造函数里面的属性和方法
    w.work();  // 错误 | 对象冒充可以继承构造函数里面的属性和方法   但是没法继承原型链上面的属性和方法

*/


/**
 * 5、es5里面的继承   原型链实现继承
 */

/*
   function Person(){
        this.name='张三';  // 属性
        this.age=20;
        this.run=function(){  // 实例方法
            alert(this.name+'在运动');
        }
    }
    Person.prototype.sex="男";
    Person.prototype.work=function(){
         alert(this.name+'在工作');
    }

    //Web类 继承Person类   原型链+对象冒充的组合继承模式
    function Web(){

    }
    Web.prototype=new Person();   // 原型链实现继承
    var w=new Web();
    // 原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
    w.run();
    w.work();
*/

/**
 * 6、 原型链实现继承的 问题？
 */
/*
    function Person(name,age){
        this.name=name;  // 属性
        this.age=age;
        this.run=function(){  // 实例方法
            alert(this.name+'在运动');
        }
    };
    Person.prototype.sex="男";
    Person.prototype.work=function(){
        alert(this.name+'在工作');
    }
    var p = new Person('李四',20);
    p.run();

    function Web(name,age){

    };
    Web.prototype=new Person(); // 原型链实现继承

    var w = new Web('赵四',20);   // 实例化子类的时候没法给父类传参
    w.run();
    w.work();

*/




/**
 * 7.原型链+对象冒充的组合继承模式
 */
/*
  function Person(name,age){
            this.name=name;  //属性
            this.age=age;
            this.run=function(){  //实例方法
                alert(this.name+'在运动');
            }

    }
    Person.prototype.sex="男";
    Person.prototype.work=function(){
            alert(this.name+'在工作');

    }
    var p = new Person('李四', 18)
    p.work();
    function Web(name,age){
        Person.call(this,name,age);   //对象冒充继承   实例化子类可以给父类传参
    }

    Web.prototype=new Person(); // 原型链继承===原型链继承对象

    var w=new Web('赵四',20);
    w.run();
    w.work();
 */


/**
 * 8、原型链+对象冒充继承的另一种方式
 */

 /*
    function Person(name,age){
        this.name=name;  // 属性
        this.age=age;
        this.run=function(){  // 实例方法
            alert(this.name+'在运动');
        }

    }
    Person.prototype.sex="男";
    Person.prototype.work=function(){
        alert(this.name+'在工作');
    }
    var p =new Person('李四', 18);
    console.log(p.sex);
    p.work();

    function Web(name,age){

        Person.call(this,name,age);   //对象冒充继承  可以继承构造函数里面的属性和方法、实例化子类可以给父类传参
    }

    Web.prototype=Person.prototype; // 原型链继承 === 原型链继承原型链

    var w = new Web('赵四',20);
    w.run();
    w.work();
 */






