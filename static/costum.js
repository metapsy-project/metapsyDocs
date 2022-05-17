// Add costum metapsy logo
var brand = document.getElementsByClassName('navbar-brand');
brand[0].innerHTML = "<img src='/images/hexagon2.png' alt='logo' height='30px'> METAPSY";
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
var date = document.getElementsByClassName('post-meta');
date[0].innerText = "";