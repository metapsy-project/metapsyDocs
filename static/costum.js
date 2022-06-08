// Add costum metapsy logo
var brand = document.getElementsByClassName('navbar-brand');
brand[0].innerHTML = "<img src='/images/logo.png' alt='logo' height='30px'> METAPSY";
brand[0].style.fontWeight = '500'; 

var navbar = document.querySelectorAll('.navbar-nav,.ml-auto');
var ul = navbar[0];
var li = document.createElement("li");
li.classList.add('nav-item');
li.setAttribute('id', 'gh-logo-container');

var innerLink = document.createElement('a');
innerLink.href = "https://github.com/metapsy-project";
innerLink.target = "_blank";
innerLink.classList.add('nav-link');
innerLink.classList.add('text-dark');
innerLink.setAttribute('id', 'gh-logo');
innerLink.innerHTML = '<i class="bi-github"></i>';
li.appendChild(innerLink);

ul.appendChild(li);


// remove 'updated on'
var dateSection = document.getElementsByClassName('post-meta');
if (dateSection.length > 0){
    dateSection[0].innerText = "";
}

// add construction bar
var constructionDiv = document.createElement('div');
var body = document.body;
var header = document.getElementsByClassName('banner')[0];
constructionDiv.setAttribute('id', 'construction');
constructionDiv.innerHTML = 
    '<i class="fa-solid fa-helmet-safety"></i>' +
    '<strong> This site is under construction.</strong>';
constructionDiv.style.backgroundColor = "var(--bs-info)";
constructionDiv.style.color = "white";
constructionDiv.style.textAlign = "center";
constructionDiv.style.fontSize = "18px";
constructionDiv.style.padding = "10px 0 10px 0";
body.insertBefore(constructionDiv, body.firstChild);

