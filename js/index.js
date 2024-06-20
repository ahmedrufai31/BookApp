const List = document.querySelector("#book-list ul");

List.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    List.removeChild(li);
  }
});

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookInput = addForm.querySelector('input[type="text"]');
  const bookValue = bookInput.value;

  // create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  //  append elements
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  List.appendChild(li);

  // add content
  deleteBtn.innerHTML = "delete";
  bookName.innerHTML = bookValue;

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");
});

// hide books
const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    List.style.display = "none";
  } else {
    List.style.display = "initial";
  }
});

// search filter
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const books = List.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });       
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', (e) => {
 if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) => {
        if(panel == targetPanel){
            panel.classList.add('active');
        }else{
            panel.classList.remove('active');
        }
    })
 }
});