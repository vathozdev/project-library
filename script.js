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
function displayBooks() {
    const table = document.createElement("table");
        container.appendChild(table)
    const thead = document.createElement("thead");
        table.appendChild(thead);
    const tbody = document.createElement("tbody");
        table.appendChild(tbody);
    for (const book of myLibrary) {
        const newRow = document.createElement("tr");
        const cell = document.createElement("td");
            newRow.appendChild(cell);
            tbody.appendChild(newRow);
      }
} 
