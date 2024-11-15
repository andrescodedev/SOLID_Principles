/* 
    LISKOV SUBSTITUTION PRINCIPLE

    - Toda clase que es hija de otra clase, debe poder utilizarse como si fuera el mismo padre.

    - Nadie que necesite utilizar el padre, tiene que comportarse diferente si interactua con cualquiera
      de sus descendientes.

    - Los subtipos deben ser substituibles por su tipo base.

    - Las subclases deben ser sustituibles por sus clases base, es decir, los objetos de una clase
      deben poder ser remplazados por los objetos de una subclase sin afectar a la correccion del programa.
*/

//Incorrect
/*class Vehicle {
    accelerate() {
        console.log(`accelerating...`);
    }

    curb() {
        console.log(`breaking...`);
    }
}

class Car extends Vehicle {
    accelerate() {
        super.accelerate();
    }

    curb() {
        super.curb();
    }
}

class Bycicle extends Vehicle {
    accelerate() {
        throw new Error(`A bycicle Can't accelerate`);
    }

    curb() {
        super.curb();
    }
}

class AccelerateProccess {
    proccessAccelerate(vehicle) {
        vehicle.accelerate();
    }
}

class CurbProccess {
    proccessCurb(vehicle) {
        vehicle.curb();
    }
}
const accelerateProccess = new AccelerateProccess();
const curbProccess = new CurbProccess();

const car = new Car();
curbProccess.proccessCurb(car);
accelerateProccess.proccessAccelerate(car);

const bycicle = new Bycicle();
accelerateProccess.proccessAccelerate(bycicle);
curbProccess.proccessCurb(bycicle);*/

//CORRECT
class AccelerateMechanism {
    accelerate() {}
}

class BreakingMechanism {
    breaking() {}
}

class PedalMechanism {
    pedal() {}
}

class ByciclePedalingSystem extends PedalMechanism {
    pedal() {
        console.log(`Bycicle pedaling system  ...`);
    }
}

class BycicleBreakingSystem extends BreakingMechanism {
    breaking() {
        console.log(`Bycicle breaking system ...`);
    }
}

class CarAcceleratingSystem extends AccelerateMechanism {
    accelerate() {
        console.log(`Car accelerating system...`);
    }
}

class CarBreakingSystem extends BreakingMechanism {
    breaking() {
        console.log(`Car breaking system...`);
    }
}

class MotorcycleAcceleratingSystem extends AccelerateMechanism {
    accelerate() {
        console.log(`Motorcycle accelerating system`);
    }
}

class MotorcycleBreakingSystem extends BreakingMechanism {
    breaking() {
        console.log(`Motorcycle breaking System`);
    }
}

//Si el sistema de pedaleo de la moped es diferente al de una bicicleta
class MopedPedalingSystem extends PedalMechanism {
    pedal() {
        console.log(`Motorcycle pedaling system`);
    }
}

//Si el sistema de pedaleo de la moped es igual al de una bicicleta
/*class MopedPedalingSystem extends ByciclePedalingSystem {
    
}*/

class AcceleratingProccess {
    static proccessAccelerating(acceleratingSystem) {
        acceleratingSystem.accelerate();
    }
}

class BreakingProccess {
    static proccessBreaking(breakingSystem) {
        breakingSystem.breaking();
    }
}

class PedalingProccess {
    static proccessPedaling(pedalSystem) {
        pedalSystem.pedal();
    }
}

class Bycicle {
    pedalSystem;
    breakingSystem;
}

class Car {
    acceleratingSystem;
    breakingSystem;
}

class Mercedez extends Car {
    
}

class Motorcycle {
    acceleratingSystem;
    breakingSystem;
}

class Bws extends Motorcycle {

}

class Moped extends Motorcycle {
    pedalSystem;
}




const bycicleBreakingSystem = new BycicleBreakingSystem();
const byciclePedalingSystem = new ByciclePedalingSystem();

const carAcceleratingSystem = new CarAcceleratingSystem();
const carBreakingSystem = new CarBreakingSystem();

const motorcycleAcceleratingSystem = new MotorcycleAcceleratingSystem();
const motorcycleBreakingSystem = new MotorcycleBreakingSystem();
const mopedPedalingSystem = new MopedPedalingSystem();

/*const bycicle = new Bycicle();
bycicle.breakingSystem = bycicleBreakingSystem;
bycicle.pedalSystem = byciclePedalingSystem;
PedalingProccess.proccessPedaling(bycicle.pedalSystem);
BreakingProccess.proccessBreaking(bycicle.breakingSystem);*/

/*const mercedez = new Mercedez();
mercedez.acceleratingSystem = carAcceleratingSystem;
mercedez.breakingSystem = carBreakingSystem;
AcceleratingProccess.proccessAccelerating(mercedez.acceleratingSystem);
BreakingProccess.proccessBreaking(mercedez.breakingSystem);*/

const bws = new Bws();
bws.acceleratingSystem = motorcycleAcceleratingSystem;
bws.breakingSystem = motorcycleBreakingSystem;
AcceleratingProccess.proccessAccelerating(bws.acceleratingSystem);
BreakingProccess.proccessBreaking(bws.breakingSystem);

const moped = new Moped();
moped.acceleratingSystem = motorcycleAcceleratingSystem;
moped.breakingSystem = motorcycleBreakingSystem;
moped.pedalSystem = mopedPedalingSystem;
AcceleratingProccess.proccessAccelerating(moped.acceleratingSystem);
BreakingProccess.proccessBreaking(moped.breakingSystem);
PedalingProccess.proccessPedaling(moped.pedalSystem);




