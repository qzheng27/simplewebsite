var langToNum = {
  "en" : 0,
  "tr" : 1,
  "zh" : 2
};

// console.log(__dirname)

var en = {
  'Home': "Home",
  "Products": "Products",
  "Pictures": "Pictures",
  "Contact Us": "Contact Us"};

var tr = {
  "Home": "Anasayfa",
  "Products": "Ürünlerimiz",
  "Pictures": "Fotoğraflarımız",
  "Contact Us": "İletişim"};

var zh = {
  "Home": "主页",
  "Products": "产品",
  "Pictures": "图片",
  "Contact Us": "联系信息"};

var numToLang = {
  0 : en,
  1 : tr,
  2 : zh,
};
var activeButton = "homeButton";
// var activeLang = langToNum["zh"];
var activeLang = langToNum["en"];
// console.log(activeLang);
function openTab(event, tabName, butName) {
    // document.getElementById("main").style.display = "none";
    // document.getElementsByClassName("main")[0].style.display="none";
    let tabs = document.getElementsByClassName("tabHead");
    let pages = document.getElementsByClassName("tabPage");

    for(j = 0 ; j < tabs.length ; j++){
      document.getElementsByClassName("tabHead")[j].style.backgroundColor = "white";
      document.getElementsByClassName("tabHead")[j].style.color = "#003049";
    }


    for(i = 0 ; i < pages.length ; i++){
      
      document.getElementsByClassName("tabPage")[i].style.display = "none";
      
    }

    document.getElementsByClassName(tabName)[activeLang].style.display = "block";
    document.getElementById(butName).style.backgroundColor = "#F77F00";
    document.getElementById(butName).style.color = "white";
    activeButton = butName;
  }

  
  
// var langCode = en;
// var a = String(langCode);
// console.log(langCode);
// console.log(a);

function changeLang(event, langCode){
  
  // currLang = numToLang[langToNum[langCode]];
  // console.log(numToLang);
  activeLang = langToNum[langCode];
  document.getElementById('homeButton').innerHTML = numToLang[langToNum[langCode]]["Home"];
  document.getElementById('prodButton').innerHTML = numToLang[langToNum[langCode]]["Products"];
  document.getElementById('picButton').innerHTML =  numToLang[langToNum[langCode]]["Pictures"];
  document.getElementById('conButton').innerHTML =  numToLang[langToNum[langCode]]["Contact Us"];

  let contents = document.getElementsByClassName("main");
  // console.log(contents.length);
  for(i = 0 ; i < contents.length ; i++){
    document.getElementsByClassName("main")[i].style.display = "none";
  };
  document.getElementById(langCode).style.display = "block";
  document.getElementById(activeButton).click();
};





const openMenu = () => {
  var menuIcon = document.querySelector('#menuBut');
  var navLinks = document.querySelector('.linkList');
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('menuBut-active');
  });
}

const actionInvoke = () => {
  document.getElementById("homeButton").click();
  document.getElementById("english").click();
  // document.getElementById("chinese").click();
  openMenu();
}
actionInvoke();
