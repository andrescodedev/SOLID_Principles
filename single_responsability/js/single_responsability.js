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
    
    registerBook(book) {
        this.bookRegistrationRepository.saveBook(book);
    }
}

class BookListingService {
    bookListingRepository = new BookListingRepository();

    getAllBooks() {
        return this.bookListingRepository.listAllBooks();
    }

    getBooksByAuthor(author) {
        return this.bookListingRepository.listBooksByAuthor(author);
    }
}

// Repositories
class BookRepository {
    booksDB = [];
}

class BookRegistrationRepository extends BookRepository {
    saveBook(book) {
        this.booksDB.push(book);
        console.log(`Book registered successfully`);
    }
}

class BookListingRepository extends BookRepository {
    listAllBooks() {
        return this.booksDB;
    }

    listBooksByAuthor(author) {
        return this.booksDB.filter(book => book.author === author);
    }
}

// USER MANAGEMENT MODULE
// Services
class UserRegistrationService {
    userRegistrationRepository = new UserRegistrationRepository();

    registerUser(user) {
        this.userRegistrationRepository.saveUser(user);
    }
}

class UserListingService {
    userListingRepository = new UserListingRepository();

    getAllUsers() {
        return this.userListingRepository.listAllUsers();
    }
}

// Repositories
class UserRepository {
    usersDB = [];
}

class UserRegistrationRepository extends UserRepository {
    saveUser(user) {
        this.usersDB.push(user);
        console.log(`User registered successfully`);
    }
}

class UserListingRepository extends UserRepository {
    listAllUsers() {
        return this.usersDB;
    }
}

// LOAN MANAGEMENT MODULE
class BookLoanService {
    bookLoanDB = [];

    bookLoan(loan) {
        this.bookLoanDB.push(loan);
    }
}

class BookRefundService {
    bookRefundDB = [];

    bookRefund(refund) {
        this.bookRefundDB.push(refund);
    }
}

const book1 = new Book('Dragon ball','Akira Toriyama',3);
const book2 = new Book('Dragon ball z','Akira Toriyama',1);
const book3 = new Book('Dragon ball daima','Akira Toriyama',1);

const user1 = new User('123','Andrew','andrewn@hotmail.com');
const user2 = new User('456','Nolan','jnolan@hotmail.com');

/*const loan1 = new Loan(user1,book2,'09/11/2024');
const loan2 = new Loan(user1,book3,'09/11/2024');
const loan3 = new Loan(user2,book1,'07/11/2024');*/

console.log()