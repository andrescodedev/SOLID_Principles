/* 
    INTERFACES SEGREGATION PRINCIPLE

    - Este principio establece que ninguna clase debería ser forzada a inplementar interfaces
      o métodos que no va a utilizar.
*/

//INCORRECT
/*class InterfacePrinterManagement {
    printBlackAndWhite() {};

    printColor() {};

    scan() {};

    sendFax() {};
}

class BlackWhitePrinter extends InterfacePrinterManagement {
    printBlackAndWhite() {
        console.log(`Print in black and white`);
    };

    printColor() {
        throw new Error(`This printer can't print in color`);
    };

    scan() {
        throw new Error(`This printer can't scan`);
    };

    sendFax() {
        throw new Error(`This printer can't send a fax`);
    };
}

class ColorPrinter extends PrinterManagement {
    printBlackAndWhite() {
        throw new Error(`This printer can't print in black and white`);
    };

    printColor() {
        console.log(`Print in color`);
    };

    scan() {
        throw new Error(`This printer can't scan`);
    };

    sendFax() {
        throw new Error(`This printer can't send a fax`);
    };
}

class MultifunctionalPrinter extends PrinterManagement {
    printBlackAndWhite() {
        console.log(`Print in black and white`);
    };

    printColor() {
        console.log(`Print in color`);
    };

    scan() {
        console.log(`Scan documents`);
    };

    sendFax() {
        console.log(`Send a fax`);
    };
}*/

//CORRECT
class InterfaceMultifunctional {
    printBlackAndWhite() {};

    printColor() {};

    scan() {};

    sendFax() {};
}

class InterfaceBlackWhitePrint {
    printBlackAndWhite() {};
}

class InterfaceColorPrint {
    printColor() {};
}

class InterfaceScan {
    scan() {};
}

class InterfaceFax {
    sendFax() {};
}

class BlackWhitePrinter extends InterfaceBlackWhitePrint {
    printBlackAndWhite() {
        console.log(`Print in black and white`);
    }
}

class ColorPrinter extends InterfaceColorPrint {
    printColor() {
        console.log(`Print in color`);
    }
}

class MultifunctionalPrinter extends InterfaceMultifunctional {
    printBlackAndWhite() {
        console.log(`Print in black and white`);
    };

    printColor() {
        console.log(`Print in color`);
    };

    scan() {
        console.log(`Scan documents`);
    };

    sendFax() {
        console.log(`Send a fax`);
    };
}







