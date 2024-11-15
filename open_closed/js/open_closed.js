/* 
    OPEN - CLOSED PRINCIPLE

    - Una entidad de software (modulos, clases, funciones, métodos) debe quedarse abierta para su extensión
      pero cerrada para su modificación.

    - La herencia y el polimorfismo de la poo nos ayudan a cumplir este principio(no son la unica herramienta)

*/

//Incorrect
/*class Rectangle {
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

class AreaCalculatorService {
    computeArea(shape) {
        console.log(typeof(shape));
        let area = 0;
        //if or switch
        if(shape instanceof Rectangle) {
            console.log('compute ractngle area');
            area = shape.width * shape.heigth;
        } else if(shape instanceof Square) {
            console.log('compute square area');
            area = shape.width * shape.width;
        } else if(shape instanceof Triangle) {
            console.log('compute triangle area');
            area = (shape.width * shape.heigth)/2;
        }
        
        return area;
    }
}

const areaCalculatorService = new AreaCalculatorService();

const rectangle1 = new Rectangle(2,2);
console.log(areaCalculatorService.computeArea(rectangle1));

const square1 = new Square(3);
console.log(areaCalculatorService.computeArea(square1));*/


//CORRECT
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

//Services
class AreaCalculatorService {
    //Hacer un contructor que no permita instanciar

    //Define methods without functionality
    computeArea(shape){}
}

class RectangleAreaCalculatorService extends AreaCalculatorService {
    computeArea(rectangle) {
        let area = rectangle.width * rectangle.heigth;

        return console.log(`The rectangle area is ${area}`);
    }
}

class SquareAreaCalculatorService extends AreaCalculatorService {
    computeArea(square) {
        let area = square.width * square.width;

        return console.log(`The square area is ${area}`);
    }
}

class TriangleAreaCalculatorService extends AreaCalculatorService {
    computeArea(triangle) {
        let area = (triangle.width * triangle.heigth)/2;

        return console.log(`The triangle area is ${area}`);
    }
}

//Instances
const rectangleAreaCalculatorService = new RectangleAreaCalculatorService();
const squareAreaCalculatorService = new SquareAreaCalculatorService();
const triangleAreaCalculatorService = new TriangleAreaCalculatorService();

const rectangle = new Rectangle(2,5);
rectangleAreaCalculatorService.computeArea(rectangle);

const square = new Square(5);
squareAreaCalculatorService.computeArea(square);

const triangle = new Triangle(2,9);
triangleAreaCalculatorService.computeArea(triangle);