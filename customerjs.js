let mainPage = document.getElementById("main-page");
let detailPage = document.getElementById("detail-page");
let editPage = document.getElementById("edit-page");
let addPage = document.getElementById("add-page");

let mainbackbtn = document.getElementById("main-page-back-btn");
let detailbackbtn = document.getElementById("detail-page-back-btn");
let editbackbtn = document.getElementById("edit-page-back-btn");
let addbackbtn = document.getElementById("add-page-back-btn");

let rows = document.querySelectorAll("#customer-table tbody tr");

let addCustomerbtn = document.getElementById("add-new-cutomer-btn");

let detailEditbtn = document.getElementById("customer-edit");
let detailCancelbtn = document.getElementById("customer-delete");

let editSavebtn = document.getElementById("edit-save");
let editdeletebtn = document.getElementById("edit-delete");

let newSavebtn = document.getElementById("add-save");
let newdeletebtn = document.getElementById("add-delete");

detailbackbtn.addEventListener("click", showMainpage);
editbackbtn.addEventListener("click", showMainpage);
addbackbtn.addEventListener("click", showMainpage);
addCustomerbtn.addEventListener("click", showaddpage);

editdeletebtn.addEventListener('click',showDetailPage);
newdeletebtn.addEventListener('click',showMainpage);

detailEditbtn.addEventListener('click',showEditpage);

rows.forEach(function (row) {
  row.addEventListener("click", showDetailPage);
});

function showMainpage() {
  mainPage.classList.add("active");
  detailPage.classList.remove("active");
  editPage.classList.remove("active");
  addPage.classList.remove("active");
}
function showaddpage() {
  addPage.classList.add("active");
  mainPage.classList.remove("active");
  detailPage.classList.remove("active");
  editPage.classList.remove("active");
}
function showDetailPage() {
  detailPage.classList.add("active");
  mainPage.classList.remove("active");
  editPage.classList.remove("active");
  addPage.classList.remove("active");
}
function showEditpage(){
    editPage.classList.add("active");
    mainPage.classList.remove("active");
    detailPage.classList.remove("active");
    addPage.classList.remove("active");
}