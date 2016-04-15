Drupal.locale = { 'pluralFormula': function ($n) { return Number((($n==1)?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Wystąpił błąd w AJAX HTTP.", "HTTP Result Code: !status":"Błąd HTTP: !status", "An AJAX HTTP request terminated abnormally.":"Zapytanie AJAX HTTP zostało przerwane.", "Debugging information follows.":"Informacje diagnostyczne.", "Path: !uri":"Ścieżka: !uri", "StatusText: !statusText":"StatusText: !statusText", "ResponseText: !responseText":"ResponseText: !responseText", "ReadyState: !readyState":"ReadyState: !readyState", "Add":"Dodaj", "Configure":"Konfiguruj", "All":"Wszystko", "Show":"Pokaż", "Select all rows in this table":"Zaznacza wszystkie wiersze tabeli", "Deselect all rows in this table":"Cofa zaznaczenie wszystkich wierszy tabeli", "Not published":"Nie do publikacji", "Please wait...":"Proszę czekać...", "Hide":"Ukryj", "By @name on @date":"Przez @name w @date", "By @name":"Przez @name", "Alias: @alias":"Alias: @alias", "No alias":"Brak aliasu", "New revision":"Nowa wersja", "Drag to re-order":"Chwyć, by zmienić kolejność", "Changes made in this table will not be saved until the form is submitted.":"Zmiany wprowadzone w tabeli zachowuje się przyciskiem u dołu formularza.", "The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\u002Fem\u003E button is clicked.":"Zmiany wprowadzone w blokach zachowuje się przyciskiem u dołu formularza.", "No revision":"Brak wersji", "Not restricted":"Bez ograniczeń", "(active tab)":"(aktywna karta)", "Not customizable":"Niekonfigurowalne", "Restricted to certain pages":"Ograniczenie do określonych stron.", "The block cannot be placed in this region.":"Blok nie może być umieszczony w tym obszarze.", "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Wybrany plik %filename nie mógł zostać wysłany. Dozwolone są jedynie następujące rozszerzenia: %extensions.", "Re-order rows by numerical weight instead of dragging.":"Zmień kolejność wierszy podając wartości numeryczne zamiast przeciągając.", "Show row weights":"Pokaż wagi wierszy", "Hide row weights":"Ukryj wagi wierszy", "Autocomplete popup":"Okienko autouzupełniania", "Searching for matches...":"Wyszukiwanie pasujących...", "Insert this token into your form":"Wstaw ten wzorzec do formularza", "First click a text field to insert your tokens into.":"Najpierw kliknij w pole tekstowe, do którego będą wstawione wzorce.", "Automatic alias":"Alias automatyczny", "File browsing is disabled in directory %dir.":"Przeglądanie plików jest wyłączone dla katalogu %dir.", "You can not perform this operation.":"Nie możesz wykonać tej operacji.", "Do you want to refresh the current directory?":"Czy chcesz odświeżyć zawartość bieżącego katalogu?", "Delete selected files?":"Usunąć wybrane pliki?", "Please select a thumbnail.":"Wybierz miniaturkę.", "Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Określ wymiary w dopuszczalnym zakresie od 1x1 do @dimensions.", "Please select a file.":"Proszę wybrać plik.", "Log messages":"Loguj wiadomości", "%filename is not an image.":"%filename nie jest obrazkiem.", "You must select at least %num files.":"Musisz wybrać co najmniej %num plików.", "You are not allowed to operate on more than %num files.":"Nie są dozwolone czynności na więcej niż %num plikach.", "Close":"Zamknij", "Insert file":"Wstaw plik", "New":"Nowy", "Remove group":"Usuń grupę", "Inclusion: @value":"Dołączenie: @value", "Priority: @value":"Priorytet: @value", "Apply (all displays)":"Zastosuj (wszystkie formaty)", "Apply (this display)":"Zastosuj (ten format)", "1 redirect":"Jedno przekierowanie", "@count redirects":"@count przekierowania", "No redirects":"Brak przekierowań", "Resume":"Wznów", "Pause":"Pauza", "There was no action specified.":"Brak określonych działań.", "An invalid integer was specified for slideNum.":"Wprowadzono nieprawidłową liczbę całkowitą dla slideNum.", "An invalid action \u0022!action\u0022 was specified.":"Określono nieprawidłowe działanie \u0022!action\u0022.", "Internal server error. Please see server or PHP logs for error information.":"Wewnętrzny błąd serwera. By uzyskać więcej informacji, należy sprawdzić dzienniki serwera lub PHP.", "No flags":"Brak flag", "Available tokens":"Dostępne żetony"}} };;

(function ($) {
Drupal.behaviors.ie6nomore = {
  attach: function (context) {
    if($.browser.msie && !$.cookie('ie6nomore_dismissed')) {
      $("body").prepend($("#ie6nomore")).find('#ie6nomore').show();
      // Attach dismiss action to link.
      $("#ie6nomore .close-button").click(function() {
        $('#ie6nomore').hide();
        $.cookie('ie6nomore_dismissed', 1);
      });
    }
  }
};

})(jQuery);

(function ($) {
  Drupal.Panels = Drupal.Panels || {};
  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {   
      $("div.panel-pane").hover(
        function() {          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;        },
        function() {          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;        }      );
      $("div.admin-links").hover(        function() {          $(this).addClass("admin-links-hover"); return true;        },
        function(){          $(this).removeClass("admin-links-hover"); return true;        }      );    }
  };
  $(Drupal.Panels.autoAttach);})(jQuery);
;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  Drupal.viewsSlideshowControls.play = function (options) {   
    try {      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }    }
    catch(err) {        }

    try {      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }    }
    catch(err) {      }  };

 
  Drupal.viewsSlideshowControls.pause = function (options) {
   
    try {      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }    }
    catch(err) {         }

    try {      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }    }
    catch(err) {        }  };
    
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;        });      });    
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;        });      });
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });          }
          else {            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });          }
          return false;
        });      });    }  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};
  Drupal.viewsSlideshowControlsText.pause = function (options) {    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);  };

  Drupal.viewsSlideshowControlsText.play = function (options) {    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);  };
    
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {    return Drupal.t('Resume');  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};
 
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
   
    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }    }
    catch(err) {         }
    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }    }
    catch(err) {         }  };


  Drupal.viewsSlideshowPager.goToSlide = function (options) {  
    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }    }
    catch(err) {        }

    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }    }
    catch(err) {        }  };


  Drupal.viewsSlideshowPager.previousSlide = function (options) {
   
    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }    }
    catch(err) {         }

    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }    }
    catch(err) {      }  };

    Drupal.viewsSlideshowPager.nextSlide = function (options) {   
    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }    }
    catch(err) {        }

    try {      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }    }
    catch(err) {         }  };
    
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });            }          
            if (jQuery.fn.hoverIntent) {              $(pagerItem).hoverIntent(mouseIn, mouseOut);            }
            else {              $(pagerItem).hover(mouseIn, mouseOut);            }            
          });        }
        else {          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};


  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };
   
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {    
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };


  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {      
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
            if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {        pagerNum--;      }
     
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }  };

  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      pagerNum++;
      if (pagerNum == totalPagers) {        pagerNum = 0;      }      
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);  };

  Drupal.viewsSlideshow.action = function (options) {      var status = {      'value': true,      'text': ''    }

    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;    }

    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;   
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {   
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;      }
    }

    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
       
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {     
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
jQuery(function() {
    jQuery('.carousel').carouFredSel({
        width: '100%',
        items: 3,
        scroll: {
            pauseDuration: 5000,
            pauseOnHover: true,
            fx: "crossfade"
        },
        auto: {
            items: 1,
            easing: "easeOutQuad",
            duration: 1500
        },
        prev: "#cl_prev",
        next: "#cl_next",
        plays: "#cl_play",
        stops: "#cl_stop"
    });
});
(function ($) {
$(document).ready(function() {
  RegExp.escapeDomains = function(text) {
    return (text) ? text.replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&") : '';
  }

  $(document.body).click(function(event) {  
    $(event.target).closest("a,area").each(function() {
      var ga = Drupal.settings.googleanalytics;
      if(ga!=undefined)
  {
      // Expression to check for absolute internal links.
      var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");
      // Expression to check for the sites cross domains.
      var isCrossDomain = new RegExp("^(https?|ftp|news|nntp|telnet|irc|ssh|sftp|webcal):\/\/.*(" + RegExp.escapeDomains(ga.trackCrossDomains) + ")", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Is download tracking activated and the file extension configured for download tracking?
        if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^=mailto:],area[href^=mailto:]")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href) {
          if (ga.trackDomainMode == 2 && isCrossDomain.test(this.href)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            _gaq.push(["_link", this.href]);
          }
          else if (ga.trackOutboundAsPageview) {
            // Track all external links as page views after URL cleanup.
            // Currently required, if click should be tracked as goal.
            _gaq.push(["_trackPageview", '/outbound/' + this.href.replace(/^(https?|ftp|news|nntp|telnet|irc|ssh|sftp|webcal):\/\//i, '').split('/').join('--')]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
      }
    });
  });
});

})(jQuery);
;
