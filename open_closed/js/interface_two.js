/* 
    IMPLEMENTING INTERFACES WITHOUT EXTENDS KEYWORD
*/

class InterfaceTemplate {
    constructor() {
        if (this.constructor) {
            throw new Error(`You can't create an instance for an interface`);
        }
    }

    //This Method is use to ensure implementation of the interface Methods in the template(class)
    static ensureInterfaceImplementation(template, interfaceMethods) {
        for (const method in interfaceMethods) {

            if (!(method in template.prototype) ||
                typeof template.prototype[method] !== "function") {
                throw new Error(`The method ${method} must be implement in the class ${template.name}`);
            }
        }
    }
}

class InterfaceGps extends InterfaceTemplate {
    //methods without implementation and that they aren't statics
    static gpsMethods = {
        getCoordinates: function () { }
    }
}

class InterfaceRadio extends InterfaceTemplate {

    //methods without implementation and that they aren't statics
    static radioMethods = {
        startRadio: function () { },
        stopRadio: function () { },
    }

}

//This class must implement that two interfaces
class Smartphone {
    constructor() {
        InterfaceGps.ensureInterfaceImplementation(Smartphone,InterfaceGps.gpsMethods);
        InterfaceRadio.ensureInterfaceImplementation(Smartphone,InterfaceRadio.radioMethods);
    }

    getCoordinates() {}
    startRadio() {}
    stopRadio() {}
}

const smartPhone = new Smartphone();