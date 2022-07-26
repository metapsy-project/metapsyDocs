// Add costum metapsy logo
var brand = document.getElementsByClassName('navbar-brand');
brand[0].innerHTML = "<img src='/images/hexagon2.png' alt='logo' height='30px'>"+ 
    "<span style='padding-right: 20px; padding-left: 10px; color: white'>METAPSY</span>" + 
    "<span id='documentationText' style='border-left: 1px solid #adadad;" +
    " padding: 10px 0 10px 15px; font-family: var(--font-family),sans-serif; font-weight: 500 !important; color: #adadad'>" +
    "Documentation</span>";
brand[0].style.fontWeight = '500'; 

var navbar = document.querySelectorAll('.navbar-nav,.ml-auto');
var ul = navbar[0];
var li = document.createElement("li");
li.classList.add('nav-item');
li.setAttribute('id', 'gh-logo-container');

var innerLink = document.createElement('a');
innerLink.href = "https://github.com/metapsy-project";
innerLink.target = "_blank";
innerLink.style = "color: white !important;";
innerLink.classList.add('nav-link');
innerLink.classList.add('text-dark');
innerLink.setAttribute('id', 'gh-logo');
innerLink.innerHTML = '<i class="bi-github"></i>';
li.appendChild(innerLink);
ul.appendChild(li);

// Change home button
var navItem = document.getElementsByClassName('navbar-nav');
navItem[0].firstChild.nextSibling.innerHTML = 
    "<a class='nav-link text-dark' href='https://www.metapsy.org'>" + 
    "<i class='ti-home' style='color: white;'></i></a>"

// Add mode switcher
var switcher = document.createElement('li');
switcher.id = "mode-switch";
switcher.className = "nav-item";
switcher.innerHTML = '<a href="#"' +
    'class="nav-link text-dark"' + 
    'onclick="toggleTheme()"' +
    'id="mode-switch-inner">' + 
    '<i class="ti-shine" style="font-size: 170%; color: white;"></i>' +
    '</a>'
navItem[0].appendChild(switcher);

// remove 'updated on'
var dateSection = document.getElementsByClassName('post-meta');
if (dateSection.length > 0){
    dateSection[0].innerText = "";
}

// add construction bar
// var constructionDiv = document.createElement('div');
// var body = document.body;
// var header = document.getElementsByClassName('banner')[0];
// constructionDiv.setAttribute('id', 'construction');
// constructionDiv.innerHTML = 
//    '<i class="fa-solid fa-helmet-safety"></i>' +
//    '<strong> This site is under construction.</strong>';
// constructionDiv.style.backgroundColor = "var(--bs-info)";
// constructionDiv.style.color = "white";
// constructionDiv.style.textAlign = "center";
// constructionDiv.style.fontSize = "18px";
// constructionDiv.style.padding = "10px 0 10px 0";
// body.insertBefore(constructionDiv, body.firstChild);

// add gradient bar
var header = document.getElementsByTagName('header');
var strip = document.createElement('div');
var navbar = document.getElementsByClassName('navbar');
strip.id = "strip";
strip.style.marginTop = "-20px";
strip.style.fontSize = "13px";
strip.style.paddingBottom = "10px";
strip.style.paddingLeft = "28px";
//style="font-size: 13px; padding-bottom: 10px; padding-left: 28px;"
header[0].insertBefore(strip, header[0].firstChild);
navbar[0].style.paddingTop = "20px";

// Light mode switch
function setTheme(themeName) {
    var y = window.scrollY;
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
       //var shine = body.getElementsByClassName('ti-shine');
       //shine[0].style.color = "var(--text-color-dark)";
   }
}
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
       //var shine = body.getElementsByClassName('ti-shine');
       //shine[0].style.color = "var(--text-color-dark)";
   } else {
       setTheme('theme-light');
   }
})();

var block = document.getElementsByClassName('list-inline');
