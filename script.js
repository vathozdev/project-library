const myLibrary = [];
const container = document.querySelector(".container");
class Book {
  constructor(title, author, page, id) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.id = id;
    this.status = false;
  }

  changeStatus() {
    this.status = !this.status;
  }
}
const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
  form.style.display = "block";
});
const cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

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
  const id = crypto.randomUUID();

  myLibrary.push(
    new Book(formValues.title, formValues.author, Number(formValues.page), id),
  );
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
      cell5.style.color = "#8b2f24";
      cell5.style.fontWeight = "bold";
    } else {
      cell5.textContent = "read";
      cell5.style.color = "#2f6f3b";
      cell5.style.fontWeight = "bold";
    }

    const cell6 = document.createElement("td");

    const bookId = book.id;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "REMOVE";
    removeBtn.dataset.bookId = bookId;

    removeBtn.addEventListener("click", () => {
      const clickedBtnId = removeBtn.dataset.bookId;

      const filteredArr = myLibrary.filter((book) => book.id !== clickedBtnId);

      myLibrary.length = 0;
      myLibrary.push(...filteredArr);

      displayBooks();
    });

    cell6.appendChild(removeBtn);

    const toggleButton = document.createElement("button");
    if (book.status === true) {
      toggleButton.textContent = "UNREAD";
    } else {
      toggleButton.textContent = "READ";
    }

    toggleButton.dataset.bookId = bookId;

    toggleButton.addEventListener("click", () => {
      const bookToToggle = myLibrary.find(
        (book) => book.id === toggleButton.dataset.bookId,
      );

      bookToToggle.changeStatus();
      displayBooks();
    });

    cell6.appendChild(toggleButton);
    newRow.appendChild(cell6);
    tbody.appendChild(newRow);
  }
}

showTitleError = () => {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = "You need to enter a title.";
  }
  titleError.className = "error active";
};

showAuthorError = () => {
  if (authorInput.validity.valueMissing) {
    authorError.textContent = "You need to enter an author.";
  }
  authorError.className = "error active";
};

showPageError = () => {
  if (pageInput.validity.valueMissing) {
    pageError.textContent = "You need to enter a page number.";
  } else if (pageInput.validity.rangeUnderflow) {
    pageError.textContent = `Page number should be at least ${pageInput.min}.`;
  } else if (pageInput.validity.rangeOverflow) {
    pageError.textContent = `Page number should be no more than ${pageInput.max}.`;
  }
  pageError.className = "error active";
};
const titleError = document.querySelector("#title + .error");
const authorError = document.querySelector("#author + .error");
const pageError = document.querySelector("#page + .error");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#page");

titleInput.addEventListener("input", () => {
  if (titleInput.validity.valid) {
    titleError.textContent = "";
    titleError.className = "error";
  } else {
    showTitleError();
  }
});

authorInput.addEventListener("input", () => {
  if (authorInput.validity.valid) {
    authorError.textContent = "";
    authorError.className = "error";
  } else {
    showAuthorError();
  }
});

pageInput.addEventListener("input", () => {
  if (pageInput.validity.valid) {
    pageError.textContent = "";
    pageError.className = "error";
  } else {
    showPageError();
  }
});
