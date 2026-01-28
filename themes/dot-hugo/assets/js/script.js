(function ($) {
  'use strict';

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });


  // match height
  $(function () {
    $('.match-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  });

  // Get Parameters from some url
  var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
      var sURLVariables = url[1].split('&'),
        sParameterName,
        i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        obj[sParameterName[0]] = sParameterName[1];
      }
      return obj;
    } else {
      return undefined;
    }
  };

  // Execute actions on images generated from Markdown pages
  var images = $(".content img").not(".inline");
  // Wrap image inside a featherlight (to get a full size view in a popup)
  images.wrap(function () {
    var image = $(this);
    if (!image.parent("a").length) {
      return "<a href='" + image[0].src + "' data-featherlight='image'></a>";
    }
  });

  // Change styles, depending on parameters set to the image
  images.each(function (index) {
    var image = $(this)
    var o = getUrlParameter(image[0].src);
    if (typeof o !== "undefined") {
      var h = o["height"];
      var w = o["width"];
      var c = o["classes"];
      image.css("width", function () {
        if (typeof w !== "undefined") {
          return w;
        } else {
          return "auto";
        }
      });
      image.css("height", function () {
        if (typeof h !== "undefined") {
          return h;
        } else {
          return "auto";
        }
      });
      if (typeof c !== "undefined") {
        var classes = c.split(',');
        for (i = 0; i < classes.length; i++) {
          image.addClass(classes[i]);
        }
      }
    }
  });


  // tab
  $('.tab-content').find('.tab-pane').each(function (idx, item) {
    var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title');
    navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
  });

  $('.code-tabs ul.nav-tabs').each(function () {
    $(this).find("li:first").addClass('active');
  })

  $('.code-tabs .tab-content').each(function () {
    $(this).find("div:first").addClass('active');
  });

  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
  });



  // search
  $('#search').keyup(function () {
    if (this.value) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
  $('#search').focusout(function () {
    $(this).removeClass('active')
  })


  // Download page to pdf format
  window.onload = function() {
      var generatePDF = document.getElementById('generatePDF');
      if (typeof(generatePDF) != 'undefined' && generatePDF != null) {
          generatePDF.addEventListener("click", () => {
              const content = this.document.getElementById("content");
              console.log(content);
              console.log(window);
              var opt = {
                  margin: 1,
                  filename: document.querySelector('#title').innerHTML,
                  image: { type: 'jpeg', quality: 0.98 },
                  html2canvas: { scale: 2 },
                  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
              };
              html2pdf().from(content).set(opt).save();
          })
      }
    }

})(jQuery);

// Citation copy function
function copyCitation(citationId, button) {
  var citationDiv = document.getElementById(citationId);
  if (!citationDiv) return;
  
  // Clone the div to avoid modifying the original
  var clone = citationDiv.cloneNode(true);
  
  // Remove all script and style tags first (these contain code that shouldn't be copied)
  var scripts = clone.getElementsByTagName('script');
  while (scripts.length > 0) {
    scripts[0].remove();
  }
  var styles = clone.getElementsByTagName('style');
  while (styles.length > 0) {
    styles[0].remove();
  }
  
  // Remove the copy button
  var buttonClone = clone.querySelector('.citation-copy-btn');
  if (buttonClone) {
    buttonClone.remove();
  }
  
  // Remove loader spinners and empty placeholder spans
  var spinners = clone.querySelectorAll('.loader-spinner, [id^="spinner-"]');
  for (var i = 0; i < spinners.length; i++) {
    spinners[i].remove();
  }
  
  // Remove empty placeholder spans (they might not have content yet)
  var placeholders = clone.querySelectorAll('[id^="ph-"]');
  for (var j = 0; j < placeholders.length; j++) {
    var placeholder = placeholders[j];
    // Only remove if it's empty or only contains whitespace
    if (!placeholder.textContent || !placeholder.textContent.trim()) {
      placeholder.remove();
    }
  }
  
  // Use innerText instead of textContent - innerText respects CSS visibility
  // and won't include script/style content
  var text = clone.innerText || clone.textContent || '';
  // Clean up whitespace - replace multiple spaces/newlines with single space
  text = text.replace(/\s+/g, ' ').trim();
  
  // Clean up punctuation spacing
  text = text.replace(/\s+\)/g, ')');      // Remove space before closing paren: " )" -> ")"
  text = text.replace(/\s+,/g, ',');       // Remove space before comma: " ," -> ","
  text = text.replace(/\s+\./g, '.');     // Remove space before period: " ." -> "."
  // Clean up any double spaces that might have been created
  text = text.replace(/\s+/g, ' ').trim();
  
  // Copy to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      // Update button state
      var icon = button.querySelector('i');
      if (icon) {
        icon.className = 'bi bi-check';
      }
      button.classList.add('copied');
      setTimeout(function() {
        if (icon) {
          icon.className = 'bi bi-clipboard';
        }
        button.classList.remove('copied');
      }, 2000);
    });
  } else {
    // Fallback for older browsers
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      var icon = button.querySelector('i');
      if (icon) {
        icon.className = 'bi bi-check';
      }
      button.classList.add('copied');
      setTimeout(function() {
        if (icon) {
          icon.className = 'bi bi-clipboard';
        }
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy citation:', err);
    }
    document.body.removeChild(textarea);
  }
}
