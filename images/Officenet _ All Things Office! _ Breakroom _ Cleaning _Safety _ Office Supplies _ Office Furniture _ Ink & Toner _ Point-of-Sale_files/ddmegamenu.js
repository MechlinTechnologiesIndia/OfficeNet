/* DD Mega Menu
* Created: June 13th, 2011 by DynamicDrive.com. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/

// July 27th, 11': Added ability to activate menu via "click" of the mouse, on top of the default "mouseover".

jQuery.noConflict()

jQuery.extend(jQuery.easing, {  //see http://gsgd.co.uk/sandbox/jquery/easing/
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
})


function AdjustMenuResize(obj, LeftPos) {
    var $ = jQuery;
    var MenuObj = obj.find(">div>div");
    var MenuObjNxt = obj.find(">div");
    var widthMenu = MenuObj.css('width');
    var offsetMain = $('#innerContentWrapper').offset();
    var Width = $('#innerContentWrapper').css('width');
    var _Width1 = parseInt(widthMenu.replace("px", ""));
    var _Width2 = parseInt(Width.replace("px", ""));
    var scrollWidth = $(window).scrollLeft();

    var winWidth = $(window).width();

    //alert(scrollWidth);
    if (_Width2 < 1329) {

        if (_Width1 > _Width2)
            MenuObjNxt.css({ left: '-' + (parseInt(LeftPos) - parseInt(offsetMain.left) + scrollWidth) + 'px' });
        else {
            if ((parseInt(LeftPos) + parseInt(_Width1) > _Width2)) {

                if (LeftPos > 100) {
                    var $hack1 = $(window).width();
                    if ($hack1 <= 960) {
                        MenuObjNxt.css({ left: '0px' });
                    }
                    else {
                        MenuObjNxt.css({ left: '-' + ((parseInt(LeftPos) + parseInt(_Width1)) - _Width2 + 2 - parseInt(offsetMain.left) + scrollWidth) + 'px' });
                    }
                }
                else
                    MenuObjNxt.css({ left: '-' + ((parseInt(LeftPos) + parseInt(_Width1)) - _Width2 - parseInt(offsetMain.left) + scrollWidth + (100 - LeftPos + 52)) + 'px' });
            }
            else
                MenuObjNxt.css({ left: '0' });
        }
    }
    else
        MenuObjNxt.css({ left: '0' });

};

var ddmegamenu = {
    startzindex: 100,
    wrapperoffset: [10, 25], //additional width and height to add to outer wrapper of drop down menus to accomodate CSS drop down shadow, if any
    ismobile: navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null, //boolean check for popular mobile browsers

    init: function (setting) {
        var $ = jQuery
        var s = $.extend({ fx: 'slide', easing: 'easeInOutSine', dur: 'normal', hidedelay: 200 }, setting)
        if (s.fx == "none") //if fx is disabled, bypass animation
            s.dur = 0
        var $mainmenu = $('#' + s.menuid)
        $anchors = ($mainmenu.attr('rel')) ? $mainmenu : $mainmenu.find('a[rel]')
        function buildmenu($anchors) {
            $anchors.each(function () { //loop through anchor links
                var $anchor = $(this)
                var categoryname = $anchor.text();
                var $submenu = $('#' + $anchor.attr('rel').replace(/\[\w+\]/, '')) //extract "submenuid" from rel="submenuid[orientation]" to reference submenu
                var orienttoleft = /\[left\]/.test($anchor.attr('rel')) //check for rel="submenuid[left]" to indicate submenu should be left aligned
                if (categoryname.toLowerCase() == "office supplies") {
                    $submenu.wrap('<div class="megawrapper" style="z-index:' + ddmegamenu.startzindex + ';position:absolute;top:0px;left:0;display:none"><div  style="position:absolute;overflow:hidden;left:0;top:0;width:960px;min-height:900px;"></div></div>')
					.css({ visibility: 'inherit', top: -$submenu.outerHeight() }) //set submenu's top pos so it's out of view intially
					.data('timer', {}) //add timer data object to submenu object
                }
                else if (categoryname.toLowerCase() == "cleaning") {
                    $submenu.wrap('<div class="megawrapper" style="z-index:' + ddmegamenu.startzindex + ';position:absolute;top:0px;left:0;display:none"><div  style="position:absolute;overflow:hidden;left:0;top:0;width:960px;min-height:700px;"></div></div>')
					.css({ visibility: 'inherit', top: -$submenu.outerHeight() }) //set submenu's top pos so it's out of view intially
					.data('timer', {}) //add timer data object to submenu object
                }
                else if (categoryname.toLowerCase() == "ink & toner") {

                    $submenu.wrap('<div class="megawrapper inkwrapper" style="z-index:' + ddmegamenu.startzindex + ';position:absolute;top:0px;left:0;display:none"><div  style="position:absolute;overflow:hidden;left:0;left:-811px\0;*left:-756px;top:0;width:960px;height:100%;"></div></div>')
					.css({ visibility: 'inherit', top: -$submenu.outerHeight() }) //set submenu's top pos so it's out of view intially
					.data('timer', {}) //add timer data object to submenu object

                }
                else {

                    $submenu.wrap('<div class="megawrapper" style="z-index:' + ddmegamenu.startzindex + ';position:absolute;top:0px;left:0;display:none"><div  style="position:absolute;overflow:hidden;left:0;top:0;width:960px;height:100%;"></div></div>')
					.css({ visibility: 'inherit', top: -$submenu.outerHeight() }) //set submenu's top pos so it's out of view intially
					.data('timer', {}) //add timer data object to submenu object
                }
                //Hack 960px
                var $hack1 = $(window).width();
                if ($hack1 <= 960) {
                    $submenu.parent().addClass("hackinnerdiv");
                }
                //        width: "960px",        var $wrapper = $submenu.closest('div.megawrapper').css({ width: $submenu.outerWidth() + ddmegamenu.wrapperoffset[0], height: "100%" }) //reference outermost wrapper of submenu and set its dimensions
                var $wrapper = $submenu.closest('div.megawrapper').css({ height: "100%" })
                var $wrapperparent = $anchor.closest('div.megawrapper') //check if this anchor link is defined inside a submenu wrapper (nested menu)
                if ($wrapperparent.length > 0) { //if so
                    $wrapper.appendTo($wrapperparent) //move corresponding submenu wrapper to within its parent submenu wrapper
                }
                else { //else if this submenu wrapper is topmost
                    $wrapper.appendTo(document.body) //move it so it's a child of document.body
                    $submenu.data('istopmenu', true) //indicate this is top level wrapper
                }
                $anchor.bind((setting.trigger == "click") ? "click" : "mouseover", function (e) { //when mouse clicks on or mouses over anchor

                    clearTimeout($submenu.data('timer').hide)
                    var $anctag = $(this).attr("id");
                    setTimeout(function () {
                        // alert($('#' + $anctag + ':hover').length);
                        if ($('#' + $anctag + ':hover').length > 0) {
                            //   alert('hov');
                            //#storeHeader .navigation .Megamenucontent .inktonerSelected
                            // if($anctag.hasClass('inktonerSelected')){
                            var offset = ($submenu.data('istopmenu')) ? $anchor.offset() : $anchor.position()
                            if ($submenu.data('istopmenu')) {
                                $anchors.removeClass('selected')
                                $anchor.addClass('selected')
                                if (categoryname.toLowerCase() == "breakroom") {
                                    $anchor.addClass('breakroomSelected')
                                }
                                else if (categoryname.toLowerCase() == "cleaning") {
                                    $anchor.addClass('cleaningSelected')
                                }
                                else if (categoryname.toLowerCase() == "safety") {
                                    $anchor.addClass('safetySelected')
                                }
                                else if (categoryname.toLowerCase() == "office supplies") {
                                    $anchor.addClass('selected')
                                    $anchor.addClass('officeprodSelected')
                                }
                                else if (categoryname.toLowerCase() == "office furniture") {
                                    $anchor.addClass('furnitureSelected')
                                }
                                else if (categoryname.toLowerCase() == "ink & toner") {
                                    if (jQuery.browser.msie) {
                                        $("#DummyDiv").html("<style type='text/css'>.inkwrapper{display:block !important;}</style>");
                                    }
                                    $anchor.addClass('inktonerSelected')
                                }
                            }

                            // alert($anchor.outerHeight()-5);

                            var $hack = $(window).width(); /*Screen Resulation Hack*/

                            if ($hack <= 960) {
                                $wrapper.css({ display: 'block', left: '0px !important', top: offset.top + $anchor.outerHeight() - 9, zIndex: ++ddmegamenu.startzindex })
                            }
                            else {
                                $wrapper.css({ display: 'block', left: offset.left - (orienttoleft ? $wrapper.outerWidth() - $anchor.outerWidth() - ddmegamenu.wrapperoffset[0] : 0), top: offset.top + $anchor.outerHeight() - 9, zIndex: ++ddmegamenu.startzindex })
                            }

                            var LeftOffset = offset.left - (orienttoleft ? $wrapper.outerWidth() - $anchor.outerWidth() - ddmegamenu.wrapperoffset[0] : 0);
                            AdjustMenuResize($wrapper, LeftOffset);

                        }


                    }, 400);
                })
                //                $submenu.mouseleave(function (e) {
                //                    $submenu.stop().animate({ top: -$submenu.outerHeight() }, function () { $wrapper.css({ display: 'none' }) }) //animate submenu out of view and hide wrapper DIV
                //                })

                $anchor.mouseout(function () { //when mouse moves OUT anchor
                    $submenu.data('timer').hide = setTimeout(function () {

                        $submenu.stop().animate({ top: -$submenu.outerHeight() }, s.dur, function () { $wrapper.css({ display: 'none' }) }) //animate submenu out of view and hide wrapper DIV
                        $anchor.removeClass('selected')
                        var categoryname = $anchor.text();
                        if (categoryname.toLowerCase() == "breakroom") {
                            $anchor.removeClass('breakroomSelected')
                        }
                        else if (categoryname.toLowerCase() == "cleaning") {
                            $anchor.removeClass('cleaningSelected')
                        }
                        else if (categoryname.toLowerCase() == "safety") {
                            $anchor.removeClass('safetySelected')
                        }
                        else if (categoryname.toLowerCase() == "office supplies") {//OFFICE SUPPLIES
                            $anchor.removeClass('officeprodSelected')
                        }
                        else if (categoryname.toLowerCase() == "office furniture") {
                            $anchor.removeClass('furnitureSelected')
                        }
                        else if (categoryname.toLowerCase() == "ink & toner") {
                            $anchor.removeClass('inktonerSelected')
                        }
                    }, s.hidedelay)
                })
                $anchor.click(function (e) {
                    if (ddmegamenu.ismobile) //on ipad/iphone, disable anchor link (those with a drop down menu) when clicked on (triggered by mouseover event on desktop), so menu is given a chance to appear
                        return false
                })
                $wrapper.mouseover(function () { //when mouse moves OVER submenu wrapper
                    clearTimeout($submenu.data('timer').hide)
                })
                //                $wrapper.bind('mouseout click', function (e) { //when mouse moves OUT or CLICKs on submenu wrapper
                //                    $submenu.data('timer').hide = setTimeout(function () {
                //                        $submenu.stop().animate({ top: -$submenu.outerHeight() }, (e.type == "click") ? 0 : s.dur, function () { $wrapper.css({ display: 'none' }) }) //animate submenu out of view and hide wrapper DIV
                //                        $anchor.removeClass('selected')
                //                        var categoryname = $anchor.text();
                //                        if (categoryname.toLowerCase() == "breakroom") {
                //                            $anchor.removeClass('breakroomSelected')
                //                        }
                //                        else if (categoryname.toLowerCase() == "cleaning") {
                //                            $anchor.removeClass('cleaningSelected')
                //                        }
                //                        else if (categoryname.toLowerCase() == "safety") {
                //                            $anchor.removeClass('safetySelected')
                //                        }
                //                        else if (categoryname.toLowerCase() == "office products") {
                //                            $anchor.removeClass('officeprodSelected')
                //                        }
                //                        else if (categoryname.toLowerCase() == "office furniture") {
                //                            $anchor.removeClass('furnitureSelected')
                //                        }
                //                        else if (categoryname.toLowerCase() == "ink & toner") {
                //                            $anchor.removeClass('inktonerSelected')
                //                        }
                //                    }, s.hidedelay)
                //                })
                $wrapper.bind('mouseout ', function (e) {
                    var categoryname = $anchor.text();
                    //                    if (categoryname.toLowerCase() != "ink & toner") {
                    //when mouse moves OUT or CLICKs on submenu wrapper                 
                    $submenu.data('timer').hide = setTimeout(function () {
                        $submenu.stop().animate({ top: -$submenu.outerHeight() }, (e.type == "click") ? 0 : s.dur, function () { $wrapper.css({ display: 'none' }) }) //animate submenu out of view and hide wrapper DIV
                        $anchor.removeClass('selected')

                        if (categoryname.toLowerCase() == "breakroom") {
                            $anchor.removeClass('breakroomSelected')
                        }
                        else if (categoryname.toLowerCase() == "cleaning") {
                            $anchor.removeClass('cleaningSelected')
                        }
                        else if (categoryname.toLowerCase() == "safety") {
                            $anchor.removeClass('safetySelected')
                        }
                        else if (categoryname.toLowerCase() == "office supplies") {
                            $anchor.removeClass('officeprodSelected')
                        }
                        else if (categoryname.toLowerCase() == "office furniture") {
                            $anchor.removeClass('furnitureSelected')
                        }
                        else if (categoryname.toLowerCase() == "ink & toner") {
                            $anchor.removeClass('inktonerSelected')
                        }
                    }, s.hidedelay)
                    //                    }
                    //                    else {
                    //                        //                         $submenu.data('timer').hide = setTimeout(function () {
                    //                        //                             $submenu.stop().animate({ top: -$submenu.outerHeight() }, (e.type == "click") ? 0 : s.dur, function () { $wrapper.css({ display: 'none' }) }) //animate submenu out of view and hide wrapper DIV
                    //                        $anchor.removeClass('inktonerSelected')
                    //                        //  }, 2500)
                    //                    }
                })


                buildmenu($submenu.find('a[rel]')) //build next level sub menus

            })

        }
        buildmenu($anchors)

    },

    docinit: function (setting) {
        jQuery(function ($) { //on document.ready
            ddmegamenu.init(setting)

        })
    }

}



