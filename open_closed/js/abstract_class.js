/* 
    ABSTRACT CLASSES IN JS
*/

//Entities
class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
}

class Square {
    constructor(width) {
        this.width = width;
    }
}

class Triangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }

}

class Circle {
    constructor(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
}

//SERVIICES

// This template convert a class in an abstract class
class AbstractTemplate {
    constructor(template) {
        if(this.constructor === template) {
            throw new Error(`You can't create an instance for an abstract class`);
        }
    }
}

//This class is an abstract class
class AbstractPerimeterCalculatorService extends AbstractTemplate {
    constructor() {
        super(AbstractPerimeterCalculatorService);
    }

    computePerimeter(shape) {throw new Error(`an Abstract method must not be implemented`);}
}

class AbstractAreaCalculatorService extends AbstractTemplate {
    area;
    //Hacer un contructor que no permita instanciar
    constructor() {
        super(AbstractAreaCalculatorService);
    }

    //This is an abstract method
    //The abstract methods must not have implementation
    computeArea(geometricShape){throw new Error(`an Abstract method must not be implemented`);}
}

class RectangleAreaCalculatorService extends AbstractAreaCalculatorService {
    computeArea(rectangle) {
        this.area = rectangle.width * rectangle.heigth;

        return console.log(`The rectangle area is ${this.area}`);
    }
}

class SquareAreaCalculatorService extends AbstractAreaCalculatorService {
    computeArea(square) {
        this.area = square.width * square.width;

        return console.log(`The square area is ${this.area}`);
    }
}

class TriangleAreaCalculatorService extends AbstractAreaCalculatorService {
    computeArea(triangle) {
        this.area = (triangle.width * triangle.heigth)/2;

        return console.log(`The triangle area is ${this.area}`);
    }
}

class CircleAreaCalculatorService extends AbstractAreaCalculatorService {
    computeArea(circle) {
        this.area = circle.PI * (circle.radius ** 2);

        return console.log(`The circle area is ${this.area}`);
    }
}

//INSTANCES
const rectangleAreaCalculatorService = new RectangleAreaCalculatorService();
const squareAreaCalculatorService = new SquareAreaCalculatorService();
const triangleAreaCalculatorService = new TriangleAreaCalculatorService();
const circleAreaCalculatorService = new CircleAreaCalculatorService();

const rectangle = new Rectangle(2,5);
console.log(rectangle);
rectangleAreaCalculatorService.computeArea(rectangle);

const square = new Square(5);
console.log(square);
squareAreaCalculatorService.computeArea(square);

const triangle = new Triangle(2,9);
console.log(triangle);
triangleAreaCalculatorService.computeArea(triangle);

const circle = new Circle(4);
console.log(circle);
circleAreaCalculatorService.computeArea(circle);