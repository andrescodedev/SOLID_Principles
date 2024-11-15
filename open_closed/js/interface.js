/* 
    IMPLEMENTING INTERFACES IN JS
*/
//ENTITIES
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

//INTERFACES FOR SERVICES
class InterfaceTemplate {
    constructor() {
        if (this.constructor) {
            throw new Error(`You can't create an instance for an interface`);
        }
    }


    static ensureInterfaceImplementation(template, interfaceMethods) {
        for (const method in interfaceMethods) {

            if (!(method in template.prototype) ||
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`);
            }
        }
    }
}

class InterfacePerimeterCalculatorService extends InterfaceTemplate {
    static perimeterCalculatorMethods = {
        computePerimeter: function (geometricShape) { }
    }
}

class InterfacePerimeterShowService extends InterfaceTemplate {
    static perimeterShowMethods = {
        showPerimeter: function () { },
        getPerimeterCalculate: function () { }
    }
}

class InterfaceAreaCalculatorService extends InterfaceTemplate {
    static areaCalculatorMethods = {
        computeArea: function (geometricShape) { }
    }
}

class InterfaceAreaShowService extends InterfaceTemplate {
    static areaShowMethods = {
        showArea: function () { },
        getAreaCalculate: function () { }
    }
}

//SERVICES TO CALCULATE THE PERIMETER
class RectangleShapePerimeterCalculatorService {

    constructor() {
        InterfacePerimeterCalculatorService.ensureInterfaceImplementation(
            RectangleShapePerimeterCalculatorService,
            InterfacePerimeterCalculatorService.perimeterCalculatorMethods
        );
    }

    computePerimeter(rectangleShape) {
        return (rectangleShape.width * 2) + (rectangleShape.heigth * 2);
    }
}

class RectangleShapePerimeterShowService {
    #perimeter;

    constructor() {
        InterfacePerimeterShowService.ensureInterfaceImplementation(
            RectangleShapePerimeterShowService,
            InterfacePerimeterShowService.perimeterShowMethods
        );
    }

    showPerimeter() {
        console.log(`The rectangle perimeter is ${this.#perimeter}`);
    }

    getPerimeterCalculate(rectangleShape) {
        const rectangleShapePerimeterCalculatorService = new RectangleShapePerimeterCalculatorService();
        this.#perimeter = rectangleShapePerimeterCalculatorService.computePerimeter(rectangleShape);
    }
}

//SERVICES TO CALCULATE THE AREA
class RectangleShapeAreaCalculatorService {
    constructor() {
        InterfaceAreaCalculatorService.ensureInterfaceImplementation(
            RectangleShapeAreaCalculatorService,
            InterfaceAreaCalculatorService.areaCalculatorMethods
        );
    }

    computeArea(rectangleShape) {
        return rectangleShape.width * rectangleShape.heigth;
    }
}

class RectangleShapeAreaShowService {
    #area;

    constructor() {
        InterfaceAreaShowService.ensureInterfaceImplementation(
            RectangleShapeAreaShowService,
            InterfaceAreaShowService.areaShowMethods
        );
    }

    showArea() {
        console.log(`The rectangle area is ${this.#area}`);
    }

    getAreaCalculate(rectangleShape) {
        const rectangleShapeAreaCalculatorService = new RectangleShapeAreaCalculatorService();
        this.#area = rectangleShapeAreaCalculatorService.computeArea(rectangleShape);
    }
}

/*class SquareAreaCalculatorService extends InterfaceAreaCalculatorService {
    constructor() {
        super();
        this.ensureInterfaceImplementation(SquareAreaCalculatorService);
    }

    computeArea(square) {
        this.area = square.width * square.width;

        return console.log(`The square area is ${this.area}`);
    }
}

class TriangleAreaCalculatorService extends InterfaceAreaCalculatorService {
    constructor() {
        super();
        this.ensureInterfaceImplementation(TriangleAreaCalculatorService);
    }

    computeArea(triangle) {
        this.area = (triangle.width * triangle.heigth) / 2;

        return console.log(`The triangle area is ${this.area}`);
    }
}

class CircleAreaCalculatorService extends InterfaceAreaCalculatorService {
    constructor() {
        super();
        this.ensureInterfaceImplementation(CircleAreaCalculatorService);
    }

    computeArea(circle) {
        this.area = circle.PI * (circle.radius ** 2);

        return console.log(`The circle area is ${this.area}`);
    }
}*/


//INTANCES FOR THE PERIMETER SERVICES
const rectangleShapePerimeterCalculatorService = new RectangleShapePerimeterShowService();

const rectangle = new Rectangle(2, 5);
rectangleShapePerimeterCalculatorService.getPerimeterCalculate(rectangle);
rectangleShapePerimeterCalculatorService.showPerimeter();


//INTANCES FOR THE AREA SERVICES
const rectangleShapeAreaCalculatorService = new RectangleShapeAreaShowService();
/*const squareAreaCalculatorService = new SquareAreaCalculatorService();
const triangleAreaCalculatorService = new TriangleAreaCalculatorService();
const circleAreaCalculatorService = new CircleAreaCalculatorService();*/

const rectangle2 = new Rectangle(3, 5);
rectangleShapeAreaCalculatorService.getAreaCalculate(rectangle2);
rectangleShapeAreaCalculatorService.showArea();

/*const square = new Square(5);
squareAreaCalculatorService.computeArea(square);

const triangle = new Triangle(2, 9);
triangleAreaCalculatorService.computeArea(triangle);

const circle = new Circle(2);
circleAreaCalculatorService.computeArea(circle);*/

/*class InterfazMetodo {
    static interfaceMethods = {
        metodo1:function(){},
        metodo2:function(){}
    }

    constructor() {
        if(this.constructor === InterfazMetodo) {
            throw new Error("You can't create an instance for an interface");
        }
    }

    static ImplementsInterfaz(template) {
        for (const method in InterfazMetodo.interfaceMethods) {

            if (!(method in template.prototype) || 
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`); 
            }
        }
    }
}

class RectangleBI {
    lastname;
    constructor() {
        //InterfazMetodo.ImplementsInterfaz(RectangleBI, MetodoInterfaz);
        InterfazMetodo.ImplementsInterfaz(RectangleBI);
    }

    metodo1() {}
    metodo2() {}

    metodo3() {
        console.log('hola mundo');
    }
}

const rectangleBI = new RectangleBI();*/

/*for (const method in interfaceTemplate) {

            if (!(method in template.prototype) || 
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`); 
            }
        }*/





