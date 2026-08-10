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

form.addEventListener("submit", (event) => { // I'll add a behaviour for displaying books each time user submit - for updating.//
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
    container.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (const book of myLibrary) {
        const newRow = document.createElement("tr");

        const cell = document.createElement("td");
        newRow.appendChild(cell);
        cell.textContent = book.title;

        const cell2 = document.createElement("td");
        newRow.appendChild(cell2);
        cell2.textContent = book.author;

        const cell3 = document.createElement("td");
        newRow.appendChild(cell3);
        cell3.textContent = book.page;

        const cell4 = document.createElement("td");
        newRow.appendChild(cell4);
        cell4.textContent = book.id;

        const cell5 = document.createElement("td");
        newRow.appendChild(cell5);

        if (book.status === false) {
            cell5.textContent = "not yet read";
        } else {
            cell5.textContent = "read";
        }

        const cell6 = document.createElement("td");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "REMOVE";

        cell6.appendChild(removeBtn);
        newRow.appendChild(cell6);

        tbody.appendChild(newRow);
    }
}
