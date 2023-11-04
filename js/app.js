//open sidebar
let sidebarBtn = document.querySelector(`.sidebarBtn`);
let sidebar = document.querySelector(`.sidebar`);

function openSidebar (){
    sidebar.classList.add(`active`);
}

sidebarBtn.addEventListener(`click`, openSidebar);

//close sidebar
let crossbtn = document.querySelector(`.crossbtn`);

function closeSidebar (event) {
    sidebar.classList.remove(`active`);
}
crossbtn.addEventListener(`click`, closeSidebar);