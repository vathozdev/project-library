const myLibrary = [];
const container = document.querySelector(".container");
function Book(title, author, page, id) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = id;
    this.status = false;
}
const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
    form.style.display = "block";
})
const cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", () => {
    form.style.display = "none";
})
Book.prototype.changeStatus = function() {
    this.status = !this.status
}
const form = document.querySelector("form");

form.addEventListener("submit", (event) => { 
    event.preventDefault();

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    addBookToLibrary(formValues);
    displayBooks();
    form.reset();
    form.style.display = "none";
});

function addBookToLibrary(formValues) {

const id = crypto.randomUUID()

myLibrary.push(new Book(formValues.title, formValues.author, Number(formValues.page),id));

}
const table = document.createElement("table");
container.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const theadRow = document.createElement("tr");
thead.appendChild(theadRow);

const headers = ["Title", "Author", "Pages", "ID", "Status", "Actions"];

headers.forEach((header) => {
    const eachData = document.createElement("th");
    eachData.textContent = header;
    theadRow.appendChild(eachData);
});

const tbody = document.createElement("tbody");
    table.appendChild(tbody);

function displayBooks() {
    tbody.replaceChildren();

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

        const bookId = book.id;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "REMOVE";
        removeBtn.dataset.bookId = bookId;

        removeBtn.addEventListener("click", () => {
            const clickedBtnId = removeBtn.dataset.bookId;

            const filteredArr = myLibrary.filter(
                (book) => book.id !== clickedBtnId
            );

            myLibrary.length = 0;
            myLibrary.push(...filteredArr);

            displayBooks();
        });

        cell6.appendChild(removeBtn);

        const toggleButton = document.createElement("button");
        if (book.status === true ) {
             toggleButton.textContent = "UNREAD";
        } else {toggleButton.textContent = "READ";}
       
        toggleButton.dataset.bookId = bookId;

        toggleButton.addEventListener("click", () => {
            const bookToToggle = myLibrary.find(
                (book) => book.id === toggleButton.dataset.bookId
            );

            bookToToggle.changeStatus();
            displayBooks();
        });

        cell6.appendChild(toggleButton);
        newRow.appendChild(cell6);
        tbody.appendChild(newRow);
    }
}

