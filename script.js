const myLibrary = [];

function Book(title, author, page, id) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = id;
    this.status = false;
}
Book.prototype.changeStatus = function() {
    this.status = !this.status
}
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
});

function addBookToLibrary() {

const id = crypto.randomUUID()

myLibrary.push(new Book(formValues.title, formValues.author, Number(formValues.page),id));

}
