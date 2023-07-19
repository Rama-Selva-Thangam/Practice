let mainPage = document.getElementById("main-page");
let editPage = document.getElementById("edit-page");
let addPage = document.getElementById("add-new-product-page");

let rows = document.querySelectorAll("#products-table tbody tr");

let mainBackbtn = document.getElementById("main-page-back-btn");
let editPagebackbtn = document.getElementById("edit-page-back-btn");
let addPagebackbtn = document.getElementById("add-new-product-page-back-btn");

let addProductbtn = document.getElementById("new-product-add-btn");

let mainsearchcancel = document.getElementById("main-search-cancel");

let editPagesavebtn = document.getElementById("edit-save");
let editPagedeletebtn = document.getElementById("edit-delete");

let newPagesavebtn = document.getElementById("new-save");
let newPagedeletebtn = document.getElementById("new-delete");

addProductbtn.addEventListener("click", showAddPage);
editPagebackbtn.addEventListener("click", showMainpage);
addPagebackbtn.addEventListener("click", showMainpage);
newPagedeletebtn.addEventListener("click", showMainpage);
editPagedeletebtn.addEventListener("click", showMainpage);
rows.forEach(function (row) {
  row.addEventListener("click", showEditPage);
});

function showAddPage() {
  addPage.classList.add("active");
  mainPage.classList.remove("active");
  editPage.classList.remove("active");
}

function showMainpage() {
  mainPage.classList.add("active");
  editPage.classList.remove("active");
  addPage.classList.remove("active");
}

function showEditPage() {
  editPage.classList.add("active");
  mainPage.classList.remove("active");
  addPage.classList.remove("active");
}
