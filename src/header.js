const lang = document.querySelector('.lang__area');
const navMenu = document.querySelector('.nav__menu');
const navSearch = document.querySelector('.nav__search');
//modal
const search = document.querySelector('#search'); 
const searchBox = document.querySelector('.search__box');
const searchForm = document.querySelector('#search__form');
const searchInput = searchBox.querySelector('input');

const searchBtn = document.querySelector('.search_btn');
const searchClearBtn = searchBox.querySelector('.search_clear');
const searchClearBtnTop = searchBox.querySelector('.search__box_close > button');
const searchBoxBtn = searchBox.querySelector('.search__box_btn > button');

const logList = document.querySelector('.search__log_list');
let localLog = [];

const USER_KEY = 'userKey'
const SHOW = 'show';
const HIDE = 'hide';
const ON = 'on';

// search 보이기,숨기기
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    lang.classList.add(HIDE);
    navMenu.classList.add(HIDE);
    navSearch.classList.add(HIDE);

    search.classList.add(SHOW)
    searchBox.classList.add(SHOW);

    document.body.style.overflowY = 'hidden';
});
//search box 닫기 버튼 Top - 1
searchClearBtnTop.addEventListener('click', (e) => { 
    e.preventDefault();

    lang.classList.remove(HIDE);
    navMenu.classList.remove(HIDE);
    navSearch.classList.remove(HIDE);
    search.classList.remove(SHOW)
    searchBox.classList.remove(SHOW);

    clearBtnHide();
    empty();
    searchInput.value = '';

    document.body.style.overflowY = 'auto';
});

//search box 닫기 버튼 - 1
searchBoxBtn.addEventListener('click', (e) => { 
    e.preventDefault();

    lang.classList.remove(HIDE);
    navMenu.classList.remove(HIDE);
    navSearch.classList.remove(HIDE);
    search.classList.remove(SHOW)
    searchBox.classList.remove(SHOW);

    clearBtnHide();
    empty();
    searchInput.value = '';

    document.body.style.overflowY = 'auto';
});
//modal
window.addEventListener('click', (e) => { 
    e.target === search ? search.classList.remove(SHOW) : false;
    e.target === search ? lang.classList.remove(HIDE) : false;
    e.target === search ? navMenu.classList.remove(HIDE) : false;
    e.target === search ? navSearch.classList.remove(HIDE) : false;
    e.target === search ? document.body.style.overflowY = 'auto' : false;

    clearBtnHide();
    empty();
    searchInput.value = '';
});
// input clear
searchClearBtn.addEventListener('click',(e) => {
    searchInput.value = '';
});
function clearBtnShow(){
    searchClearBtn.classList.add(ON);
};
function clearBtnHide(){
    searchClearBtn.classList.remove(ON);
};
searchInput.addEventListener('keydown', clearBtnShow);
// input clear 버튼 숨기기
function empty(){
    if(searchInput.value == null){
        clearBtnHide();
    };
};

empty();

// localStorage -----------------------------------------------------------------------
searchForm.addEventListener('submit', inputSubmit);

function saveTask(){
    localStorage.setItem(USER_KEY , JSON.stringify(localLog));
}

function deleteTask(e){
    let removeLi =  e.target.parentElement; 
    removeLi.remove();

    localLog = localLog.filter((item) => item.id !== parseInt(removeLi.id));
    saveTask(); 
}

function render(e){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');

    li.id = e.id;
    span.innerHTML = e.text;
    button.innerHTML = "";

    logList.appendChild(li); 
    li.appendChild(span);
    li.appendChild(button); 

    button.addEventListener('click', deleteTask);
}

function inputSubmit(e){
    e.preventDefault();
    clearBtnHide();
    const inputValue = searchInput.value;

    let user = {
        text :  inputValue,
        id : Date.now()
    }

    console.log(localLog);
    localLog.push(user);
    render(user);
    saveTask()
}

let localUserKey = localStorage.getItem(USER_KEY);

if(localUserKey !== null){
    let parseTodo = JSON.parse(localUserKey);
    localLog = parseTodo;
    parseTodo.forEach(render); 
}

// mobile menu open -----------------------------------------------------------------------
const mobileMenuOpen = document.querySelector('#m__trigger');
const mobileMenu = document.querySelector('#nav__menu-m');
const mobileMenuClose = document.querySelector('.menu-m_hd > span:nth-of-type(2) > button:last-of-type');

mobileMenuOpen.addEventListener('click',() => {
    mobileMenu.classList.add(ON);
});
mobileMenuClose.addEventListener('click',() => {
    mobileMenu.classList.remove(ON);
});

$(window).resize(function(){
    if($(window).width() > 1060){
        mobileMenu.classList.remove(ON);
    }else{
    }

});


// mobile list tab
const mListItem = document.querySelectorAll('.m-list-item');
const mListCon = document.querySelectorAll('.m-list-contents');
const ACTIVE = 'active'

mListItem.forEach((el, index)=> {

    el.addEventListener('click',function(){
        mListCon.forEach((item)=>{
            item.classList.remove(ACTIVE);
        });
        mListItem.forEach((item)=> {
            item.classList.remove(ACTIVE);
        });

        mListItem[index].classList.add(ACTIVE);
        mListCon[index].classList.add(ACTIVE);
    });
});