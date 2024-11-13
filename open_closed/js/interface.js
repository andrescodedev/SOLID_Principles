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

//SERVICES

class InterfacePerimeterCalculatorService {
    static perimeterCalculatorMethods = {
        computePerimeter: function() {}
    }

    constructor() {
        if (this.constructor === InterfacePerimeterCalculatorService) {
            throw new Error(`You can't create an instance for an interface`);
        }
    }

    static ensureInterfaceImplementation(template) {
        for (const method in InterfacePerimeterCalculatorService.perimeterCalculatorMethods) {

            if (!(method in template.prototype) ||
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`);
            }
        }
    }
}

class InterfaceAreaCalculatorService {
    //Define methods without functionality
    static areaCalculatorMethods = {
        computeArea: function () { }
    }

    //Hacer un contructor que no permita instanciar
    constructor() {
        if (this.constructor === InterfaceAreaCalculatorService) {
            throw new Error(`You can't create an instance for an interface`);
        }
    }

    //Method to ensure interface's methods implementation
    static ensureInterfaceImplementation(template) {
        for (const method in InterfaceAreaCalculatorService.areaCalculatorMethods) {

            if (!(method in template.prototype) ||
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`);
            }
        }
    }

}

class RectangleAreaCalculatorService {
    //Implementing an interface
    //This class must implement all the methods defined in the interface
    constructor() {
        InterfaceAreaCalculatorService.ensureInterfaceImplementation(RectangleAreaCalculatorService);
    }

    computeArea(rectangle) {
        let area = rectangle.width * rectangle.heigth;

        return console.log(`The rectangle area is ${area}`);
    }
}

class SquareAreaCalculatorService {
    constructor() {
        InterfaceAreaCalculatorService.ensureInterfaceImplementation(SquareAreaCalculatorService);
    }

    computeArea(square) {
        let area = square.width * square.width;

        return console.log(`The square area is ${area}`);
    }
}

class TriangleAreaCalculatorService {
    constructor() {
        InterfaceAreaCalculatorService.ensureInterfaceImplementation(TriangleAreaCalculatorService);
    }

    computeArea(triangle) {
        let area = (triangle.width * triangle.heigth) / 2;

        return console.log(`The triangle area is ${area}`);
    }
}


const rectangleAreaCalculatorService = new RectangleAreaCalculatorService();
const squareAreaCalculatorService = new SquareAreaCalculatorService();
const triangleAreaCalculatorService = new TriangleAreaCalculatorService();

const rectangle = new Rectangle(2, 5);
rectangleAreaCalculatorService.computeArea(rectangle);

const square = new Square(5);
squareAreaCalculatorService.computeArea(square);

const triangle = new Triangle(2, 9);
triangleAreaCalculatorService.computeArea(triangle);

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





