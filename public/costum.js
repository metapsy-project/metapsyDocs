// Add costum metapsy logo
var brand = document.getElementsByClassName('navbar-brand');
brand[0].innerHTML = `
  <img src="/images/hexagon2.png" alt="logo" height="30px">
  <span style="padding-right: 10px; padding-left: 10px; color: white">METAPSY</span>
  <span id="documentationText" style="border-left: 1px solid #adadad; 
    padding: 10px 0 10px 15px; 
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', serif !important; 
    font-weight: 500 !important; 
    color: #adadad;">
    Documentation
  </span>`;
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


// Add mode switcher
var switcher = document.createElement('li');
switcher.id = "mode-switch";
switcher.className = "nav-item";
switcher.innerHTML = '<a href="#"' +
    'class="nav-link text-dark"' + 
    'onclick="toggleTheme()"' +
    'id="mode-switch-inner">' + 
    '<i id="theme-icon" class="bi-brightness-high" style="font-size: 140%; color: white; transition: all 0.3s ease; vertical-align: middle;"></i>' +
    '</a>'
navItem[0].appendChild(switcher);

// remove 'updated on'
var dateSection = document.getElementsByClassName('post-meta');
if (dateSection.length > 0){
    dateSection[0].innerText = "";
}


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
   var themeIcon = document.getElementById('theme-icon');
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
       themeIcon.className = 'bi-brightness-high';
   } else {
       setTheme('theme-dark');
       themeIcon.className = 'bi-moon';
       //var shine = body.getElementsByClassName('ti-shine');
       //shine[0].style.color = "var(--text-color-dark)";
   }
}
(function () {
   var themeIcon = document.getElementById('theme-icon');
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
       if (themeIcon) themeIcon.className = 'bi-moon';
   } else {
       setTheme('theme-light');
       if (themeIcon) themeIcon.className = 'bi-brightness-high';
   }
})();

var block = document.getElementsByClassName('list-inline');

// Mobile burger menu for databases sidebar
(function() {
    // Check if we're on a databases page
    var isDatabasesPage = window.location.pathname.indexOf('/databases/') !== -1;
    
    if (isDatabasesPage) {
        // Add class to body for CSS targeting
        document.body.classList.add('databases-page');
        
        // Create burger button
        var burgerBtn = document.createElement('button');
        burgerBtn.className = 'sidebar-burger-btn';
        burgerBtn.setAttribute('aria-label', 'Toggle sidebar');
        var icon = document.createElement('i');
        icon.className = 'bi bi-list';
        icon.id = 'sidebar-toggle-icon';
        burgerBtn.appendChild(icon);
        document.body.appendChild(burgerBtn);
        
        // Create overlay
        var overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        
        // Toggle sidebar function
        function toggleSidebar() {
            document.body.classList.toggle('sidebar-open');
            overlay.classList.toggle('active');
            
            // Toggle icon between burger and X
            var icon = document.getElementById('sidebar-toggle-icon');
            if (document.body.classList.contains('sidebar-open')) {
                icon.className = 'bi bi-x';
            } else {
                icon.className = 'bi bi-list';
            }
        }
        
        // Burger button click
        burgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSidebar();
        });
        
        // Close sidebar when clicking overlay
        overlay.addEventListener('click', function() {
            if (document.body.classList.contains('sidebar-open')) {
                toggleSidebar();
            }
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                var sidebar = document.querySelector('.col-lg-3');
                var isClickInsideSidebar = sidebar && sidebar.contains(e.target);
                var isClickOnBurger = burgerBtn.contains(e.target);
                
                if (!isClickInsideSidebar && !isClickOnBurger && document.body.classList.contains('sidebar-open')) {
                    toggleSidebar();
                }
            }
        });
        
        // Close sidebar on window resize if it becomes desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && document.body.classList.contains('sidebar-open')) {
                toggleSidebar();
            }
        });
    }
})();
