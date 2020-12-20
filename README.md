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
+ It'll extends Object's class. This class will be added to all objects that we eventually create with JS. In this case log method was added to prototype and that'll be equal to a function (do NOT use fat arrow function). 'This' at the console references to Object. X being our new object.
![image info](./assets/first-example-proto-constructor.png)

+ Building second example:
![image info](./assets/second-example-proto-constructor.png)
In this case, we clearly see that String is inheriting from Object class. Regular expression was added to erase space at the beginning and the end in case if .trim does not run at the browser
