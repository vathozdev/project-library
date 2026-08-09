const myLibrary = [];

function Book(title, author, page, id, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = id;
    this.status = status;
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