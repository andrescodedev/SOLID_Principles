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

class InterfaceBlackWhitePrint extends InterfaceTemplate {
    static interfaceBlackWhitePrintMethods = {
        printBlackAndWhite: function () { }
    }
}

class InterfaceColorPrint extends InterfaceTemplate {
    static interfaceColorPrintMethods = {
        printColor: function () { }
    }
}

class InterfaceScan extends InterfaceTemplate {
    static interfaceScanMethods = {
        scan: function () { }
    }
}

class InterfaceFax extends InterfaceTemplate {
    static interfaceFaxMethods = {
        sendFax: function () { }
    }
}

class BlackWhitePrinter {
    constructor() {
        InterfaceBlackWhitePrint.ensureInterfaceImplementation(
            BlackWhitePrinter,
            InterfaceBlackWhitePrint.interfaceBlackWhitePrintMethods
        );
    }

    printBlackAndWhite() {
        console.log(`Black White Printer is printing in black and white`);
    }
}

class ColorPrinter {
    constructor() {
        InterfaceColorPrint.ensureInterfaceImplementation(
            ColorPrinter,
            InterfaceColorPrint.interfaceColorPrintMethods
        );
    }

    printColor() {
        console.log(`Color printer is printing in color`);
    }
}

class MultifunctionalPrinter {

    constructor() {
        //Implementing the interface InterfaceBlackWhitePrint
        InterfaceBlackWhitePrint.ensureInterfaceImplementation(
            MultifunctionalPrinter,
            InterfaceBlackWhitePrint.interfaceBlackWhitePrintMethods
        );

        //Implementing the interface InterfaceColorPrint
        InterfaceColorPrint.ensureInterfaceImplementation(
            MultifunctionalPrinter,
            InterfaceColorPrint.interfaceColorPrintMethods
        );

        //Implementing the interface InterfaceScan
        InterfaceScan.ensureInterfaceImplementation(
            MultifunctionalPrinter,
            InterfaceScan.interfaceScanMethods
        );

        //Implementing the interface InterfaceFax
        InterfaceFax.ensureInterfaceImplementation(
            MultifunctionalPrinter,
            InterfaceFax.interfaceFaxMethods
        );
    }


    printBlackAndWhite() {
        console.log(`Multifunctional printer is printing in black and white`);
    };

    printColor() {
        console.log(`Multifunctional printer is printing in color`);
    };

    scan() {
        console.log(`Multifunctional printer is scaning documents`);
    };

    sendFax() {
        console.log(`Multifunctional printer is sending a fax`);
    };
}

const blackWhitePrinter = new BlackWhitePrinter();
blackWhitePrinter.printBlackAndWhite();

const colorPrinter = new ColorPrinter();
colorPrinter.printColor();

const multifunctionalPrinter = new MultifunctionalPrinter();
multifunctionalPrinter.printBlackAndWhite();
multifunctionalPrinter.printColor();
multifunctionalPrinter.scan();
multifunctionalPrinter.sendFax();