class Book {
    title : string;
    pages : number;
    authors : string;
    type : string;
    stock : number;

    constructor (title : string, pages : number, authors : string, type : string, stock : number) {
    this.title = title;
    this.pages = pages;
    this.authors = authors;
    this.type = type;
    this.stock = stock;
    }

    borrowbook() {
        if (this.stock === 0) {
            throw new Error(`Sorry, "${this.title}" is out of stock.`)
        }
        this.stock--;
        console.log(
            `You have borrowed "${this.title}". Remaining Stock : ${this.stock}`,
        );
    }

    returnbook() {
        this.stock++;
        console.log(
            `You have returned "${this.title}". Remaining Stock : ${this.stock}`
        )
    }
}

const novelBook = new Book ("Laskar Pelangi", 529, "Andrea Hirata", "Novel", 5);
const comicBook = new Book ("One Piece", 1000, "Elichiro Oda", "Comic", 10);

novelBook.borrowbook();
comicBook.returnbook();

