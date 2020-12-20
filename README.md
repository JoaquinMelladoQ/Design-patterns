# Design-patterns


## Constructor
+ First step in order to execute the correct file with node: 
![image info](./assets/constructor-instructions.png)
+ You can add values or dependencies that will be returned as properties
![image info](./assets/newArgsConstructor.png)

## Prototype-Constructor
+ The main difference with Constructor is that methods nor properties wouldn't be storage, copy, at every instance of the new object, if methods and props are assigned to prototype properly. An advantage could be that you will use, with this pattern, less space in memory.

+ Add some changes to original code
![image info](./assets/proto-c1.png)
+ Then, copy and paste at the console from the browser
![image info](./assets/proto-c2.png)
+ Now you can see your function... not only that
![image info](./assets/proto-c3.png)

+ Building our first example: 
+ This class will be added to all objects that we eventually create with JS, it'll extends Object's class. In this case log method was added to prototype and that'll be equal to a function (do NOT use fat arrow function here). 'This' at the console references to Object. X being our new object.
![image info](./assets/first-example-proto-constructor.png)

+ Building second example:
![image info](./assets/second-example-proto-constructor.png)
At this point, we clearly see that String is inheriting from Object class. Here the regular expression was added to erase space at the beginning and the end, in the case if .trim does not run at the browser, because is not supported in some versions.

## Module
+ It's base on literal JavaScript's objects. In other words, every time you define a literal object in JavaScript you'll be defining a module; which could contain properties and at the same time, this properties could contain objects and methods as well:
![image info](./assets/module.png)
+ In this example you can also ask for the state of 'modulo'