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
    constructor(interfaceTemplate) {
        if (this.constructor === interfaceTemplate) {
            throw new Error(`You can't create an instance for an interface`);
        }
    }

    //Method to ensure interface's methods implementation
    ensureInterfaceImplementation(template, interfaceMethods) {
        for (const method in interfaceMethods) {

            if (!(method in template.prototype) ||
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`);
            }
        }
    }
}

class InterfacePerimeterCalculatorService extends InterfaceTemplate {
    perimeter;

    #perimeterCalculatorMethods = {
        computePerimeter: function () { }
    }

    constructor() {
        super(InterfacePerimeterCalculatorService);
    }

    ensureInterfaceImplementation(template) {
        super.ensureInterfaceImplementation(template, this.#perimeterCalculatorMethods);
    }
}

class InterfaceAreaCalculatorService extends InterfaceTemplate {
    area;

    //Define methods without functionality
    #areaCalculatorMethods = {
        computeArea: function (geometricShape) { }
    }

    constructor() {
        super(InterfaceAreaCalculatorService);
    }

    //Method to ensure interface's methods implementation
    ensureInterfaceImplementation(template) {
        super.ensureInterfaceImplementation(template, this.#areaCalculatorMethods);
    }

}

//SERVICES TO CALCULATE THE PERIMETER
class RectanglePerimeterCalculatorService extends InterfacePerimeterCalculatorService {
    //Implementing an interface
    //This class must implement all the methods defined in the interface
    constructor() {
        super();
        this.ensureInterfaceImplementation(RectanglePerimeterCalculatorService);
    }

    computePerimeter(rectangle) {
        this.perimeter = (rectangle.width*2) + (rectangle.heigth*2);

        return console.log(`The rectangle perimeter is ${this.perimeter}`);
    }
}

//SERVICES TO CALCULATE THE AREA
class RectangleAreaCalculatorService extends InterfaceAreaCalculatorService {
    //Implementing an interface
    //This class must implement all the methods defined in the interface
    constructor() {
        super();
        this.ensureInterfaceImplementation(RectangleAreaCalculatorService);
    }

    computeArea(rectangle) {
        this.area = rectangle.width * rectangle.heigth;

        return console.log(`The rectangle area is ${this.area}`);
    }
}

class SquareAreaCalculatorService extends InterfaceAreaCalculatorService {
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
}


//INTANCES FOR THE PERIMETER SERVICES
const rectanglePerimeterCalculatorService = new RectanglePerimeterCalculatorService();

const rectangle = new Rectangle(2, 5);
rectanglePerimeterCalculatorService.computePerimeter(rectangle);


//INTANCES FOR THE AREA SERVICES
const rectangleAreaCalculatorService = new RectangleAreaCalculatorService();
const squareAreaCalculatorService = new SquareAreaCalculatorService();
const triangleAreaCalculatorService = new TriangleAreaCalculatorService();
const circleAreaCalculatorService = new CircleAreaCalculatorService();

const rectangle2 = new Rectangle(2, 5);
rectangleAreaCalculatorService.computeArea(rectangle2);

const square = new Square(5);
squareAreaCalculatorService.computeArea(square);

const triangle = new Triangle(2, 9);
triangleAreaCalculatorService.computeArea(triangle);

const circle = new Circle(2);
circleAreaCalculatorService.computeArea(circle);

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





