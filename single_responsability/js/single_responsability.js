/* 
    SINGLE RESPONSABILITY PRINCIPLE - PRINCIPIO DE RESPONSABILIDAD UNICA

        - Una clase debe tener una sola razón pora cambiar, esto implica que debe tener
          solo una responsabilidad.

        - Tener una única responsabilidad !== Hacer una única cosa (function/method)
*/

//Incorrect
//A class with more than 1 responsability
class Library {
    booksList = [];
    usersList = [];
    loansList = [];

    addBook(book) {
        this.booksList.push(book);
    }

    addUser(user) {
        this.usersList.push(user);
    }

    deleteUser(user) {
        //code to delete user
    }

    loanBook(book,user) {
        let loanBook = {book:book,user:user};
        this.loansList.push(loanBook);
    }
}


//Correct
//Entities
class Book {
    constructor(title, author, availableCopies) {
        this.title = title;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}

class User {
    constructor(numIdentification, name, email) {
        this.numIdentification = numIdentification;
        this.name = name;
        this.email = email;
    }
}

class BookRegistration {
    constructor(book, registrationDate) {
        this.book = book;
        this.registrationDate = registrationDate;
    }
}

class UserRegistration {
    constructor(user, registrationDate) {
        this.user = user;
        this.registrationDate = registrationDate;
    }
}

class Loan {
    constructor(user, book, loanDate) {
        this.user = user;
        this.book = book;
        this.loanDate = loanDate;
    }
}

class Refund {
    constructor(user, book, refundDate) {
        this.user = user;
        this.book = book;
        this.refundDate = refundDate;
    }
}

// BOOK MANAGEMENT MODULE
// Services 
class BookRegistrationService {
    bookRegistrationRepository = new BookRegistrationRepository();
    
    registerBook(bookRegistration) {
        this.bookRegistrationRepository.saveBook(bookRegistration);
    }

    //This is a new method for registration of many books
    registerBooks(booksRegistration) {
        for(let book of booksRegistration) {
            this.bookRegistrationRepository.saveBook(book);
        }

        console.log(`Books registered successfully`);
    }
}

class BookListingService {
    bookListingRepository = new BookListingRepository();

    getAllBooks() {
        return this.bookListingRepository.listAllBooks();
    }

    //This is a new method for listing books by author
    getBooksByAuthor(author) {
        return this.bookListingRepository.listBooksByAuthor(author);
    }
}

// Repositories
class BookRepository {
    static booksDB = [];
}

class BookRegistrationRepository extends BookRepository {
    saveBook(bookRegistration) {
        BookRepository.booksDB.push(bookRegistration);
    }
}

class BookListingRepository extends BookRepository {
    listAllBooks() {
        return BookRepository.booksDB;
    }

    //This is a new method for listing books by author
    listBooksByAuthor(author) {
        return BookRepository.booksDB.filter(register => register.book.author === author);
    }
}

// USER MANAGEMENT MODULE
// Services
class UserRegistrationService {
    userRegistrationRepository = new UserRegistrationRepository();

    registerUser(userRegistration) {
        this.userRegistrationRepository.saveUser(userRegistration);
    }
}

class UserListingService {
    userListingRepository = new UserListingRepository();

    getAllUsers() {
        return this.userListingRepository.listAllUsers();
    }

    //This is a new method for listing user by identification
    getUserByIdentification(numIdentification) {
        return this.userListingRepository.listUserByIdentification(numIdentification);
    }
}

// Repositories
class UserRepository {
    static usersDB = [];
}

class UserRegistrationRepository extends UserRepository {
    saveUser(userRegistration) {
        UserRepository.usersDB.push(userRegistration);
        console.log(`User registered successfully`);
    }
}

class UserListingRepository extends UserRepository {
    listAllUsers() {
        return UserRepository.usersDB;
    }

    //This is a new method for listing user by identification
    listUserByIdentification(numIdentification) {
        return UserRepository.usersDB.filter(register => register.user.numIdentification === numIdentification);
    }
}

// LOAN MANAGEMENT MODULE
// Services
class BookLoanService {
    bookLoanRepository = new BookLoanRepository();

    lendBook(loan) {
        this.bookLoanRepository.saveLoan(loan);
    }
}

class BookRefundService {
    bookRefundRepository = new BookRefundRepository();

    bookRefund(refund) {
        this.bookRefundRepository.saveRefund(refund);
    }
}

// Repositories
class LoanRepository {
    static bookLoanDB = [];
    static bookRefundDB = [];
}

class BookLoanRepository extends LoanRepository {
    saveLoan(loan) {
    LoanRepository.bookLoanDB.push(loan);
        console.log(`Loan registered successfully`);
    }
}

class BookRefundRepository extends LoanRepository{
    saveRefund(refund) {
        LoanRepository.bookRefundDB.push(refund);
        console.log(`Refund successfully`);
    }
}

// Books to the registration
const book1 = new Book('Dragon ball','Akira Toriyama',3);
const book2 = new Book('Dragon ball z','Akira Toriyama',1);
const book3 = new Book('Dragon ball daima','Akira Toriyama',1);
const book4 = new Book('Materia Oscura','Stephen Hawking',2);

// Users to the registration
const user1 = new User('123','Andrew','andrewn@hotmail.com');
const user2 = new User('456','Nolan','jnolan@hotmail.com');

// BOOKS REGISTRATION PROCESS
const bookListingService = new BookListingService();
const bookRegistrationService = new BookRegistrationService();

let booksToRegistration = [];

const bookRegistration1 = new BookRegistration(book1,'09/11/2024');
//bookRegistrationService.registerBook(bookRegistration1);
booksToRegistration.push(bookRegistration1);

const bookRegistration2 = new BookRegistration(book2,'10/11/2024');
//bookRegistrationService.registerBook(bookRegistration2);
booksToRegistration.push(bookRegistration2);

const bookRegistration3 = new BookRegistration(book3,'10/11/2024');
//bookRegistrationService.registerBook(bookRegistration3);
booksToRegistration.push(bookRegistration3);

const bookRegistration4 = new BookRegistration(book4,'10/11/2024');
//bookRegistrationService.registerBook(bookRegistration4);
booksToRegistration.push(bookRegistration4);

bookRegistrationService.registerBooks(booksToRegistration);

console.log(bookListingService.getAllBooks());
//console.log(bookListingService.getBooksByAuthor(book4.author));

// USERS REGISTRATION PROCESS
const userListingService = new UserListingService();
const userRegistrationService = new UserRegistrationService();

const userRegistration1 = new UserRegistration(user1,'10/11/2024');
userRegistrationService.registerUser(userRegistration1);

const userRegistration2 = new UserRegistration(user2,'10/11/2024');
userRegistrationService.registerUser(userRegistration2);

console.log(userListingService.getAllUsers());
//console.log(userListingService.getUserByIdentification(user2.numIdentification));

// BOOKS LOAN PROCESS
/*const bookLoanService = new BookLoanService();

const loan1 = new Loan(user1,book2,'09/11/2024');
bookLoanService.lendBook(loan1);

const loan2 = new Loan(user1,book3,'09/11/2024');
bookLoanService.lendBook(loan2);

const loan3 = new Loan(user2,book1,'07/11/2024');
bookLoanService.lendBook(loan3);

console.log(LoanRepository.bookLoanDB);*/



