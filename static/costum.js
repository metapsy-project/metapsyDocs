// remove 'updated on'
var dateSection = document.getElementsByClassName('post-meta');
if (dateSection.length > 0) {
    dateSection[0].innerText = "";
}

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

// Reveal 3-column layout only when DOM is ready (main + "On this page" show together)
(function() {
   function reveal() { document.body.classList.remove('layout-loading'); }
   if (document.readyState === 'loading') {
       document.addEventListener('DOMContentLoaded', reveal);
   } else {
       reveal();
   }
})();

var block = document.getElementsByClassName('list-inline');

// Collapsible ToC (laptop and up)
(function() {
    var section = document.getElementById('single-section');
    var toggleBtn = document.getElementById('toc-toggle');
    var tocStorageKey = 'metapsy-toc-collapsed';
    if (!section || !toggleBtn) return;
    var iconEl = document.getElementById('toc-toggle-icon');
    function applyStored() {
        if (window.innerWidth >= 992 && localStorage.getItem(tocStorageKey) === 'true') {
            section.classList.add('toc-collapsed');
            toggleBtn.setAttribute('title', 'Show table of contents');
            toggleBtn.setAttribute('aria-label', 'Show table of contents');
            if (iconEl) iconEl.textContent = '\u2261';
        } else {
            section.classList.remove('toc-collapsed');
            toggleBtn.setAttribute('title', 'Hide table of contents');
            toggleBtn.setAttribute('aria-label', 'Hide table of contents');
            if (iconEl) iconEl.textContent = '\u2039';
        }
    }
    toggleBtn.addEventListener('click', function() {
        if (window.innerWidth < 992) return;
        section.classList.toggle('toc-collapsed');
        localStorage.setItem(tocStorageKey, section.classList.contains('toc-collapsed'));
        applyStored();
    });
    window.addEventListener('resize', applyStored);
    applyStored();
})();

// Left ToC sidebar: when header scrolled past, stick at top:0 so no gap (body.toc-header-past)
(function() {
    var header = document.querySelector('header.shadow-bottom.sticky-top');
    var tocCol = document.getElementById('toc-column');
    if (!tocCol) return;
    var headerHeight = header ? header.offsetHeight : 80;
    function update() {
        var y = window.scrollY || window.pageYOffset;
        document.body.classList.toggle('toc-header-past', y > headerHeight);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
})();

// Left ToC sidebar: databases search – filter links (only on /databases/ pages)
(function() {
    var input = document.getElementById('toc-databases-search');
    var listStyled = document.querySelector('#toc-column .list-styled');
    if (!input || !listStyled) return;
    function filterTree() {
        var q = (input.value || '').trim().toLowerCase();
        function setVisibility(li) {
            var link = li.querySelector('a');
            var text = link ? (link.textContent || '').trim().toLowerCase() : '';
            var selfMatch = q === '' || text.indexOf(q) !== -1;
            var childMatch = false;
            var uls = li.querySelectorAll(':scope > ul');
            for (var i = 0; i < uls.length; i++) {
                var children = uls[i].children;
                for (var j = 0; j < children.length; j++) {
                    if (children[j].tagName === 'LI' && setVisibility(children[j])) childMatch = true;
                }
            }
            li.style.display = (selfMatch || childMatch) ? '' : 'none';
            return selfMatch || childMatch;
        }
        var topLevel = listStyled.children;
        for (var k = 0; k < topLevel.length; k++) {
            if (topLevel[k].tagName === 'LI') setVisibility(topLevel[k]);
        }
    }
    input.addEventListener('input', filterTree);
    input.addEventListener('search', filterTree);
})();

// Left ToC sidebar: show scrollbar only while scrolling (or on hover, via CSS)
(function() {
    var tocSidebar = document.querySelector('#toc-column .toc-sidebar, #toc-column .sidebar');
    if (!tocSidebar) return;
    var scrollTimeout;
    tocSidebar.addEventListener('scroll', function() {
        tocSidebar.classList.add('toc-sidebar-scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            tocSidebar.classList.remove('toc-sidebar-scrolling');
        }, 800);
    }, { passive: true });
})();

// On this page: remove redundant ul-li wrapper levels until only actual TOC links remain
function flattenOnThisPageToc() {
    var column = document.getElementById('on-this-page-column');
    if (!column) return;
    var tocDiv = column.querySelector('.on-this-page-toc');
    if (!tocDiv) return;
    var ul = tocDiv.querySelector('ul');
    if (!ul) return;
    // Unwrap while the top ul has a single li that only contains one ul (no direct links)
    function unwrapOne() {
        var listItems = ul.children;
        if (listItems.length !== 1 || listItems[0].tagName !== 'LI') return false;
        var li = listItems[0];
        var liChildren = li.children;
        if (liChildren.length !== 1 || liChildren[0].tagName !== 'UL') return false;
        var innerUl = liChildren[0];
        while (innerUl.firstChild) {
            ul.appendChild(innerUl.firstChild);
        }
        li.remove();
        return true;
    }
    while (unwrapOne()) {}
}
function initOnThisPage() {
    flattenOnThisPageToc();
    // On this page: scroll-spy — set .active on the link for the section in view
    var column = document.getElementById('on-this-page-column');
    if (!column) return;
    var tocLinks = column.querySelectorAll('.on-this-page-toc a[href^="#"]');
    if (!tocLinks.length) return;
    var linksByTargetId = [];
    tocLinks.forEach(function (a) {
        var href = a.getAttribute('href') || '';
        var hashIndex = href.indexOf('#');
        var id = hashIndex >= 0 ? href.slice(hashIndex + 1) : '';
        if (!id) return;
        try { id = decodeURIComponent(id); } catch (e) {}
        var el = document.getElementById(id);
        if (el) linksByTargetId.push({ id: id, link: a, heading: el });
    });
    if (!linksByTargetId.length) return;
    var activeOffset = 120;
    function setActive() {
        var current = null;
        for (var i = 0; i < linksByTargetId.length; i++) {
            var top = linksByTargetId[i].heading.getBoundingClientRect().top;
            if (top <= activeOffset) current = linksByTargetId[i];
        }
        if (!current) current = linksByTargetId[0];
        linksByTargetId.forEach(function (item) {
            item.link.classList.toggle('active', item === current);
        });
    }
    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
    window.addEventListener('resize', setActive);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOnThisPage);
} else {
    initOnThisPage();
}

// Immersive reader: toggle both sidebars (fixed button bottom-right)
function initImmersiveReader() {
    var btn = document.getElementById('immersive-reader-btn');
    if (!btn) return;
    var icon = btn.querySelector('i');
    function updateIcon(active) {
        if (icon) icon.className = active ? 'bi-eye-slash' : 'bi-eye';
    }
    btn.addEventListener('click', function() {
        document.body.classList.toggle('immersive-reader-active');
        updateIcon(document.body.classList.contains('immersive-reader-active'));
    });
    updateIcon(document.body.classList.contains('immersive-reader-active'));
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImmersiveReader);
} else {
    initImmersiveReader();
}

// Mobile TOC: open/close left sidebar on small screens
function initMobileToc() {
    var btn = document.getElementById('mobile-toc-btn');
    var overlay = document.getElementById('mobile-toc-overlay');
    if (!btn || !overlay) return;
    var icon = btn.querySelector('i');
    function closeToc() {
        document.body.classList.remove('mobile-toc-open');
        overlay.classList.remove('active');
        if (icon) icon.className = 'bi bi-list';
        btn.setAttribute('aria-label', 'Open table of contents');
    }
    function openToc() {
        document.body.classList.add('mobile-toc-open');
        overlay.classList.add('active');
        if (icon) icon.className = 'bi bi-x';
        btn.setAttribute('aria-label', 'Close table of contents');
    }
    btn.addEventListener('click', function() {
        if (document.body.classList.contains('mobile-toc-open')) {
            closeToc();
        } else {
            openToc();
        }
    });
    overlay.addEventListener('click', closeToc);
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991 && document.body.classList.contains('mobile-toc-open')) {
            closeToc();
        }
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileToc);
} else {
    initMobileToc();
}

