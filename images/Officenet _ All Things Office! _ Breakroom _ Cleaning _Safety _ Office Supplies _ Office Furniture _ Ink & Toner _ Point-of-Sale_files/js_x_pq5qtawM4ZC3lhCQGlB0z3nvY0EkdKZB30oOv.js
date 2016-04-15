
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);	},
	easeInQuad: function (x, t, b, c, d) {		return c*(t/=d)*t + b;	},
	easeOutQuad: function (x, t, b, c, d) {		return -c *(t/=d)*(t-2) + b;	},
	easeInOutQuad: function (x, t, b, c, d) {		if ((t/=d/2) < 1) return c/2*t*t + b;		return -c/2 * ((--t)*(t-2) - 1) + b;	},
	easeInCubic: function (x, t, b, c, d) {		return c*(t/=d)*t*t + b;	},
	easeOutCubic: function (x, t, b, c, d) {		return c*((t=t/d-1)*t*t + 1) + b;	},
	easeInOutCubic: function (x, t, b, c, d) {		if ((t/=d/2) < 1) return c/2*t*t*t + b;		return c/2*((t-=2)*t*t + 2) + b;	},
	easeInQuart: function (x, t, b, c, d) {		return c*(t/=d)*t*t*t + b;	},
	easeOutQuart: function (x, t, b, c, d) {		return -c * ((t=t/d-1)*t*t*t - 1) + b;	},
	easeInOutQuart: function (x, t, b, c, d) {		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;		return -c/2 * ((t-=2)*t*t*t - 2) + b;	},
	easeInQuint: function (x, t, b, c, d) {		return c*(t/=d)*t*t*t*t + b;	},	easeOutQuint: function (x, t, b, c, d) {		return c*((t=t/d-1)*t*t*t*t + 1) + b;	},
	easeInOutQuint: function (x, t, b, c, d) {		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;		return c/2*((t-=2)*t*t*t*t + 2) + b;	},
	easeInSine: function (x, t, b, c, d) {		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;	},
	easeOutSine: function (x, t, b, c, d) {		return c * Math.sin(t/d * (Math.PI/2)) + b;	},
	easeInOutSine: function (x, t, b, c, d) {		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;	},
	easeInExpo: function (x, t, b, c, d) {		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;	},
	easeOutExpo: function (x, t, b, c, d) {		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;	},
	easeInOutExpo: function (x, t, b, c, d) {		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;	},
	easeInCirc: function (x, t, b, c, d) {		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;	},
	easeOutCirc: function (x, t, b, c, d) {		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;	},
	easeInOutCirc: function (x, t, b, c, d) {		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;	},
	easeInElastic: function (x, t, b, c, d) {		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});



(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = $.curCSS;
		$.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			fx.start = [start[0],start[2]];
			var end = toArray(fx.end);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);;



(function($) {
	if ($.fn.carouFredSel) return;
	$.fn.carouFredSel = function(options, configs) {
		if (this.length == 0) {
			debug(true, 'No element found for "'+this.selector+'".');
			return this;
		}
		if (this.length > 1) {
			return this.each(function() {
				$(this).carouFredSel(options, configs);
			});
		}

		var $cfs = this,
			$tt0 = this[0];

		if ($cfs.data('cfs_isCarousel')) {
			var starting_position = $cfs.triggerHandler('_cfs_triggerEvent', 'currentPosition');
			$cfs.trigger('_cfs_triggerEvent', ['destroy', [true]]);
		} else {
			var starting_position = false;
		}

		$cfs._cfs_init = function(o, setOrig, start) {
			o = go_getObject($tt0, o);

			var obs = ['items', 'scroll', 'auto', 'prev', 'next', 'pagination','stops','plays'];
			for (var a = 0, l = obs.length; a < l; a++) {
				o[obs[a]] = go_getObject($tt0, o[obs[a]]);
			}

			if (typeof o.scroll == 'number') {
				if (o.scroll <= 50)					o.scroll	= { 'items'		: o.scroll 	};
				else								o.scroll	= { 'duration'	: o.scroll 	};
			} else {
				if (typeof o.scroll == 'string')	o.scroll	= { 'easing'	: o.scroll 	};
			}

				 if (typeof o.items == 'number')	o.items		= { 'visible'	: o.items 	};
			else if (		o.items == 'variable')	o.items		= { 'visible'	: o.items,
																	'width'		: o.items, 
																	'height'	: o.items	};

			if (typeof o.items != 'object') o.items = {};
			if (setOrig) opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o);

			opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);

			if (typeof opts.items.visibleConf != 'object') opts.items.visibleConf = {};

			if (opts.items.start == 0 && typeof start == 'number') {
				opts.items.start = start;
			}

			crsl.upDateOnWindowResize = (opts.responsive);
			crsl.direction = (opts.direction == 'up' || opts.direction == 'left') ? 'next' : 'prev';

			var dims = [
				['width'	, 'innerWidth'	, 'outerWidth'	, 'height'	, 'innerHeight'	, 'outerHeight'	, 'left', 'top'	, 'marginRight'	, 0, 1, 2, 3],
				['height'	, 'innerHeight'	, 'outerHeight'	, 'width'	, 'innerWidth'	, 'outerWidth'	, 'top'	, 'left', 'marginBottom', 3, 2, 1, 0]
			];

			var dn = dims[0].length,
				dx = (opts.direction == 'right' || opts.direction == 'left') ? 0 : 1;

			opts.d = {};
			for (var d = 0; d < dn; d++) {
				opts.d[dims[0][d]] = dims[dx][d];
			}

			var	all_itm = $cfs.children();


			//	check visible items
			switch (typeof opts.items.visible) {

				//	min and max visible items
				case 'object':
					opts.items.visibleConf.min = opts.items.visible.min;
					opts.items.visibleConf.max = opts.items.visible.max;
					opts.items.visible = false;
					break;
				
				case 'string':
					//	variable visible items
					if (opts.items.visible == 'variable') {
						opts.items.visibleConf.variable = true;

					//	adjust string visible items
					} else {
						opts.items.visibleConf.adjust = opts.items.visible;
					}
					opts.items.visible = false;
					break;

				// function visible items
				case 'function':
					opts.items.visibleConf.adjust = opts.items.visible;
					opts.items.visible = false;
					break;
			}

			//	set items filter
			if (typeof opts.items.filter == 'undefined') {
				opts.items.filter = (all_itm.filter(':hidden').length > 0) ? ':visible' : '*';
			}

			//	primary size set to auto -> measure largest size and set it
			if (opts[opts.d['width']] == 'auto') {
				opts[opts.d['width']] = ms_getTrueLargestSize(all_itm, opts, 'outerWidth');
			}
			//	primary size percentage
			if (ms_isPercentage(opts[opts.d['width']]) && !opts.responsive) {
				opts[opts.d['width']] = ms_getPercentage(ms_getTrueInnerSize($wrp.parent(), opts, 'innerWidth'), opts[opts.d['width']]);
				crsl.upDateOnWindowResize = true;
			}

			//	secondary size set to auto -> measure largest size and set it
			if (opts[opts.d['height']] == 'auto') {
				opts[opts.d['height']] = ms_getTrueLargestSize(all_itm, opts, 'outerHeight');
			}

			//	primary item-size not set
			if (!opts.items[opts.d['width']]) {
//	responsive carousel -> set to largest
if (opts.responsive) {
	debug(true, 'Set a '+opts.d['width']+' for the items!');
	opts.items[opts.d['width']] = ms_getTrueLargestSize(all_itm, opts, 'outerWidth');
				//	 non-responsive -> measure it or set to "variable"
} else {
				opts.items[opts.d['width']] = (ms_hasVariableSizes(all_itm, opts, 'outerWidth')) 
					? 'variable' 
					: all_itm[opts.d['outerWidth']](true);
}
			}

			//	secondary item-size not set -> measure it or set to "variable"
			if (!opts.items[opts.d['height']]) {
				opts.items[opts.d['height']] = (ms_hasVariableSizes(all_itm, opts, 'outerHeight')) 
					? 'variable' 
					: all_itm[opts.d['outerHeight']](true);
			}

			//	secondary size not set -> set to secondary item-size
			if (!opts[opts.d['height']]) {
				opts[opts.d['height']] = opts.items[opts.d['height']];
			}

			//	visible-items not set
			if (!opts.items.visible && !opts.responsive) {
				//	primary item-size variable -> set visible items variable
				if (opts.items[opts.d['width']] == 'variable') {
					opts.items.visibleConf.variable = true;
				}
				if (!opts.items.visibleConf.variable) {
					//	primary size is number -> calculate visible-items
					if (typeof opts[opts.d['width']] == 'number') {
						opts.items.visible = Math.floor(opts[opts.d['width']] / opts.items[opts.d['width']]);
					} else {
						//	measure and calculate primary size and visible-items
						var maxS = ms_getTrueInnerSize($wrp.parent(), opts, 'innerWidth');
						opts.items.visible = Math.floor(maxS / opts.items[opts.d['width']]);
						opts[opts.d['width']] = opts.items.visible * opts.items[opts.d['width']];
						if (!opts.items.visibleConf.adjust) opts.align = false;
					}
					if (opts.items.visible == 'Infinity' || opts.items.visible < 1) {
						debug(true, 'Not a valid number of visible items: Set to "variable".');
						opts.items.visibleConf.variable = true;
					}
				}
			}

			//	primary size not set -> calculate it or set to "variable"
			if (!opts[opts.d['width']]) {
				opts[opts.d['width']] = 'variable';
				if (!opts.responsive && opts.items.filter == '*' && !opts.items.visibleConf.variable && opts.items[opts.d['width']] != 'variable') {
					opts[opts.d['width']] = opts.items.visible * opts.items[opts.d['width']];
					opts.align = false;
				}
			}

			//	variable primary item-sizes with variabe visible-items
			if (opts.items.visibleConf.variable) {
				opts.maxDimention = (opts[opts.d['width']] == 'variable')
					? ms_getTrueInnerSize($wrp.parent(), opts, 'innerWidth')
					: opts[opts.d['width']];
				if (opts.align === false) {
					opts[opts.d['width']] = 'variable';
				}
				opts.items.visible = gn_getVisibleItemsNext(all_itm, opts, 0);

			//	set visible items by filter
			} else if (opts.items.filter != '*') {
				opts.items.visibleConf.org = opts.items.visible;
				opts.items.visible = gn_getVisibleItemsNextFilter(all_itm, opts, 0);
			}

			//	align not set -> set to center if primary size is number
			if (typeof opts.align == 'undefined') {
				opts.align = (opts[opts.d['width']] == 'variable')
					? false
					: 'center';
			}

			opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
			opts.items.visibleConf.old = opts.items.visible;
			opts.usePadding = false;


if (opts.responsive) {

	if (!opts.items.visibleConf.min) opts.items.visibleConf.min = opts.items.visible;
	if (!opts.items.visibleConf.max) opts.items.visibleConf.max = opts.items.visible;

	opts.align = false;
	opts.padding = [0, 0, 0, 0];

	var isVisible = $wrp.is(':visible');
	if (isVisible) $wrp.hide();
	var fullS = ms_getPercentage(ms_getTrueInnerSize($wrp.parent(), opts, 'innerWidth'), opts[opts.d['width']]);

	if (typeof opts[opts.d['width']] == 'number' && fullS < opts[opts.d['width']]) {
		fullS = opts[opts.d['width']];
	}
	if (isVisible) $wrp.show();

	var visb = cf_getItemAdjustMinMax(Math.ceil(fullS / opts.items[opts.d['width']]), opts.items.visibleConf);
	if (visb > all_itm.length) {
		visb = all_itm.length;
	}

	var newS = Math.floor(fullS/visb),
		seco = opts[opts.d['height']],
		secp = ms_isPercentage(seco);

	all_itm.each(function() {
		var $t = $(this),
			nw = newS - ms_getPaddingBorderMargin($t, opts, 'Width');

		$t[opts.d['width']](nw);
		if (secp) {
			$t[opts.d['height']](ms_getPercentage(nw, seco));
		}
	});

	opts.items.visible = visb;
	opts.items[opts.d['width']] = newS;
	opts[opts.d['width']] = visb * newS;
	
} else {

			opts.padding = cf_getPadding(opts.padding);

			if (opts.align == 'top') 		opts.align = 'left';
			if (opts.align == 'bottom') 	opts.align = 'right';


			switch (opts.align) {
				//	align: center, left or right
				case 'center':
				case 'left':
				case 'right':
					if (opts[opts.d['width']] != 'variable') {
						var p = cf_getAlignPadding(gi_getCurrentItems(all_itm, opts), opts);
						opts.usePadding = true;
						opts.padding[opts.d[1]] = p[1];
						opts.padding[opts.d[3]] = p[0];
					}
					break;

				//	padding
				default:
					opts.align = false;
					opts.usePadding = (
						opts.padding[0] == 0 && 
						opts.padding[1] == 0 && 
						opts.padding[2] == 0 && 
						opts.padding[3] == 0
					) ? false : true;
					break;
			}
}

			if (typeof opts.cookie == 'boolean' && opts.cookie)			opts.cookie 					= 'caroufredsel_cookie_'+$cfs.attr('id');
			if (typeof opts.items.minimum				!= 'number')	opts.items.minimum				= opts.items.visible;
			if (typeof opts.scroll.duration				!= 'number')	opts.scroll.duration			= 500;
			if (typeof opts.scroll.items				== 'undefined') opts.scroll.items 				= (opts.items.visibleConf.variable || opts.items.filter != '*') ? 'visible' : opts.items.visible;

			opts.auto		= go_getNaviObject($tt0, opts.auto, 'auto');
			opts.prev		= go_getNaviObject($tt0, opts.prev);
			opts.next		= go_getNaviObject($tt0, opts.next);
                        opts.stops		= go_getNaviObject($tt0, opts.stops);
                        opts.plays		= go_getNaviObject($tt0, opts.plays);
			opts.pagination	= go_getNaviObject($tt0, opts.pagination, 'pagination');

			opts.auto		= $.extend(true, {}, opts.scroll, opts.auto);
			opts.prev		= $.extend(true, {}, opts.scroll, opts.prev);
			opts.next		= $.extend(true, {}, opts.scroll, opts.next);
                        opts.stops		= $.extend(true, {}, opts.scroll, opts.stops);
                        opts.plays		= $.extend(true, {}, opts.scroll, opts.plays);
			opts.pagination	= $.extend(true, {}, opts.scroll, opts.pagination);

			if (typeof opts.pagination.keys				!= 'boolean')	opts.pagination.keys 			= false;
			if (typeof opts.pagination.anchorBuilder	!= 'function'
					&& opts.pagination.anchorBuilder	!== false)		opts.pagination.anchorBuilder	= $.fn.carouFredSel.pageAnchorBuilder;
			if (typeof opts.auto.play					!= 'boolean')	opts.auto.play					= true;
			if (typeof opts.auto.delay					!= 'number')	opts.auto.delay					= 0;
			if (typeof opts.auto.pauseOnEvent 			== 'undefined')	opts.auto.pauseOnEvent			= true;
			if (typeof opts.auto.pauseOnResize 			!= 'boolean')	opts.auto.pauseOnResize			= true;
			if (typeof opts.auto.pauseDuration			!= 'number')	opts.auto.pauseDuration			= (opts.auto.duration < 10) ? 2500 : opts.auto.duration * 5;

			if (opts.synchronise) {
				opts.synchronise = cf_getSynchArr(opts.synchronise);
			}
			if (conf.debug) {
				debug(conf, 'Carousel width: '+opts.width);
				debug(conf, 'Carousel height: '+opts.height);
				if (opts.maxDimention)	debug(conf, 'Available '+opts.d['width']+': '+opts.maxDimention);
				debug(conf, 'Item widths: '+opts.items.width);
				debug(conf, 'Item heights: '+opts.items.height);
				debug(conf, 'Number of items visible: '+opts.items.visible);
				if (opts.auto.play)		debug(conf, 'Number of items scrolled automatically: '+opts.auto.items);
				if (opts.prev.button)	debug(conf, 'Number of items scrolled backward: '+opts.prev.items);
				if (opts.next.button)	debug(conf, 'Number of items scrolled forward: '+opts.next.items);
                                if (opts.stops.button)	debug(conf, 'Number of items scrolled stops: '+opts.stops.items);
                                if (opts.plays.button)	debug(conf, 'Number of items scrolled play: '+opts.plays.items);
			}
		};	//	/init

		$cfs._cfs_build = function() {
			$cfs.data('cfs_isCarousel', true);

			var orgCSS = {
				'textAlign'		: $cfs.css('textAlign'),
				'float'			: $cfs.css('float'),
				'position'		: $cfs.css('position'),
				'top'			: $cfs.css('top'),
				'right'			: $cfs.css('right'),
				'bottom'		: $cfs.css('bottom'),
				'left'			: $cfs.css('left'),
				'width'			: $cfs.css('width'),
				'height'		: $cfs.css('height'),
				'marginTop'		: $cfs.css('marginTop'),
				'marginRight'	: $cfs.css('marginRight'),
				'marginBottom'	: $cfs.css('marginBottom'),
				'marginLeft'	: $cfs.css('marginLeft')
			};

			switch (orgCSS.position) {
				case 'absolute':
					var newPosition = 'absolute';
					break;
				case 'fixed':
					var newPosition = 'fixed';
					break;
				default:
					var newPosition = 'relative';
			} 

			$wrp.css(orgCSS).css({
				'overflow'		: 'hidden',
				'position'		: newPosition
			});

			$cfs.data('cfs_origCss', orgCSS).css({
				'textAlign'		: 'left',
				'float'			: 'none',
				'position'		: 'absolute',
				'top'			: 0,
				'left'			: 0,
				'marginTop'		: 0,
				'marginRight'	: 0,
				'marginBottom'	: 0,
				'marginLeft'	: 0
			});

			if (opts.usePadding) {
				$cfs.children().each(function() {
					var m = parseInt($(this).css(opts.d['marginRight']));
					if (isNaN(m)) m = 0;
					$(this).data('cfs_origCssMargin', m);
				});
			}

		};	//	/build

		$cfs._cfs_bind_events = function() {
			$cfs._cfs_unbind_events();

			//	stop event
			$cfs.bind(cf_e('stop', conf), function(e, imm) {
				e.stopPropagation();

				//	button
				if (!crsl.isStopped) {
					if (opts.auto.button) {
						opts.auto.button.addClass(cf_c('stopped', conf));
					}
				}

				//	set stopped
				crsl.isStopped = true;

				if (opts.auto.play) {
					opts.auto.play = false;
					$cfs.trigger(cf_e('pause', conf), imm);
				}
				return true;
			});

			//	finish event
			$cfs.bind(cf_e('finish', conf), function(e) {
				e.stopPropagation();
				if (crsl.isScrolling) {
					sc_stopScroll(scrl);
				}
				return true;
			});

			//	pause event
			$cfs.bind(cf_e('pause', conf), function(e, imm, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	immediately pause
				if (imm && crsl.isScrolling) {
					scrl.isStopped = true;
					var nst = getTime() - scrl.startTime;
					scrl.duration -= nst;
					if (scrl.pre) scrl.pre.duration -= nst;
					if (scrl.post) scrl.post.duration -= nst;
					sc_stopScroll(scrl, false);
				}

				//	update remaining pause-time
				if (!crsl.isPaused && !crsl.isScrolling) {
					if (res) tmrs.timePassed += getTime() - tmrs.startTime;
				}
				
				//	button
				if (!crsl.isPaused) {
					if (opts.auto.button) {
						opts.auto.button.addClass(cf_c('paused', conf));
					}
				}

				//	set paused
				crsl.isPaused = true;

				//	pause pause callback
				if (opts.auto.onPausePause) {
					var dur1 = opts.auto.pauseDuration - tmrs.timePassed,
						perc = 100 - Math.ceil( dur1 * 100 / opts.auto.pauseDuration );
					opts.auto.onPausePause.call($tt0, perc, dur1);
				}
				return true;
			});

			//	play event
			$cfs.bind(cf_e('play', conf), function(e, dir, del, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	sort params
				var v = [dir, del, res],
					t = ['string', 'number', 'boolean'],
					a = cf_sortParams(v, t);

				var dir = a[0],
					del = a[1],
					res = a[2];

				if (dir != 'prev' && dir != 'next') dir = crsl.direction;
				if (typeof del != 'number') 		del = 0;
				if (typeof res != 'boolean') 		res = false;

				//	stopped?
				if (res) {
					crsl.isStopped = false;
					opts.auto.play = true;
				}
				if (!opts.auto.play) {
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped: Not scrolling.');
				}

				//	button
				if (crsl.isPaused) {
					if (opts.auto.button) {
						opts.auto.button.removeClass(cf_c('stopped', conf));
						opts.auto.button.removeClass(cf_c('paused', conf));
					}
				}

				//	set playing
				crsl.isPaused = false;
				tmrs.startTime = getTime();

				//	timeout the scrolling
				var dur1 = opts.auto.pauseDuration + del;
					dur2 = dur1 - tmrs.timePassed;
					perc = 100 - Math.ceil(dur2 * 100 / dur1);

				tmrs.auto = setTimeout(function() {
					if (opts.auto.onPauseEnd) {
						opts.auto.onPauseEnd.call($tt0, perc, dur2);
					}
					if (crsl.isScrolling) {
						$cfs.trigger(cf_e('play', conf), dir);
					} else {
						$cfs.trigger(cf_e(dir, conf), opts.auto);
					}
				}, dur2);

				//	pause start callback
				if (opts.auto.onPauseStart) {
					opts.auto.onPauseStart.call($tt0, perc, dur2);
				}

				return true;
			});

			//	resume event
			$cfs.bind(cf_e('resume', conf), function(e) {
				e.stopPropagation();
				if (scrl.isStopped) {
					scrl.isStopped = false;
					crsl.isPaused = false;
					crsl.isScrolling = true;
					scrl.startTime = getTime();
					sc_startScroll(scrl);
				} else {
					$cfs.trigger(cf_e('play', conf));
				}
				return true;
			});

			//	prev + next events
			$cfs.bind(cf_e('prev', conf)+' '+cf_e('next', conf), function(e, obj, num, clb) {
				e.stopPropagation();

				//	stopped or hidden carousel, don't scroll, don't queue
				if (crsl.isStopped || $cfs.is(':hidden')) {
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped or hidden: Not scrolling.');
				}

				//	not enough items
				if (opts.items.minimum >= itms.total) {
					e.stopImmediatePropagation();
					return debug(conf, 'Not enough items ('+itms.total+', '+opts.items.minimum+' needed): Not scrolling.');
				}

				//	get config
				var v = [obj, num, clb],
					t = ['object', 'number/string', 'function'],
					a = cf_sortParams(v, t);

				var obj = a[0],
					num = a[1],
					clb = a[2];

				var eType = e.type.slice(conf.events.prefix.length);

				if (typeof obj != 'object' || obj == null)	obj = opts[eType];
				if (typeof clb == 'function')				obj.onAfter = clb;

				if (typeof num != 'number') {
					if (opts.items.filter != '*') {
						num = 'visible';
					} else {
						var arr = [num, obj.items, opts[eType].items];
						for (var a = 0, l = arr.length; a < l; a++) {
							if (typeof arr[a] == 'number' || arr[a] == 'page' || arr[a] == 'visible') {
								num = arr[a];
								break;
							}
						}
					}
					switch(num) {
						case 'page':
							e.stopImmediatePropagation();
							return $cfs.triggerHandler(eType+'Page', [obj, clb]);
							break;

						case 'visible':
							if (!opts.items.visibleConf.variable && opts.items.filter == '*') {
								num = opts.items.visible;
							}
							break;
					}
				}

				//	resume animation, add current to queue
				if (scrl.isStopped) {
					$cfs.trigger(cf_e('resume', conf));
					$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel resumed scrolling.');
				}

				//	queue if scrolling
				if (obj.duration > 0) {
					if (crsl.isScrolling) {
						if (obj.queue) $cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
						e.stopImmediatePropagation();
						return debug(conf, 'Carousel currently scrolling.');
					}
				}

				//	test conditions callback
				if (obj.conditions && !obj.conditions.call($tt0)) {
					e.stopImmediatePropagation();
					return debug(conf, 'Callback "conditions" returned false.');
				}

				tmrs.timePassed = 0;
				$cfs.trigger('_cfs_triggerEvent', ['slide_'+eType, [obj, num]]);

				//	synchronise
				if (opts.synchronise) {
					var s = opts.synchronise,
						c = [obj, num];
					for (var j = 0, l = s.length; j < l; j++) {
						var d = eType;

						if (!s[j][1]) c[0] = s[j][0].triggerHandler('_cfs_triggerEvent', ['configuration', [d]]);
						if (!s[j][2]) d = (d == 'prev') ? 'next' : 'prev';
						c[1] = num + s[j][3];
						s[j][0].trigger('_cfs_triggerEvent', ['slide_'+d, [c]]);
					}
				}
				return true;
			});

			//	prev event
			$cfs.bind(cf_e('slide_prev', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at start, scroll to end
				if (!opts.circular) {
					if (itms.first == 0) {
						if (opts.infinite) {
							$cfs.trigger(cf_e('next', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				if (opts.usePadding) sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (typeof nI != 'number') {
					if (opts.items.visibleConf.variable) {
						nI = gn_getVisibleItemsPrev(a_itm, opts, itms.total-1);
					} else if (opts.items.filter != '*') {
						var xI = (typeof sO.items == 'number') ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsPrevFilter(a_itm, opts, itms.total-1, xI);
					} else {
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				//	prevent non-circular from scrolling to far
				if (!opts.circular) {
					if (itms.total - nI < itms.first) {
						nI = itms.total - itms.first;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable) {
					var vI = gn_getVisibleItemsNext(a_itm, opts, itms.total-nI);
					if (opts.items.visible+nI <= vI && nI < itms.total) {
						nI++;
						vI = gn_getVisibleItemsNext(a_itm, opts, itms.total-nI);
					}
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				} else if (opts.items.filter != '*') {
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, itms.total-nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				if (opts.usePadding) sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0) {
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items backward.');

				//	save new config
				itms.first += nI;
				while (itms.first >= itms.total) {
					itms.first -= itms.total;
				}

				//	non-circular callback
				if (!opts.circular) {
					if (itms.first == 0 && sO.onEnd) sO.onEnd.call($tt0);
					if (!opts.infinite) nv_enableNavi(opts, itms.first, conf);
				}

				//	rearrange items
				$cfs.children().slice(itms.total-nI, itms.total).prependTo($cfs);
				if (itms.total < opts.items.visible + nI) {
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					c_old = gi_getOldItemsPrev(a_itm, opts, nI),
					c_new = gi_getNewItemsPrev(a_itm, opts),
					l_cur = a_itm.eq(nI-1),
					l_old = c_old.last(),
					l_new = c_new.last();

				if (opts.usePadding) sz_resetMargin(a_itm, opts);
				if (opts.align) {
					var p = cf_getAlignPadding(c_new, opts),
						pL = p[0],
						pR = p[1];
				} else {
					var pL = 0,
						pR = 0;
				}
				var oL = (pL < 0) ? opts.padding[opts.d[3]] : 0;

				//	hide items for fx directscroll
				if (sO.fx == 'directscroll' && opts.items.visible < nI) {
					var hiddenitems = a_itm.slice(opts.items.visibleConf.old, nI),
						orgW = opts.items[opts.d['width']];
					hiddenitems.each(function() {
						var hi = $(this);
						hi.data('isHidden', hi.is(':hidden')).hide();
					});
					opts.items[opts.d['width']] = 'variable';
				} else {
					var hiddenitems = false;
				}

				//	save new sizes
				var i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(c_new, opts, true), opts, !opts.usePadding);

				if (hiddenitems) opts.items[opts.d['width']] = orgW;

				if (opts.usePadding) {
					sz_resetMargin(a_itm, opts, true);
					if (pR >= 0) {
						sz_resetMargin(l_old, opts, opts.padding[opts.d[1]]);
					}
					sz_resetMargin(l_cur, opts, opts.padding[opts.d[3]]);
				}
				if (opts.align) {
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				//	animation configuration
				var a_cfs = {},
					a_dur = sO.duration;

					 if (sO.fx == 'none')	a_dur = 0;
				else if (a_dur == 'auto')	a_dur = opts.scroll.duration / opts.scroll.items * nI;
				else if (a_dur <= 0)		a_dur = 0;
				else if (a_dur < 10)		a_dur = i_siz / a_dur;

				scrl = sc_setScroll(a_dur, sO.easing);

				//	animate wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable') {
					scrl.anims.push([$wrp, w_siz]);
				}

				//	animate items
				if (opts.usePadding) {
					var new_m = opts.padding[opts.d[3]];

					if (l_new.not(l_cur).length) {
			 			var a_cur = {};
			 				a_cur[opts.d['marginRight']] = l_cur.data('cfs_origCssMargin');

						if (pL < 0) l_cur.css(a_cur);
						else 		scrl.anims.push([l_cur, a_cur]);
					}

					if (l_new.not(l_old).length) {
						var a_old = {};
							a_old[opts.d['marginRight']] = l_old.data('cfs_origCssMargin');
						scrl.anims.push([l_old, a_old]);
					}

					if (pR >= 0) {
						var a_new = {};
							a_new[opts.d['marginRight']] = l_new.data('cfs_origCssMargin') + opts.padding[opts.d[1]];
						scrl.anims.push([l_new, a_new]);
					}
				} else {
					var new_m = 0;
				}

				//	animate carousel
				a_cfs[opts.d['left']] = new_m;

				//	onBefore callback
				var args = [c_old, c_new, w_siz, a_dur];
				if (sO.onBefore) sO.onBefore.apply($tt0, args);
				clbk.onBefore = sc_callCallbacks(clbk.onBefore, $tt0, args);



				//	ALTERNATIVE EFFECTS

				//	extra animation arrays
				switch(sO.fx) {
					case 'fade':
					case 'crossfade':
					case 'cover':
					case 'uncover':
						scrl.pre = sc_setScroll(scrl.duration, scrl.easing);
						scrl.post = sc_setScroll(scrl.duration, scrl.easing);
						scrl.duration = 0;
						break;
				}

				//	create copy
				switch(sO.fx) {
					case 'crossfade':
					case 'cover':
					case 'uncover':
						var $cf2 = $cfs.clone().appendTo($wrp);
						break;
				}
				switch(sO.fx) {
					case 'uncover':
						$cf2.children().slice(0, nI).remove();
					case 'crossfade':
					case 'cover':
						$cf2.children().slice(opts.items.visible).remove();
						break;
				}

				//	animations
				switch(sO.fx) {
					case 'fade':
						scrl.pre.anims.push([$cfs, { 'opacity': 0 }]);
						break;
					case 'crossfade':
						$cf2.css({ 'opacity': 0 });
						scrl.pre.anims.push([$cfs, { 'width': '+=0' }, function() { $cf2.remove(); }]);
						scrl.post.anims.push([$cf2, { 'opacity': 1 }]);
						break;
					case 'cover':
						scrl = fx_cover(scrl, $cfs, $cf2, opts, true);
						break;
					case 'uncover':
						scrl = fx_uncover(scrl, $cfs, $cf2, opts, true, nI);
						break;
				}

				//	/ALTERNATIVE EFFECTS


				//	complete callback
				var a_complete = function() {

					var overFill = opts.items.visible+nI-itms.total;
					if (overFill > 0) {
						$cfs.children().slice(itms.total).remove();
						c_old = $( $cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat( $cfs.children().slice(0, overFill).get() ) );
					}
					if (hiddenitems) {
						hiddenitems.each(function() {
							var hi = $(this);
							if (!hi.data('isHidden')) hi.show();
						});	
					}
					if (opts.usePadding) {
						var l_itm = $cfs.children().eq(opts.items.visible+nI-1);
						l_itm.css(opts.d['marginRight'], l_itm.data('cfs_origCssMargin'));
					}

					scrl.anims = [];
					if (scrl.pre) scrl.pre = sc_setScroll(scrl.orgDuration, scrl.easing);

					var fn = function() {
						switch(sO.fx) {
							case 'fade':
							case 'crossfade':
								$cfs.css('filter', '');
								break;
						}

						scrl.post = sc_setScroll(0, null);
						crsl.isScrolling = false;

						var args = [c_old, c_new, w_siz];
						if (sO.onAfter) sO.onAfter.apply($tt0, args);
						clbk.onAfter = sc_callCallbacks(clbk.onAfter, $tt0, args);

						if (queu.length) {
							$cfs.trigger(cf_e(queu[0][0], conf), queu[0][1]);
							queu.shift();
						}
						if (!crsl.isPaused) $cfs.trigger(cf_e('play', conf));
					};
					switch(sO.fx) {
						case 'fade':
							scrl.pre.anims.push([$cfs, { 'opacity': 1 }, fn]);
							sc_startScroll(scrl.pre);
							break;
						case 'uncover':
							scrl.pre.anims.push([$cfs, { 'width': '+=0' }, fn]);
							sc_startScroll(scrl.pre);
							break;
						default:
							fn();
							break;
					}
				};

				scrl.anims.push([$cfs, a_cfs, a_complete]);
				crsl.isScrolling = true;
				$cfs.css(opts.d['left'], -(i_siz-oL));
				tmrs = sc_clearTimers(tmrs);
				sc_startScroll(scrl);
				cf_setCookie(opts.cookie, $cfs.triggerHandler(cf_e('currentPosition', conf)));

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});

			//	next event
			$cfs.bind(cf_e('slide_next', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at end, scroll to start
				if (!opts.circular) {
					if (itms.first == opts.items.visible) {
						if (opts.infinite) {
							$cfs.trigger(cf_e('prev', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				if (opts.usePadding) sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (typeof nI != 'number') {
					if (opts.items.filter != '*') {
						var xI = (typeof sO.items == 'number') ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsNextFilter(a_itm, opts, 0, xI);
					} else {
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				var lastItemNr = (itms.first == 0) ? itms.total : itms.first;

				//	prevent non-circular from scrolling to far
				if (!opts.circular) {
					if (opts.items.visibleConf.variable) {
						var vI = gn_getVisibleItemsNext(a_itm, opts, nI),
							xI = gn_getVisibleItemsPrev(a_itm, opts, lastItemNr-1);
					} else {
						var vI = opts.items.visible,
							xI = opts.items.visible;
					}

					if (nI + vI > lastItemNr) {
						nI = lastItemNr - xI;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable) {
					var vI = gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr);
					while (opts.items.visible-nI >= vI && nI < itms.total) {
						nI++;
						vI = gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr);
					}
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				} else if (opts.items.filter != '*') {
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				if (opts.usePadding) sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0) {
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items forward.');

				//	save new config
				itms.first -= nI;
				while (itms.first < 0) {
					itms.first += itms.total;
				}

				//	non-circular callback
				if (!opts.circular) {
					if (itms.first == opts.items.visible && sO.onEnd) sO.onEnd.call($tt0);
					if (!opts.infinite) nv_enableNavi(opts, itms.first, conf);
				}

				//	rearrange items
				if (itms.total < opts.items.visible+nI) {
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					c_old = gi_getOldItemsNext(a_itm, opts),
					c_new = gi_getNewItemsNext(a_itm, opts, nI),
					l_cur = a_itm.eq(nI-1),
					l_old = c_old.last(),
					l_new = c_new.last();

				if (opts.usePadding) sz_resetMargin(a_itm, opts);
				if (opts.align)	{
					var p = cf_getAlignPadding(c_new, opts),
						pL = p[0],
						pR = p[1];
				} else {
					var pL = 0,
						pR = 0;
				}

				//	hide items for fx directscroll
				if (sO.fx == 'directscroll' && opts.items.visibleConf.old < nI) {
					var hiddenitems = a_itm.slice(opts.items.visibleConf.old, nI),
						orgW = opts.items[opts.d['width']];
					hiddenitems.each(function() {
						var hi = $(this);
						hi.data('isHidden', hi.is(':hidden')).hide();
					});
					opts.items[opts.d['width']] = 'variable';
				} else {
					var hiddenitems = false;
				}

				//	save new sizes
				var i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(c_new, opts, true), opts, !opts.usePadding);

				if (hiddenitems) opts.items[opts.d['width']] = orgW;

				if (opts.align) {
					if (opts.padding[opts.d[1]] < 0) {
						opts.padding[opts.d[1]] = 0;
					}
				}
				if (opts.usePadding) {
					sz_resetMargin(a_itm, opts, true);
					sz_resetMargin(l_old, opts, opts.padding[opts.d[1]]);
				}
				if (opts.align) {
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				//	animation configuration
				var a_cfs = {},
					a_dur = sO.duration;

					 if (sO.fx == 'none')	a_dur = 0;
				else if (a_dur == 'auto')	a_dur = opts.scroll.duration / opts.scroll.items * nI;
				else if (a_dur <= 0)		a_dur = 0;
				else if (a_dur < 10)		a_dur = i_siz / a_dur;

				scrl = sc_setScroll(a_dur, sO.easing);

				//	animate wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable') {
					scrl.anims.push([$wrp, w_siz]);
				}

				//	animate items
				if (opts.usePadding) {
					var l_new_m = l_new.data('cfs_origCssMargin');
					if (pR >= 0) {
						l_new_m += opts.padding[opts.d[1]];
					}
					l_new.css(opts.d['marginRight'], l_new_m);

					if (l_cur.not(l_old).length) {
						var a_old = {};
							a_old[opts.d['marginRight']] = l_old.data('cfs_origCssMargin');
						scrl.anims.push([l_old, a_old]);
					}

					var c_new_m = l_cur.data('cfs_origCssMargin');
					if (pL >= 0) {
						c_new_m += opts.padding[opts.d[3]];
					}
					var a_cur = {};
						a_cur[opts.d['marginRight']] = c_new_m;
					scrl.anims.push([l_cur, a_cur]);

				}

				//	animate carousel
				a_cfs[opts.d['left']] = -i_siz;
				if (pL < 0) {
					a_cfs[opts.d['left']] += pL;
				}

				//	onBefore callback
				var args = [c_old, c_new, w_siz, a_dur];
				if (sO.onBefore) sO.onBefore.apply($tt0, args);
				clbk.onBefore = sc_callCallbacks(clbk.onBefore, $tt0, args);



				//	ALTERNATIVE EFFECTS

				//	extra animation arrays
				switch(sO.fx) {
					case 'fade':
					case 'crossfade':
					case 'cover':
					case 'uncover':
						scrl.pre = sc_setScroll(scrl.duration, scrl.easing);
						scrl.post = sc_setScroll(scrl.duration, scrl.easing);
						scrl.duration = 0;
						break;
				}

				//	create copy
				switch(sO.fx) {
					case 'crossfade':
					case 'cover':
					case 'uncover':
						var $cf2 = $cfs.clone().appendTo($wrp);
						break;
				}
				switch(sO.fx) {
					case 'uncover':
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;
					case 'crossfade':
					case 'cover':
						$cf2.children().slice(0, nI).remove();
						$cf2.children().slice(opts.items.visible).remove();
						break;
				}

				//	animations
				switch(sO.fx) {
					case 'fade':
						scrl.pre.anims.push([$cfs, { 'opacity': 0 }]);
						break;
					case 'crossfade':
						$cf2.css({ 'opacity': 0 });
						scrl.pre.anims.push([$cfs, { 'width': '+=0' }, function() { $cf2.remove(); }]);
						scrl.post.anims.push([$cf2, { 'opacity': 1 }]);
						break;
					case 'cover':
						scrl = fx_cover(scrl, $cfs, $cf2, opts, false);
						break;
					case 'uncover':
						scrl = fx_uncover(scrl, $cfs, $cf2, opts, false, nI);
						break;
				}

				//	/ALTERNATIVE EFFECTS


				//	complete callback
				var a_complete = function() {

					var overFill = opts.items.visible+nI-itms.total,
						new_m = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;
					$cfs.css(opts.d['left'], new_m);
					if (overFill > 0) {
						$cfs.children().slice(itms.total).remove();
					}
					var l_itm = $cfs.children().slice(0, nI).appendTo($cfs).last();
					if (overFill > 0) {
						c_new = gi_getCurrentItems(a_itm, opts);
					}
					if (hiddenitems) {
						hiddenitems.each(function() {
							var hi = $(this);
							if (!hi.data('isHidden')) hi.show();
						});
					}
					if (opts.usePadding) {
						if (itms.total < opts.items.visible+nI) {
							var l_cur = $cfs.children().eq(opts.items.visible-1);
							l_cur.css(opts.d['marginRight'], l_cur.data('cfs_origCssMargin') + opts.padding[opts.d[3]]);
						}
						l_itm.css(opts.d['marginRight'], l_itm.data('cfs_origCssMargin'));
					}

					scrl.anims = [];
					if (scrl.pre) scrl.pre = sc_setScroll(scrl.orgDuration, scrl.easing);

					var fn = function() {
						switch(sO.fx) {
							case 'fade':
							case 'crossfade':
								$cfs.css('filter', '');
								break;
						}

						scrl.post = sc_setScroll(0, null);
						crsl.isScrolling = false;

						var args = [c_old, c_new, w_siz];
						if (sO.onAfter) sO.onAfter.apply($tt0, args);
						clbk.onAfter = sc_callCallbacks(clbk.onAfter, $tt0, args);

						if (queu.length) {
							$cfs.trigger(cf_e(queu[0][0], conf), queu[0][1]);
							queu.shift();
						}
						if (!crsl.isPaused) $cfs.trigger(cf_e('play', conf));
					};
					switch(sO.fx) {
						case 'fade':
							scrl.pre.anims.push([$cfs, { 'opacity': 1 }, fn]);
							sc_startScroll(scrl.pre);
							break;
						case 'uncover':
							scrl.pre.anims.push([$cfs, { 'width': '+=0' }, fn]);
							sc_startScroll(scrl.pre);
							break;
						default:
							fn();
							break;
					}
				};

				scrl.anims.push([$cfs, a_cfs, a_complete]);
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				sc_startScroll(scrl);
				cf_setCookie(opts.cookie, $cfs.triggerHandler(cf_e('currentPosition', conf)));

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});

			//	slideTo event
			$cfs.bind(cf_e('slideTo', conf), function(e, num, dev, org, obj, dir, clb) {
				e.stopPropagation();

				var v = [num, dev, org, obj, dir, clb],
					t = ['string/number/object', 'number', 'boolean', 'object', 'string', 'function'],
					a = cf_sortParams(v, t);
				
				var obj = a[3],
					dir = a[4],
					clb = a[5];

				num = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs);

				if (num == 0) return;
				if (typeof obj != 'object') obj = false;

				if (crsl.isScrolling) {
					if (typeof obj != 'object' || obj.duration > 0) return false;
				}

				if (dir != 'prev' && dir != 'next') {
					if (opts.circular) {
						if (num <= itms.total / 2) 	dir = 'next';
						else 						dir = 'prev';
					} else {
						if (itms.first == 0 ||
							itms.first > num)		dir = 'next';
						else						dir = 'prev';
					}
				}

				if (dir == 'prev') num = itms.total-num;
				$cfs.trigger(cf_e(dir, conf), [obj, num, clb]);

				return true;
			});

			//	prevPage event
			$cfs.bind(cf_e('prevPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur-1, obj, 'prev', clb]);
			});

			//	nextPage event
			$cfs.bind(cf_e('nextPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur+1, obj, 'next', clb]);
			});

			//	slideToPage event
			$cfs.bind(cf_e('slideToPage', conf), function(e, pag, obj, dir, clb) {
				e.stopPropagation();
				if (typeof pag != 'number') pag = $cfs.triggerHandler(cf_e('currentPage', conf));
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total / ipp)-1;
				if (pag < 0)	pag = max;
				if (pag > max)	pag = 0;
				return $cfs.triggerHandler(cf_e('slideTo', conf), [pag*ipp, 0, true, obj, dir, clb]);
			});

			//	jumpToStart event
			$cfs.bind(cf_e('jumpToStart', conf), function(e, s) {
				e.stopPropagation();
				if (s)	s = gn_getItemIndex(s, 0, true, itms, $cfs);
				else 	s = 0;

				s += itms.first;
				if (s != 0) {
					while (s > itms.total) s -= itms.total;
					$cfs.prepend($cfs.children().slice(s, itms.total));
				}
				return true;
			});

			//	synchronise event
			$cfs.bind(cf_e('synchronise', conf), function(e, s) {
				e.stopPropagation();
					 if (s) 				s = cf_getSynchArr(s);
				else if (opts.synchronise)	s = opts.synchronise;
				else return debug(conf, 'No carousel to synchronise.');

				var n = $cfs.triggerHandler(cf_e('currentPosition', conf)),
					x = true;
				for (var j = 0, l = s.length; j < l; j++) {
					if (!s[j][0].triggerHandler(cf_e('slideTo', conf), [n, s[j][3], true])) {
						x = false;
					}
				}
				return x;
			});

			//	queue event
			$cfs.bind(cf_e('queue', conf), function(e, dir, opt) {
				e.stopPropagation();
				if (typeof dir == 'function') {
					dir.call($tt0, queu);
				} else if (is_array(dir)) {
					queu = dir;
				} else if (typeof dir != 'undefined') {
					queu.push([dir, opt]);
				}
				return queu;
			});

			//	insertItem event
			$cfs.bind(cf_e('insertItem', conf), function(e, itm, num, org, dev) {
				e.stopPropagation();

				var v = [itm, num, org, dev],
					t = ['string/object', 'string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);
				
				var itm = a[0],
					num = a[1],
					org = a[2],
					dev = a[3];

				if (typeof itm == 'object' && 
					typeof itm.jquery == 'undefined')	itm = $(itm);
				if (typeof itm == 'string') 			itm = $(itm);
				if (typeof itm != 'object' ||
					typeof itm.jquery == 'undefined' || 
					itm.length == 0) return debug(conf, 'Not a valid object.');

				if (typeof num == 'undefined') num = 'end';

				if (opts.usePadding) {
					itm.each(function() {
						var m = parseInt($(this).css(opts.d['marginRight']));
						if (isNaN(m)) m = 0;
						$(this).data('cfs_origCssMargin', m);
					});
				}

				var orgNum = num,
					before = 'before';

				if (num == 'end') {
					if (org) {
						if (itms.first == 0) {
							num = itms.total-1;
							before = 'after';
						} else {
							num = itms.first;
							itms.first += itm.length
						}
						if (num < 0) num = 0;
					} else {
						num = itms.total-1;
						before = 'after';
					}
				} else {
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
				}
				if (orgNum != 'end' && !org) {
					if (num < itms.first) itms.first += itm.length;
				}
				if (itms.first >= itms.total) itms.first -= itms.total;

				var $cit = $cfs.children().eq(num);
				if ($cit.length) {
					$cit[before](itm);
				} else {
					$cfs.append(itm);
				}

				itms.total = $cfs.children().length;

				var sz = $cfs.triggerHandler('updateSizes');
				nv_showNavi(opts, itms.total, conf);
				nv_enableNavi(opts, itms.first, conf);
				$cfs.trigger(cf_e('linkAnchors', conf));
				$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);

				return true;
			});

			//	removeItem event
			$cfs.bind(cf_e('removeItem', conf), function(e, num, org, dev) {
				e.stopPropagation();
				
				var v = [num, org, dev],
					t = ['string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);
				
				num = a[0];
				org = a[1];
				dev = a[2];

				var removed = false;
				if (num instanceof $ && num.length > 1)
				{
					$removed = $();
					num.each(function(i, el) {
						var $rem = $cfs.trigger(cf_e('removeItem', conf), [$(this), org, dev]);
						if ($rem) $removed = $removed.add($rem);
					});
					return $removed;
				}

				if (typeof num == 'undefined' || num == 'end') {
					$removed = $cfs.children().last();
				} else {
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
					var $removed = $cfs.children().eq(num);
					if ($removed.length){
						if (num < itms.first) itms.first -= $removed.length;
					}
				}
				if ($removed && $removed.length) {
					$removed.detach();
					itms.total = $cfs.children().length;
					var sz = $cfs.triggerHandler('updateSizes');
					nv_showNavi(opts, itms.total, conf);
					nv_enableNavi(opts, itms.first, conf);
					$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				}			

				return $removed;
			});

			//	onBefore and onAfter event
			$cfs.bind(cf_e('onBefore', conf)+' '+cf_e('onAfter', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length);
				if (is_array(fn))				clbk[eType] = fn;
				if (typeof fn == 'function')	clbk[eType].push(fn);
				return clbk[eType];
			});

			//	currentPosition event
			$cfs.bind(cf_e('currentPosition', conf), function(e, fn) {
				e.stopPropagation();
				if (itms.first == 0) var val = 0;
				else var val = itms.total - itms.first;
				if (typeof fn == 'function') fn.call($tt0, val);
				return val;
			});

			//	currentPage event
			$cfs.bind(cf_e('currentPage', conf), function(e, fn) {
				e.stopPropagation();
				var ipp = opts.pagination.items || opts.items.visible;
				var max = Math.ceil(itms.total/ipp-1);
				if (itms.first == 0) 							var nr = 0;
				else if (itms.first < itms.total % ipp) 		var nr = 0;
				else if (itms.first == ipp && !opts.circular) 	var nr = max;
				else 											var nr = Math.round((itms.total-itms.first)/ipp);
				if (nr < 0) nr = 0;
				if (nr > max) nr = max;
				if (typeof fn == 'function') fn.call($tt0, nr);
				return nr;
			});

			//	currentVisible event
			$cfs.bind(cf_e('currentVisible', conf), function(e, fn) {
				e.stopPropagation();
				$i = gi_getCurrentItems($cfs.children(), opts);
				if (typeof fn == 'function') fn.call($tt0, $i);
				return $i;
			});
			
			//	slice event
			$cfs.bind(cf_e('slice', conf), function(e, f, l, fn) {
				e.stopPropagation();

				if (itms.total == 0) return false;

				var v = [f, l, fn],
					t = ['number', 'number', 'function'],
					a = cf_sortParams(v, t);

				f = (typeof a[0] == 'number') ? a[0] : 0;
				l = (typeof a[1] == 'number') ? a[1] : itms.total;
				fn = a[2];
				
				f += itms.first;
				l += itms.first;

				while (f > itms.total) { f -= itms.total }
				while (l > itms.total) { l -= itms.total }
				while (f < 0) { f += itms.total }
				while (l < 0) { l += itms.total }

				var $iA = $cfs.children();

				if (l > f) {
					var $i = $iA.slice(f, l);	
				} else {
					var $i = $( $iA.slice(f, itms.total).get().concat( $iA.slice(0, l).get() ) );
				}

				if (typeof fn == 'function') fn.call($tt0, $i);
				return $i;
			});

			//	isPaused, isStopped and isScrolling events
			$cfs.bind(cf_e('isPaused', conf)+' '+cf_e('isStopped', conf)+' '+cf_e('isScrolling', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length);
				if (typeof fn == 'function') fn.call($tt0, crsl[eType]);
				return crsl[eType];
			});

			//	configuration event
			$cfs.bind(cf_e('configuration', conf), function(e, a, b, c) {
				e.stopPropagation();
				var reInit = false;

				//	return entire configuration-object
				if (typeof a == 'function') {
					a.call($tt0, opts);

				//	set multiple options via object
				} else if (typeof a == 'object') {
					opts_orig = $.extend(true, {}, opts_orig, a);
					if (b !== false) reInit = true;
					else opts = $.extend(true, {}, opts, a);

				} else if (typeof a != 'undefined') {

					//	callback function for specific option
					if (typeof b == 'function') {
						var val = eval('opts.'+a);
						if (typeof val == 'undefined') val = '';
						b.call($tt0, val);

					//	set individual option
					} else if (typeof b != 'undefined') {
						if (typeof c !== 'boolean') c = true;
						eval('opts_orig.'+a+' = b');
						if (c !== false) reInit = true;
						else eval('opts.'+a+' = b');

					//	return value for specific option
					} else {
						return eval('opts.'+a);
					}
				}
				if (reInit) {
					sz_resetMargin($cfs.children(), opts);
					$cfs._cfs_init(opts_orig);
					$cfs._cfs_bind_buttons();
					var siz = sz_setSizes($cfs, opts, false);
					$cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
				}
				return opts;
			});

			//	linkAnchors event
			$cfs.bind(cf_e('linkAnchors', conf), function(e, $con, sel) {
				e.stopPropagation();
				if (typeof $con == 'undefined' || $con.length == 0) $con = $('body');
				else if (typeof $con == 'string') $con = $($con);
				if (typeof $con != 'object') return debug(conf, 'Not a valid object.');
				if (typeof sel != 'string' || sel.length == 0) sel = 'a.caroufredsel';
				$con.find(sel).each(function() {
					var h = this.hash || '';
					if (h.length > 0 && $cfs.children().index($(h)) != -1) {
						$(this).unbind('click').click(function(e) {
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), h);
						});
					}
				});
				return true;
			});

			//	updatePageStatus event
			$cfs.bind(cf_e('updatePageStatus', conf), function(e, build, sizes) {
				e.stopPropagation();
				if (!opts.pagination.container) return;
				
				if (build) {
					var ipp = opts.pagination.items || opts.items.visible,
						l = Math.ceil(itms.total/ipp);

					if (opts.pagination.anchorBuilder) {
						opts.pagination.container.children().remove();
						opts.pagination.container.each(function() {
							for (var a = 0; a < l; a++) {
								var i = $cfs.children().eq( gn_getItemIndex(a*ipp, 0, true, itms, $cfs) );
								$(this).append(opts.pagination.anchorBuilder(a+1, i));
							}
						});
					}
					opts.pagination.container.each(function() {
						$(this).children().unbind(opts.pagination.event).each(function(a) {
							$(this).bind(opts.pagination.event, function(e) {
								e.preventDefault();
								$cfs.trigger(cf_e('slideTo', conf), [a*ipp, 0, true, opts.pagination]);
							});
						});
					});
				}
				opts.pagination.container.each(function() {
					$(this).children().removeClass(cf_c('selected', conf)).eq($cfs.triggerHandler(cf_e('currentPage', conf))).addClass(cf_c('selected', conf));
				});
				return true;
			});

			//	updateSizes event
			$cfs.bind(cf_e('updateSizes', conf), function(e) {
				var a_itm = $cfs.children(),
					vI = opts.items.visible;

					 if (opts.items.visibleConf.variable)	vI = gn_getVisibleItemsNext(a_itm, opts, 0);
				else if (opts.items.filter != '*') 			vI = gn_getVisibleItemsNextFilter(a_itm, opts, 0);

				if (!opts.circular && itms.first != 0 && vI > itms.first) {
					if (opts.items.visibleConf.variable) {
						var nI = gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first;
					} else if (opts.items.filter != '*') {
						var nI = gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) - itms.first;
					} else {
						nI = opts.items.visible - itms.first;
					}
					debug(conf, 'Preventing non-circular: sliding '+nI+' items backward.');
					$cfs.trigger('prev', nI);
				}
				opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				return sz_setSizes($cfs, opts);
			});

			//	destroy event
			$cfs.bind(cf_e('destroy', conf), function(e, orgOrder) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				$cfs.data('cfs_isCarousel', false);
				$cfs.trigger(cf_e('finish', conf));
				if (orgOrder) {
					$cfs.trigger(cf_e('jumpToStart', conf));
				}
				if (opts.usePadding) {
					sz_resetMargin($cfs.children(), opts);
				}

				$cfs.css($cfs.data('cfs_origCss'));
				$cfs._cfs_unbind_events();
				$cfs._cfs_unbind_buttons();
				$wrp.replaceWith($cfs);

				return true;
			});
			
			//	triggerEvent, making prefixed and namespaced events accessible from the outside
			$cfs.bind('_cfs_triggerEvent', function(e, n, o) {
				e.stopPropagation();
				return $cfs.triggerHandler(cf_e(n, conf), o);
			});
		};	//	/bind_events

		$cfs._cfs_unbind_events = function() {
			$cfs.unbind(cf_e('', conf));
			$cfs.unbind(cf_e('', conf, false));
			$cfs.unbind('_cfs_triggerEvent');
		};	//	/unbind_events

		$cfs._cfs_bind_buttons = function() {
			$cfs._cfs_unbind_buttons();
			nv_showNavi(opts, itms.total, conf);
			nv_enableNavi(opts, itms.first, conf);

			if (opts.auto.pauseOnHover) {
				 
				var pC = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
				//$wrp.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
					//.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
			}
		if (opts.auto.button) {
				opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
					e.preventDefault();
					var ev = false,
						pC = null;

					if (crsl.isPaused) {
						ev = 'play';
					} else if (opts.auto.pauseOnEvent) {
						ev = 'pause';
						pC = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);
					}
					if (ev) {
						$cfs.trigger(cf_e(ev, conf), pC);
					}
				});
			}
			if (opts.prev.button) {
				opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('prev', conf));
				});
				if (opts.prev.pauseOnHover) {
					var pC = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
					// opts.prev.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
									// .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			if (opts.next.button) {
				opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('next', conf));
				});
				if (opts.next.pauseOnHover) {
					var pC = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
					// opts.next.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC); 	})
									// .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}
                        
                        /**/
if (opts.stops.button) {
				opts.stops.button.bind(cf_e(opts.stops.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('stops', conf));
				});
				if (opts.stops.pauseOnHover) {
					var pC = bt_pauseOnHoverConfig(opts.stops.pauseOnHover);
					 opts.stops.button.bind(cf_e('click', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
									 //.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

if (opts.plays.button) {
				opts.stops.button.bind(cf_e(opts.plays.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('plays', conf));
				});
				if (opts.plays.pauseOnHover) {
					var pC = bt_pauseOnHoverConfig(opts.plays.pauseOnHover);
					 //opts.plays.button.bind(cf_e('click', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
					opts.plays.button.bind(cf_e('click', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

 /**/
	
                        
                        
			if ($.fn.mousewheel) {
				if (opts.prev.mousewheel) {
					if (!crsl.mousewheelPrev) {
						crsl.mousewheelPrev = true;
						$wrp.mousewheel(function(e, delta) { 
							if (delta > 0) {
								e.preventDefault();
								var num = bt_mousesheelNumber(opts.prev.mousewheel);
								$cfs.trigger(cf_e('prev', conf), num);
							}
						});
					}
				}
				if (opts.next.mousewheel) {
					if (!crsl.mousewheelNext) {
						crsl.mousewheelNext = true;
						$wrp.mousewheel(function(e, delta) { 
							if (delta < 0) {
								e.preventDefault();
								var num = bt_mousesheelNumber(opts.next.mousewheel);
								$cfs.trigger(cf_e('next', conf), num);
							}
						});
					}
				}
			}
			if ($.fn.touchwipe) {
				var wP = (opts.prev.wipe) ? function() { $cfs.trigger(cf_e('prev', conf)) } : null,
					wN = (opts.next.wipe) ? function() { $cfs.trigger(cf_e('next', conf)) } : null;

				if (wN || wN) {
					if (!crsl.touchwipe) {
						crsl.touchwipe = true;
						var twOps = {
							'min_move_x': 30,
							'min_move_y': 30,
							'preventDefaultEvents': true
						};
						switch (opts.direction) {
							case 'up':
							case 'down':
								twOps.wipeUp = wP;
								twOps.wipeDown = wN;
								break;
							default:
								twOps.wipeLeft = wN;
								twOps.wipeRight = wP;
						}
						$wrp.touchwipe(twOps);
					}
				}
			}
			if (opts.pagination.container) {
				if (opts.pagination.pauseOnHover) {
					var pC = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
					opts.pagination.container.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
											 .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));	});
				}
			}
			if (opts.prev.key || opts.next.key) {
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k == opts.next.key)	{
						e.preventDefault();
						$cfs.trigger(cf_e('next', conf));
					}
					if (k == opts.prev.key) {
						e.preventDefault();
						$cfs.trigger(cf_e('prev', conf));
					}
				});
			}
			if (opts.pagination.keys) {
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k >= 49 && k < 58) {
						k = (k-49) * opts.items.visible;
						if (k <= itms.total) {
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), [k, 0, true, opts.pagination]);
						}
					}
				});
			}
			if (opts.auto.play) {
				$cfs.trigger(cf_e('play', conf), opts.auto.delay);
			}

			if (crsl.upDateOnWindowResize) {
				var $w = $(window),
					_windowWidth = $w.width(),
					_windowHeight = $w.height();
			
				$w.bind(cf_e('resize', conf, false, true, true), function(e) {
					if ($w.width() != _windowWidth || $w.height() != _windowHeight) {
						$cfs.trigger(cf_e('finish', conf));
						if (opts.auto.pauseOnResize && !crsl.isPaused) {
							$cfs.trigger(cf_e('play', conf));
						}
						sz_resetMargin($cfs.children(), opts);
						$cfs._cfs_init(opts_orig);
						var siz = sz_setSizes($cfs, opts, false);
						$cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
				
						_windowWidth = $w.width();
						_windowHeight = $w.height();
					}
				});
			}

		};	//	/bind_buttons

		$cfs._cfs_unbind_buttons = function() {
			var ns1 = cf_e('', conf),
				ns2 = cf_e('', conf, false);
				ns3 = cf_e('', conf, false, true, true);

			$(document).unbind(ns3);
			$(window).unbind(ns3);
			$wrp.unbind(ns2);

			if (opts.auto.button) opts.auto.button.unbind(ns2);
			if (opts.prev.button) opts.prev.button.unbind(ns2);
			if (opts.next.button) opts.next.button.unbind(ns2);
			if (opts.pagination.container) {
				opts.pagination.container.unbind(ns2);
				if (opts.pagination.anchorBuilder) {
					opts.pagination.container.children().remove();
				}
			}

			nv_showNavi(opts, 'hide', conf);
			nv_enableNavi(opts, 'removeClass', conf);

		};	//	/unbind_buttons



		//	START

		var crsl = {
				'direction'		: 'next',
				'isPaused'		: true,
				'isScrolling'	: false,
				'isStopped'		: false,

				'mousewheelNext': false,
				'mousewheelPrev': false,
				'touchwipe'		: false
			},
			itms = {
				'total'			: $cfs.children().length,
				'first'			: 0
			},
			tmrs = {
				'timer'			: null,
				'auto'			: null,
				'queue'			: null,
				'startTime'		: getTime(),
				'timePassed'	: 0
			},
			scrl = {
				'isStopped'		: false,
				'duration'		: 0,
				'startTime'		: 0,
				'easing'		: '',
				'anims'			: []
			},
			clbk = {
				'onBefore'		: [],
				'onAfter'		: []
			},
			queu = [],
			conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs),
			opts = {},
			opts_orig = options,
			$wrp = $cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();

		conf.selector		= $cfs.selector;
		conf.serialNumber	= $.fn.carouFredSel.serialNumber++;

		//	create carousel
		$cfs._cfs_init(opts_orig, true, starting_position);
		$cfs._cfs_build();
		$cfs._cfs_bind_events();
		$cfs._cfs_bind_buttons();

		//	find item to start
		if (is_array(opts.items.start)) {
			var start_arr = opts.items.start;
		} else {
			var start_arr = [];
			if (opts.items.start != 0) {
				start_arr.push(opts.items.start);
			}
		}
		if (opts.cookie) {
			start_arr.unshift(cf_readCookie(opts.cookie));
		}
		if (start_arr.length > 0) {
			for (var a = 0, l = start_arr.length; a < l; a++) {
				var s = start_arr[a];
				if (s == 0) {
					continue;
				}
				if (s === true) {
					s = window.location.hash;
					if (s.length < 1) {
						continue;
					}
				} else if (s === 'random') {
					s = Math.floor(Math.random()*itms.total);
				}
				if ($cfs.triggerHandler(cf_e('slideTo', conf), [s, 0, true, { fx: 'none' }])) {
					break;
				}
			}
		}
		var siz = sz_setSizes($cfs, opts, false),
			itm = gi_getCurrentItems($cfs.children(), opts);

		if (opts.onCreate) {
			opts.onCreate.call($tt0, itm, siz);
		}

		$cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
		$cfs.trigger(cf_e('linkAnchors', conf));

		return $cfs;
	};


	//	GLOBAL PUBLIC

	$.fn.carouFredSel.serialNumber = 1;
	$.fn.carouFredSel.defaults = {
		'synchronise'	: false,
		'infinite'		: true,
		'circular'		: true,
		'responsive'	: false,
		'direction'		: 'left',
		'items'			: {
			'start'			: 0
		},
		'scroll'		: {
			'easing'		: 'swing',
			'duration'		: 500,
			'pauseOnHover'	: false,
			'mousewheel'	: false,
			'wipe'			: false,
			'event'			: 'click',
			'queue'			: false
		}
	};
	$.fn.carouFredSel.configs = {
		'debug'			: false,
		'events'		: {
			'prefix'		: '',
			'namespace'		: 'cfs'
		},
		'wrapper'		: {
			'element'		: 'div',
			'classname'		: 'caroufredsel_wrapper'
		},
		'classnames'	: {}
	};
	$.fn.carouFredSel.pageAnchorBuilder = function(nr, itm) {
		return '<a href="#"><span>'+nr+'</span></a>';
	};


	//	GLOBAL PRIVATE

	//	scrolling functions
	function sc_setScroll(d, e) {
		return {
			anims		: [],
			duration	: d,
			orgDuration	: d,
			easing		: e,
			startTime	: getTime()
		};
	}
	function sc_startScroll(s) {
		if (typeof s.pre == 'object') {
			sc_startScroll(s.pre);
		}
		for (var a = 0, l = s.anims.length; a < l; a++) {
			var b = s.anims[a];
			if (!b) continue;
			if (b[3]) b[0].stop();
			b[0].animate(b[1], {
				complete: b[2],
				duration: s.duration,
				easing: s.easing
			});
		}
		if (typeof s.post == 'object') {
			sc_startScroll(s.post);
		}
	}
	function sc_stopScroll(s, finish) {
		if (typeof finish != 'boolean') finish = true;
		if (typeof s.pre == 'object') {
			sc_stopScroll(s.pre, finish);
		}
		for (var a = 0, l = s.anims.length; a < l; a++) {
			var b = s.anims[a];
			b[0].stop(true);
			if (finish) {
				b[0].css(b[1]);
				if (typeof b[2] == 'function') b[2]();
			}
		}
		if (typeof s.post == 'object') {
			sc_stopScroll(s.post, finish);
		}
	}
	function sc_clearTimers(t) {
		if (t.auto) clearTimeout(t.auto);
		return t;
	}
	function sc_callCallbacks(cbs, t, args) {
		if (cbs.length) {
			for (var a = 0, l = cbs.length; a < l; a++) {
				cbs[a].apply(t, args);
			}
		}
		return [];
	}

	//	fx functions
	function fx_fade(sO, c, x, d, f) {
		var o = {
			'duration'	: d,
			'easing'	: sO.easing
		};
		if (typeof f == 'function') o.complete = f;
		c.animate({
			opacity: x
		}, o);
	}
	function fx_cover(sc, c1, c2, o, prev) {
		var old_w = ms_getSizes(gi_getOldItemsNext(c1.children(), o), o, true)[0],
			new_w = ms_getSizes(c2.children(), o, true)[0],
			cur_l = (prev) ? -new_w : old_w,
			css_o = {},
			ani_o = {};

		css_o[o.d['width']] = new_w;
		css_o[o.d['left']] = cur_l;
		ani_o[o.d['left']] = 0;
		
		sc.pre.anims.push([c1, { 'opacity': 1 }]);
		sc.post.anims.push([c2, ani_o, function() { $(this).remove(); }]);
		c2.css(css_o);
		return sc;
	}
	function fx_uncover(sc, c1, c2, o, prev, n) {
		var new_w = ms_getSizes(gi_getNewItemsNext(c1.children(), o, n), o, true)[0],
			old_w = ms_getSizes(c2.children(), o, true)[0],
			cur_l = (prev) ? -old_w : new_w,
			css_o = {},
			ani_o = {};

		css_o[o.d['width']] = old_w;
		css_o[o.d['left']] = 0;
		ani_o[o.d['left']] = cur_l;
		sc.post.anims.push([c2, ani_o, function() { $(this).remove(); }]);
		c2.css(css_o);
		return sc;
	}

	//	navigation functions
	function nv_showNavi(o, t, c) {
		if (t == 'show' || t == 'hide') {
			var f = t;
		} else if (o.items.minimum >= t) {
			debug(c, 'Not enough items: hiding navigation ('+t+' items, '+o.items.minimum+' needed).');
			var f = 'hide';
		} else {
			var f = 'show';
		}
		var s = (f == 'show') ? 'removeClass' : 'addClass',
			h = cf_c('hidden', c);
		if (o.auto.button) o.auto.button[f]()[s](h);
		if (o.prev.button) o.prev.button[f]()[s](h);
		if (o.next.button) o.next.button[f]()[s](h);
		if (o.pagination.container) o.pagination.container[f]()[s](h);
	}
	function nv_enableNavi(o, f, c) {
		if (o.circular || o.infinite) return;
		var fx = (f == 'removeClass' || f == 'addClass') ? f : false,
			di = cf_c('disabled', c);
		if (o.auto.button && fx) {
			o.auto.button[fx](di);
		}
		if (o.prev.button) {
			var fn = fx || (f == 0) ? 'addClass' : 'removeClass';
			o.prev.button[fn](di);
		}
		if (o.next.button) {
			var fn = fx || (f == o.items.visible) ? 'addClass' : 'removeClass';
			o.next.button[fn](di);
		}
	}

	//	get object functions
	function go_getObject($tt, obj) {
		if (typeof obj == 'function')	obj = obj.call($tt);
		if (typeof obj == 'undefined')	obj = {};
		return obj;
	}
	function go_getNaviObject($tt, obj, type) {
		if (typeof type != 'string') type = '';

		obj = go_getObject($tt, obj);
		if (typeof obj == 'string') {
			var temp = cf_getKeyCode(obj);
			if (temp == -1) obj = $(obj);
			else 			obj = temp;
		}

		//	pagination
		if (type == 'pagination') {
			if (typeof obj 				== 'boolean')	obj = { 'keys': obj };
			if (typeof obj.jquery 		!= 'undefined')	obj = { 'container': obj };
			if (typeof obj.container	== 'function')	obj.container = obj.container.call($tt);
			if (typeof obj.container	== 'string')	obj.container = $(obj.container);
			if (typeof obj.items		!= 'number')	obj.items = false;

		//	auto
		} else if (type == 'auto') {
			if (typeof obj.jquery	!= 'undefined')		obj = { 'button': obj };
			if (typeof obj == 'boolean')				obj = { 'play': obj };
			if (typeof obj == 'number')					obj = { 'pauseDuration': obj };
			if (typeof obj.button		== 'function')	obj.button = obj.button.call($tt);
			if (typeof obj.button		== 'string')	obj.button = $(obj.button);

		//	prev + next
		} else {
			if (typeof obj.jquery		!= 'undefined')	obj = { 'button': obj };
			if (typeof obj 				== 'number')	obj = { 'key': obj };
			if (typeof obj.button		== 'function')	obj.button = obj.button.call($tt);
			if (typeof obj.button		== 'string')	obj.button = $(obj.button);
			if (typeof obj.key			== 'string')	obj.key = cf_getKeyCode(obj.key);
		}			

		return obj;
	}

	//	get number functions
	function gn_getItemIndex(num, dev, org, items, $cfs) {
		if (typeof num == 'string') {
			if (isNaN(num)) num = $(num);
			else 			num = parseInt(num);
		}
		if (typeof num == 'object') {
			if (typeof num.jquery == 'undefined') num = $(num);
			num = $cfs.children().index(num);
			if (num == -1) num = 0;
			if (typeof org != 'boolean') org = false;
		} else {
			if (typeof org != 'boolean') org = true;
		}
		if (isNaN(num))	num = 0;
		else 			num = parseInt(num);
		if (isNaN(dev))	dev = 0;
		else 			dev = parseInt(dev);

		if (org) {
			num += items.first;
		}
		num += dev;
		if (items.total > 0) {
			while (num >= items.total)	{	num -= items.total; }
			while (num < 0)				{	num += items.total; }
		}
		return num;
	}

	//	items prev
	function gn_getVisibleItemsPrev(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s; a >= 0; a--) {
			var j = i.eq(a);
			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimention) return x;
			if (a == 0) a = i.length;
			x++;
		}
	}
	function gn_getVisibleItemsPrevFilter(i, o, s) {
		return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s);
	}
	function gn_getScrollItemsPrevFilter(i, o, s, m) {
		return gn_getItemsPrevFilter(i, o.items.filter, m, s);
	}
	function gn_getItemsPrevFilter(i, f, m, s) {
		var t = 0,
			x = 0;
	
		for (var a = s, l = i.length; a >= 0; a--) {
			x++;
			if (x == l) return x;

			var j = i.eq(a);
			if (j.is(f)) {
				t++;
				if (t == m) return x;
			}
			if (a == 0) a = l;
		}
	}

	function gn_getVisibleOrg($c, o) {
		return o.items.visibleConf.org || $c.children().slice(0, o.items.visible).filter(o.items.filter).length;
	}

	//	items next
	function gn_getVisibleItemsNext(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++) {
			var j = i.eq(a);

			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimention) return x;

			x++;
			if (x == l+1) return x;
			if (a == l) a = -1;
		}
	}
	function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
		var v = gn_getVisibleItemsNext(i, o, s);
		if (!o.circular) {
			if (s + v > l) v = l - s;
		}
		return v;
	}
	function gn_getVisibleItemsNextFilter(i, o, s) {
		return gn_getItemsNextFilter(i, o.items.filter, o.items.visibleConf.org, s, o.circular);
	}
	function gn_getScrollItemsNextFilter(i, o, s, m) {
		return gn_getItemsNextFilter(i, o.items.filter, m+1, s, o.circular) - 1;
	}
	function gn_getItemsNextFilter(i, f, m, s, c) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++) {
			x++;
			if (x == l) return x;

			var j = i.eq(a);
			if (j.is(f)) {
				t++;
				if (t == m) return x;
			}
			if (a == l) a = -1;
		}
	}

	//	get items functions
	function gi_getCurrentItems(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsPrev(i, o, n) {
		return i.slice(n, o.items.visibleConf.old+n);
	}
	function gi_getNewItemsPrev(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsNext(i, o) {
		return i.slice(0, o.items.visibleConf.old);
	}
	function gi_getNewItemsNext(i, o, n) {
		return i.slice(n, o.items.visible+n);
	}

	//	sizes functions
	function sz_resetMargin(i, o, m) {
		var x = (typeof m == 'boolean') ? m : false;
		if (typeof m != 'number') m = 0;
		i.each(function() {
			var j = $(this);
			var t = parseInt(j.css(o.d['marginRight']));
			if (isNaN(t)) t = 0;
			j.data('cfs_tempCssMargin', t);
			j.css(o.d['marginRight'], ((x) ? j.data('cfs_tempCssMargin') : m + j.data('cfs_origCssMargin')));
		});
	}
	function sz_setSizes($c, o, p) {
		var $w = $c.parent(),
			$i = $c.children(),
			$v = gi_getCurrentItems($i, o),
			sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, p);

		$w.css(sz);

		if (o.usePadding) {
			var p = o.padding,
				r = p[o.d[1]];
			if (o.align) {
				if (r < 0) r = 0;
			}
			var $l = $v.last();
			$l.css(o.d['marginRight'], $l.data('cfs_origCssMargin') + r);
			$c.css(o.d['top'], p[o.d[0]]);
			$c.css(o.d['left'], p[o.d[3]]);
		}

		$c.css(o.d['width'], sz[o.d['width']]+(ms_getTotalSize($i, o, 'width')*2));
		$c.css(o.d['height'], ms_getLargestSize($i, o, 'height'));
		return sz;
	}

	//	measuring functions
	function ms_getSizes(i, o, wrapper) {
		var s1 = ms_getTotalSize(i, o, 'width', wrapper),
			s2 = ms_getLargestSize(i, o, 'height', wrapper);
		return [s1, s2];
	}
	function ms_getLargestSize(i, o, dim, wrapper) {
		if (typeof wrapper != 'boolean') wrapper = false;
		if (typeof o[o.d[dim]] == 'number' && wrapper) return o[o.d[dim]];
		if (typeof o.items[o.d[dim]] == 'number') return o.items[o.d[dim]];
		var di2 = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight';
		return ms_getTrueLargestSize(i, o, di2);
	}
	function ms_getTrueLargestSize(i, o, dim) {
		var s = 0;

		for (var a = 0, l = i.length; a < l; a++) {
			var j = i.eq(a);

			var m = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s < m) s = m;
		}
		return s;
	}
	function ms_getTrueInnerSize($el, o, dim) {
		if (!$el.is(':visible')) return 0;

		var siz = $el[o.d[dim]](),
			arr = (o.d[dim].toLowerCase().indexOf('width') > -1) ? ['paddingLeft', 'paddingRight'] : ['paddingTop', 'paddingBottom'];
		
		for (var a = 0, l = arr.length; a < l; a++) {
			var m = parseInt($el.css(arr[a]));
			siz -= (isNaN(m)) ? 0 : m;
		}
		return siz;
	}
	function ms_getTotalSize(i, o, dim, wrapper) {
		if (typeof wrapper != 'boolean') wrapper = false;
		if (typeof o[o.d[dim]] == 'number' && wrapper) return o[o.d[dim]];
		if (typeof o.items[o.d[dim]] == 'number') return o.items[o.d[dim]] * i.length;
		
		var d = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight',
			s = 0;
		
		for (var a = 0, l = i.length; a < l; a++) {
			var j = i.eq(a);
			s += (j.is(':visible')) ? j[o.d[d]](true) : 0;
		}
		return s;
	}
	function ms_hasVariableSizes(i, o, dim) {
		var s = false,
			v = false;
		
		for (var a = 0, l = i.length; a < l; a++) {
			var j = i.eq(a);

			var c = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s === false) s = c;
			else if (s != c) v = true;
			if (s == 0)		 v = true;
		}
		return v;
	}
	function ms_getPaddingBorderMargin(i, o, d) {
		return i[o.d['outer'+d]](true) - ms_getTrueInnerSize(i, o, 'inner'+d);
	}
	function ms_isPercentage(x) {
		return (typeof x == 'string' && x.slice(-1) == '%');
	}
	function ms_getPercentage(s, o) {
		if (ms_isPercentage(o)) {
			o = o.slice(0, -1);
			if (isNaN(o)) return s;
			s *= o/100;
		}
		return s;
	}

	//	config functions
	function cf_e(n, c, pf, ns, rd) {
		if (typeof pf != 'boolean') pf = true;
		if (typeof ns != 'boolean') ns = true;
		if (typeof rd != 'boolean') rd = false;
		
		if (pf) n = c.events.prefix + n;
		if (ns) n = n +'.'+ c.events.namespace;
		if (ns && rd) n += c.serialNumber;

		return n;
	}
	function cf_c(n, c) {
		return (typeof c.classnames[n] == 'string') ? c.classnames[n] : n;
	}
	function cf_mapWrapperSizes(ws, o, p) {
		if (typeof p != 'boolean') p = true;
		var pad = (o.usePadding && p) ? o.padding : [0, 0, 0, 0];
		var wra = {};
			wra[o.d['width']] = ws[0] + pad[1] + pad[3];
			wra[o.d['height']] = ws[1] + pad[0] + pad[2];

		return wra;
	}
	function cf_sortParams(vals, typs) {
		var arr = [];
		for (var a = 0, l1 = vals.length; a < l1; a++) {
			for (var b = 0, l2 = typs.length; b < l2; b++) {
				if (typs[b].indexOf(typeof vals[a]) > -1 && typeof arr[b] == 'undefined') {
					arr[b] = vals[a];
					break;
				}
			}
		}
		return arr;
	}
	function cf_getPadding(p) {
		if (typeof p == 'undefined') return [0, 0, 0, 0];
		
		if (typeof p == 'number') return [p, p, p, p];
		else if (typeof p == 'string') p = p.split('px').join('').split('em').join('').split(' ');

		if (!is_array(p)) {
			return [0, 0, 0, 0];
		}
		for (var i = 0; i < 4; i++) {
			p[i] = parseInt(p[i]);
		}
		switch (p.length) {
			case 0:	return [0, 0, 0, 0];
			case 1: return [p[0], p[0], p[0], p[0]];
			case 2: return [p[0], p[1], p[0], p[1]];
			case 3: return [p[0], p[1], p[2], p[1]];
			default: return [p[0], p[1], p[2], p[3]];
		}
	}
	function cf_getAlignPadding(itm, o) {
		var x = (typeof o[o.d['width']] == 'number') ? Math.ceil(o[o.d['width']] - ms_getTotalSize(itm, o, 'width')) : 0;
		switch (o.align) {
			case 'left': return [0, x];
			case 'right': return [x, 0];
			case 'center':
			default:
				return [Math.ceil(x/2), Math.floor(x/2)];
		}
	}
	function cf_getAdjust(x, o, a, $t) {
		var v = x;
		if (typeof a == 'function') {
			v = a.call($t, v);

		} else if (typeof a == 'string') {
			var p = a.split('+'),
				m = a.split('-');
			
			if (m.length > p.length) {
				var neg = true,
					sta = m[0],
					adj = m[1];
			} else {
				var neg = false,
					sta = p[0],
					adj = p[1];
			}

			switch(sta) {
				case 'even':
					v = (x % 2 == 1) ? x-1 : x;
					break;
				case 'odd':
					v = (x % 2 == 0) ? x-1 : x;
					break;
				default:
					v = x;
					break;
			}
			adj = parseInt(adj);
			if (!isNaN(adj)) {
				if (neg) adj = -adj;
				v += adj;
			}
		}
		if (typeof v != 'number') v = 1;
		if (v < 1) v = 1;
		return v;
	}
	function cf_getItemsAdjust(x, o, a, $t) {
		return cf_getItemAdjustMinMax(cf_getAdjust(x, o, a, $t), o.items.visibleConf);
	}
	function cf_getItemAdjustMinMax(v, i) {
		if (typeof i.min == 'number' && v < i.min) v = i.min;
		if (typeof i.max == 'number' && v > i.max) v = i.max;
		if (v < 1) v = 1;
		return v;
	}
	function cf_getSynchArr(s) {
		if (!is_array(s)) 		s = [[s]];
		if (!is_array(s[0]))	s = [s];
		for (var j = 0, l = s.length; j < l; j++) {
			if (typeof s[j][0] == 'string')		s[j][0] = $(s[j][0]);
			if (typeof s[j][1] != 'boolean')	s[j][1] = true;
			if (typeof s[j][2] != 'boolean')	s[j][2] = true;
			if (typeof s[j][3] != 'number')		s[j][3] = 0;
		}
		return s;
	}
	function cf_getKeyCode(k) {
		if (k == 'right')	return 39;
		if (k == 'left')	return 37;
		if (k == 'up')		return 38;
		if (k == 'down')	return 40;
		return -1;
	}
	function cf_setCookie(n, v) {
		if (n) document.cookie = n+'='+v+'; path=/';
	}
	function cf_readCookie(n) {
		n += '=';
		var ca = document.cookie.split(';');
		for (var a = 0, l = ca.length; a < l; a++) {
			var c = ca[a];
			while (c.charAt(0) == ' ') {
				c = c.slice(1);
			}
			if (c.indexOf(n) == 0) {
				return c.slice(n.length);
			}
		}
		return 0;
	}

	//	buttons functions
	function bt_pauseOnHoverConfig(p) {
		if (p && typeof p == 'string') {
			var i = (p.indexOf('immediate') > -1) ? true : false,
				r = (p.indexOf('resume') 	> -1) ? true : false;
		} else {
			var i = r = false;
		}
		return [i, r];
	}
	function bt_mousesheelNumber(mw) {
		return (typeof mw == 'number') ? mw : null
	}

	//	helper functions
	function is_array(a) {
		return typeof(a) == 'object' && (a instanceof Array);
	}

	function getTime() {
		return new Date().getTime();
	}

	function debug(d, m) {
		if (typeof d == 'object') {
			var s = ' ('+d.selector+')';
			d = d.debug;
		} else {
			var s = '';
		}
		if (!d) return false;
		
		if (typeof m == 'string') m = 'carouFredSel'+s+': ' + m;
		else m = ['carouFredSel'+s+':', m];

		if (window.console && window.console.log) window.console.log(m);
		return false;
	}


	//	CAROUFREDSEL ALL LOWERCASE

	$.fn.caroufredsel = function(o, c) {
		return this.carouFredSel(o, c);
	};


	//	EASING FUNCTIONS

	$.extend($.easing, {
		'quadratic'	: function(t) {
			var t2 = t * t;
			return t * (-t2 * t + 4 * t2 - 6 * t + 4);
		},
		'cubic'		: function(t) {
			return t * (4 * t * t - 9 * t + 6);
		},
		'elastic'	: function(t) {
			var t2 = t * t;
			return t * (33 * t2 * t2 - 106 * t2 * t + 126 * t2 - 67 * t + 15);
		}
	});


})(jQuery);;

jQuery(document).ready(function($) {
	var additionalOffset = true;
	function scrollToPoint(id, offset){
		jQuery('html,body').animate({scrollTop: jQuery(id).offset().top - offset},'slow');
	}
	
	//-----stick title on scroll-----
	jQuery(window).scroll(function() {
		var headerHeight = jQuery("#zone-menu-wrapper").height();
		var sliderHeight = jQuery("#zone-header-wrapper").height();
		var windowWidth = jQuery(window).width();
		if (jQuery(window).scrollTop() >= headerHeight) {
			jQuery("body.not-front #zone-header-wrapper").addClass('fixed').css({width:windowWidth});
			jQuery("body.not-front #section-content").css({paddingTop:sliderHeight});
			additionalOffset = false;
		} else {
			jQuery("body.not-front #zone-header-wrapper").removeClass('fixed').css({width:"100%"});
			jQuery("body.not-front #section-content").css({paddingTop:0});
			additionalOffset = false;
		}
	});

	//-----hash navigation scroll-----	
	jQuery(".hash_click").click(function(event){
	event.preventDefault();
	targetE = jQuery(this).attr('href');
	
	if (additionalOffset){
		scrollToPoint(targetE, jQuery("#zone-header-wrapper").height()-60);
	}
		else if((jQuery(targetE).offset().top)> jQuery("#zone-header-wrapper").height()){
			scrollToPoint(targetE, jQuery("#zone-header-wrapper").height()-60);
			}
			else{
				scrollToPoint(targetE,-60);
			}
	});
	
	//-----hash menu active-----
	function activeMenuItem(sections,navs,activeClass){
		var topsArray = sections.map(function(){
			return jQuery(this).position().top;
		}).get();
		topsArray.push(jQuery(document).height());
		var len = topsArray.length;
		var currentIndex = 0;
		var getCurrent = function(top){
			for(var i = 0; i < len; i++){
				if(top >= topsArray[i] && topsArray[i+1] && top < topsArray[i+1]){
					return i;
				}
			}
		};
		var currentIndex = getCurrent(jQuery(this).scrollTop());
        navs.eq( currentIndex ).addClass(activeClass);
		navs.eq( currentIndex ).addClass('active').siblings('.active').removeClass('active');
	};

	var o_nas_sections = jQuery('#content .view-opl .view-content > div');
    var o_nas_navs = jQuery('.block .view-opl ul li');
	var oferta_sections = jQuery('#content .view-oferta .view-content > div');
    var oferta_navs = jQuery('.block .view-oferta ul li');
	
	activeMenuItem(o_nas_sections,o_nas_navs,'active');
	activeMenuItem(oferta_sections,oferta_navs,'active');
				   
	jQuery(document).scroll(function(e){
		activeMenuItem(o_nas_sections,o_nas_navs,'active');
		activeMenuItem(oferta_sections,oferta_navs,'active');		
	});
	
});;
jQuery(document).ready(function($) {
	jQuery(".menu-block-1 ul.menu li").find('a').each(function(i) {
		var menu = jQuery('.menu-block-1');
		var elem1 = jQuery(this);
		var elem_height = elem1.outerHeight();
		menu.css({overflow:"hidden", height: elem_height});
		var elem2 = jQuery(this).clone();
		elem2.appendTo(elem1.parent());
		elem2.css({color:'#52cde2'});
		
		elem1.not('.active').parent().mouseover(function(){
			jQuery(this).find('a').stop().animate({top: -elem_height}, 200);
			jQuery(this).find('a').next().stop().animate({top: -elem_height}, 200);
		}).mouseout(function(){
			jQuery(this).find('a').stop().animate({top: 0}, 200);
			jQuery(this).find('a').next().stop().animate({top: 0}, 200);
		});
		
	});
});;
jQuery(document).ready(function($) {

//-----customers-main-----
	jQuery("body.front .view-id-klienci img").mouseover(function() {
		var src = $(this).attr('src').replace("partner_miniatura", "partner_miniatura_bw");
		jQuery(this).attr('src', src);
	}).mouseout(function(){
		var src = jQuery(this).attr('src').replace("partner_miniatura_bw", "partner_miniatura");
		jQuery(this).attr('src', src);
	});

//-----customers-customers-----
	jQuery("body.page-klienci .view-id-klienci img").mouseover(function() {
		var src = jQuery(this).attr('src').replace("partner", "partner_bw");
		jQuery(this).attr('src', src);
	}).mouseout(function(){
		var src = jQuery(this).attr('src').replace("partner_bw", "partner");
		jQuery(this).attr('src', src);
	});
//-----projects-aregator-----
	jQuery(".project_title").hide();
	jQuery(".project_categories").hide();
	jQuery(".project_hv").css({opacity:'0'});
	
	jQuery(".project_path a").mouseover(function() {
		jQuery(this).closest(".project_hv").stop().animate({opacity:'1'},150);
		jQuery(this).closest(".project_hv").find(".project_title").toggle();
		jQuery(this).closest(".project_hv").find(".project_categories").toggle();
	}).mouseout(function(){
		jQuery(this).closest(".project_hv").stop().animate({opacity:'0'},150);
		jQuery(this).closest(".project_hv").find(".project_title").toggle();
		jQuery(this).closest(".project_hv").find(".project_categories").toggle();
	});
});;
(function ($) {
	Drupal.behaviors.flov_portfolio = {
		attach: function (context, settings) {

			var items = $('.isotope-element, .jcarousel-item');
			$(items).mouseover(function() {
				$(this).find('.hv').stop().animate({bottom:'0px'},200);
				$(this).find('.labels_hv').stop().animate({bottom:'0px'},300);
				$(this).find('h3.pr_title a').css({'color':'#ffffff'});
				$(this).find('.pr_categories').css({'color':'#bcf5ff'});
			}).mouseout(function(){
				$(this).find('.hv').stop().animate({bottom:'-240px'},200);
				$(this).find('.labels_hv').stop().animate({bottom:'70px'},300);
				$(this).find('h3.pr_title a').css({'color':'#52cde2'});
				$(this).find('.pr_categories').css({'color':'#626777'});
			});
		}
	};
})(jQuery);
;

(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(y){var n=function(){y.call(this,"css");this._overwriteProps.pop()},s=n.prototype=new y("css");s.constructor=n;n.API=2;n.suffixMap={top:"px",right:"px",bottom:"px",left:"px",width:"px",height:"px",fontSize:"px",padding:"px",margin:"px"};var v=/[^\d\-\.]/g,E=/(\d|\-|\+|=|#|\.)*/g,R=/(\d|\.)+/g,F=/opacity=([^)]*)/,S=/opacity:([^;]*)/,T=/([A-Z])/g,J=/-([a-z])/gi,K=function(b, a){return a.toUpperCase()},U=/(Left|Right|Width)/i,V=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,W=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,w=Math.PI/180,L=180/Math.PI,t=document.createElement("div"),z=function(){var b=document.createElement("div"),a;b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>";return!(a=b.getElementsByTagName("a")[0])?!1:/^0.55/.test(a.style.opacity)}(),M;/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent);M=parseFloat(RegExp.$1);var N=function(b){return!b||""===b?A.black: A[b]?A[b]:"number"===typeof b?[b>>16,b>>8&255,b&255]:"#"===b.charAt(0)?(4===b.length&&(b="#"+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2)+b.charAt(3)+b.charAt(3)),b=parseInt(b.substr(1),16),[b>>16,b>>8&255,b&255]):b.match(R)||A.transparent},O=function(b){return F.test("string"===typeof b?b:(b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100:1},x=document.defaultView?document.defaultView.getComputedStyle:function(){},r=function(b,a,e,c){return!z&&"opacity"===a?O(b): !c&&b.style[a]?b.style[a]:(e=e||x(b,null))?(b=e.getPropertyValue(a.replace(T,"-$1").toLowerCase()))||e.length?b:e[a]:b.currentStyle?b.currentStyle[a]:null},B=function(b,a){var e={},c;if(a=a||x(b,null))if(c=a.length)for(;-1<--c;)e[a[c].replace(J,K)]=a.getPropertyValue(a[c]);else for(c in a)e[c]=a[c];else if(a=b.currentStyle||b.style)for(c in a)e[c.replace(J,K)]=a[c];z||(e.opacity=O(b));c=G(b,a,!1);e.rotation=c.rotation*L;e.skewX=c.skewX*L;e.scaleX=c.scaleX;e.scaleY=c.scaleY;e.x=c.x;e.y=c.y;null!=e.filters&& delete e.filters;return e},P=function(b,a,e,c){var h={},d,g;for(g in a)if("cssText"!==g&&"length"!==g&&isNaN(g)&&b[g]!=(d=a[g]))if(d!==m&&("number"===typeof d||"string"===typeof d))h[g]=d,c&&c.props.push(g);if(e)for(g in e)"className"!==g&&(h[g]=e[g]);return h},Q={scaleX:1,scaleY:1,x:1,y:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},m,X=function(){for(var b=document.body||document.documentElement,a=x(b,""),e="O -o- Moz -moz- ms -ms- Webkit -webkit-".split(" "),c=9;-1<(c-=2)&&!r(b,e[c]+"transform", a););return 0<c?(m=e[c-1]+"Transform",e[c]):null}(),H=navigator.userAgent,Y=-1!==H.indexOf("Safari")&&-1===H.indexOf("Chrome")&&-1===H.indexOf("Android"),G=function(b,a,e){var c=b._gsTransform,h;m?h=r(b,X+"transform",a,!0):b.currentStyle&&(h=(h=b.currentStyle.filter.match(V))&&4===h.length?h[0].substr(4)+","+Number(h[2].substr(4))+","+Number(h[1].substr(4))+","+h[3].substr(4)+","+(c?c.x:0)+","+(c?c.y:0):null);var a=(h||"").replace(/[^\d\-\.e,]/g,"").split(","),d=(h=6<=a.length)?Number(a[0]):1,g=h? Number(a[1]):0,f=h?Number(a[2]):0,i=h?Number(a[3]):1,c=e?c||{skewY:0}:{skewY:0},j=0>c.scaleX;c.x=h?Number(a[4]):0;c.y=h?Number(a[5]):0;c.scaleX=Math.sqrt(d*d+g*g);c.scaleY=Math.sqrt(i*i+f*f);c.rotation=d||g?Math.atan2(g,d):c.rotation||0;c.skewX=f||i?Math.atan2(f,i)+c.rotation:c.skewX||0;Math.abs(c.skewX)>Math.PI/2&&(j?(c.scaleX*=-1,c.skewX+=0>=c.rotation?Math.PI:-Math.PI,c.rotation+=0>=c.rotation?Math.PI:-Math.PI):(c.scaleY*=-1,c.skewX+=0>=c.skewX?Math.PI:-Math.PI));if(1.0E-6>c.rotation&&-1.0E-6< c.rotation&&(d||g))c.rotation=0;if(1.0E-6>c.skewX&&-1.0E-6<c.skewX&&(g||f))c.skewX=0;e&&(b._gsTransform=c);return c},Z={width:["Left","Right"],height:["Top","Bottom"]},$=["marginLeft","marginRight","marginTop","marginBottom"],u=function(b,a,e,c,h){if("px"===c)return e;if("auto"===c)return 0;var d=U.test(a),g=b,f=0>e;f&&(e=-e);t.style.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;";"%"===c||"em"===c?(g=b.parentNode||document.body,t.style[d?"width":"height"]=e+c):t.style[d? "borderLeftWidth":"borderTopWidth"]=e+c;g.appendChild(t);d=parseFloat(t[d?"offsetWidth":"offsetHeight"]);g.removeChild(t);0===d&&!h&&(d=u(b,a,e,c,!0));return f?-d:d},I=function(b,a){if(null==b||""===b||"auto"===b)b="0 0";var a=a||{},e=-1!==b.indexOf("left")?"0%":-1!==b.indexOf("right")?"100%":b.split(" ")[0],c=-1!==b.indexOf("top")?"0%":-1!==b.indexOf("bottom")?"100%":b.split(" ")[1];null==c?c="0":"center"===c&&(c="50%");"center"===e&&(e="50%");a.oxp=-1!==e.indexOf("%");a.oyp=-1!==c.indexOf("%"); a.oxr="="===e.charAt(1);a.oyr="="===c.charAt(1);a.ox=parseFloat(e.replace(v,""));a.oy=parseFloat(c.replace(v,""));return a},C=function(b,a){return null==b?a:"string"===typeof b&&1===b.indexOf("=")?Number(b.split("=").join(""))+a:Number(b)},D=function(b,a){var e=-1===b.indexOf("rad")?w:1,c=1===b.indexOf("="),b=Number(b.replace(v,""))*e;return c?b+a:b},A={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255, 255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]};s._onInitTween=function(b,a,e){if(!b.nodeType)return!1;this._target=b;this._tween=e;this._classData=this._transform=null;var e=this._style=b.style,c=x(b,""),h,d;"string"===typeof a?(h=e.cssText,d=B(b,c),e.cssText=h+";"+a,d=P(d,B(b)),!z&&S.test(a)&&(val.opacity=parseFloat(RegExp.$1)),a=d, e.cssText=h):a.className&&(h=b.className,d=B(b,c),b.className="="!==a.className.charAt(1)?a.className:"+"===a.className.charAt(0)?b.className+" "+a.className.substr(2):b.className.split(a.className.substr(2)).join(""),a=P(d,B(b),a,this._classData={b:h,e:b.className,props:[]}),b.className=h);this._parseVars(a,b,c,a.suffixMap||n.suffixMap);return!0};s._parseVars=function(b,a,e,c){var h=this._style,d,g,f,i,j,l,k;for(d in b)if(g=b[d],"transform"===d||d===m)this._parseTransform(a,g,e,c);else if(Q[d]|| "transformOrigin"===d)this._parseTransform(a,b,e,c);else{if("alpha"===d||"autoAlpha"===d)d="opacity";else if("margin"===d||"padding"===d){g=(g+"").split(" ");i=g.length;f={};f[d+"Top"]=g[0];f[d+"Right"]=1<i?g[1]:g[0];f[d+"Bottom"]=4===i?g[2]:g[0];f[d+"Left"]=4===i?g[3]:2===i?g[1]:g[0];this._parseVars(f,a,e,c);continue}else if("backgroundPosition"===d||"backgroundSize"===d){f=I(g);k=I(i=r(a,d,e));this._firstPT=f={_next:this._firstPT,t:h,p:d,b:i,f:!1,n:"css_"+d,type:3,s:k.ox,c:f.oxr?f.ox:f.ox-k.ox, ys:k.oy,yc:f.oyr?f.oy:f.oy-k.oy,sfx:f.oxp?"%":"px",ysfx:f.oyp?"%":"px",r:!f.oxp&&!1!==b.autoRound};f.e=f.s+f.c+f.sfx+" "+(f.ys+f.yc)+f.ysfx;continue}else if("border"===d){g=(g+"").split(" ");this._parseVars({borderWidth:g[0],borderStyle:g[1]||"none",borderColor:g[2]||"#000000"},a,e,c);continue}else if("autoRound"===d)continue;i=r(a,d,e);i=null!=i?i+"":"";this._firstPT=f={_next:this._firstPT,t:h,p:d,b:i,f:!1,n:"css_"+d,sfx:"",r:!1,type:0};"opacity"===d&&null!=b.autoAlpha&&("1"===i&&"hidden"===r(a, "visibility",e)&&(i=f.b="0"),this._firstPT=f._prev={_next:f,t:h,p:"visibility",f:!1,n:"css_visibility",r:!1,type:-1,b:0!==Number(i)?"visible":"hidden",i:"visible",e:0===Number(g)?"hidden":"visible"},this._overwriteProps.push("css_visibility"));if("color"===d||"fill"===d||"stroke"===d||-1!==d.indexOf("Color")||"string"===typeof g&&!g.indexOf("rgb("))j=N(i),g=N(g),f.e=(3<g.length?"rgba":"rgb")+"("+g.join(",")+")",f.s=Number(j[0]),f.c=Number(g[0])-f.s,f.gs=Number(j[1]),f.gc=Number(g[1])-f.gs,f.bs=Number(j[2]), f.bc=Number(g[2])-f.bs,3<j.length||3<g.length?(f.as=4>j.length?1:Number(j[3]),f.ac=(4>g.length?1:Number(g[3]))-f.as,f.type=f.c||f.gc||f.bc||f.ac?2:-1):f.type=f.c||f.gc||f.bc?1:-1;else{j=i.replace(E,"");if(""===i||"auto"===i)if("width"===d||"height"===d){l=d;j=a;i=e;k=parseFloat("width"===l?j.offsetWidth:j.offsetHeight);l=Z[l];var o=l.length;for(i=i||x(j,null);-1<--o;)k-=parseFloat(r(j,"padding"+l[o],i,!0))||0,k-=parseFloat(r(j,"border"+l[o]+"Width",i,!0))||0;j="px"}else k="opacity"!==d?0:1,j="";else k= -1===i.indexOf(" ")?parseFloat(i.replace(v,"")):NaN;"string"===typeof g?(i="="===g.charAt(1),l=g.replace(E,""),g=-1===g.indexOf(" ")?parseFloat(g.replace(v,"")):NaN):(i=!1,l="");""===l&&(l=c[d]||j);f.e=g||0===g?(i?g+k:g)+l:b[d];if(j!==l&&""!==l&&(g||0===g))if(k||0===k)if(k=u(a,d,k,j),"%"===l?(k/=u(a,d,100,"%")/100,100<k&&(k=100)):"em"===l?k/=u(a,d,1,"em"):(g=u(a,d,g,l),l="px"),i&&(g||0===g))f.e=g+k+l;if((k||0===k)&&(g||0===g)&&(f.c=i?g:g-k))if(f.s=k,f.sfx=l,"opacity"===d)z||(f.type=4,f.p="filter", f.b="alpha(opacity="+100*f.s+")",f.e="alpha(opacity="+100*(f.s+f.c)+")",f.dup=null!=b.autoAlpha,this._style.zoom=1);else{if(!1!==b.autoRound&&("px"===l||"zIndex"===d))f.r=!0}else f.type=-1,f.i=f.e,f.s=f.c=0}this._overwriteProps.push("css_"+d);f._next&&(f._next._prev=f)}};s._parseTransform=function(b,a,e){if(!this._transform){var e=this._transform=G(b,e,!0),c=this._style,h,d;if("object"===typeof a){b={scaleX:C(null!=a.scaleX?a.scaleX:a.scale,e.scaleX),scaleY:C(null!=a.scaleY?a.scaleY:a.scale,e.scaleY), x:C(a.x,e.x),y:C(a.y,e.y)};null!=a.shortRotation?(b.rotation="number"===typeof a.shortRotation?a.shortRotation*w:D(a.shortRotation,e.rotation),h=(b.rotation-e.rotation)%(2*Math.PI),h!==h%Math.PI&&(h+=Math.PI*(0>h?2:-2)),b.rotation=e.rotation+h):b.rotation=null==a.rotation?e.rotation:"number"===typeof a.rotation?a.rotation*w:D(a.rotation,e.rotation);b.skewX=null==a.skewX?e.skewX:"number"===typeof a.skewX?a.skewX*w:D(a.skewX,e.skewX);b.skewY=null==a.skewY?e.skewY:"number"===typeof a.skewY?a.skewY*w: D(a.skewY,e.skewY);if(h=b.skewY-e.skewY)b.skewX+=h,b.rotation+=h;1.0E-6>b.skewY&&-1.0E-6<b.skewY&&(b.skewY=0);1.0E-6>b.skewX&&-1.0E-6<b.skewX&&(b.skewX=0);1.0E-6>b.rotation&&-1.0E-6<b.rotation&&(b.rotation=0);if(null!=(a=a.transformOrigin))m?(d=m+"Origin",this._firstPT=a={_next:this._firstPT,t:c,p:d,s:0,c:0,n:d,f:!1,r:!1,b:c[d],e:a,i:a,type:-1,sfx:""},a._next&&(a._next._prev=a)):I(a,e)}else if("string"===typeof a&&m)h=c[m],c[m]=a,b=G(b,null,!1),c[m]=h;else return;m?Y&&(c[m+"Style"]="preserve-3d"): c.zoom=1;for(d in Q)e[d]!==b[d]&&("shortRotation"!==d&&"scale"!==d)&&(this._firstPT=a={_next:this._firstPT,t:e,p:d,s:e[d],c:b[d]-e[d],n:d,f:!1,r:!1,b:e[d],e:b[d],type:0,sfx:0},a._next&&(a._next._prev=a),this._overwriteProps.push("css_"+d))}};s.setRatio=function(b){var a=this._firstPT,e=1.0E-6,c,h;if(1===b&&(this._tween._time===this._tween._duration||0===this._tween._time))for(;a;)a.t[a.p]=a.e,4===a.type&&1===a.s+a.c&&(this._style.removeAttribute("filter"),r(this._target,"filter")&&(a.t[a.p]=a.e)), a=a._next;else if(b||!(this._tween._time===this._tween._duration||0===this._tween._time))for(;a;)c=a.c*b+a.s,a.r?c=0<c?c+0.5>>0:c-0.5>>0:c<e&&c>-e&&(c=0),a.type?1===a.type?a.t[a.p]="rgb("+(c>>0)+", "+(a.gs+b*a.gc>>0)+", "+(a.bs+b*a.bc>>0)+")":2===a.type?a.t[a.p]="rgba("+(c>>0)+", "+(a.gs+b*a.gc>>0)+", "+(a.bs+b*a.bc>>0)+", "+(a.as+b*a.ac)+")":-1===a.type?a.t[a.p]=a.i:3===a.type?(h=a.ys+b*a.yc,a.r&&(h=0<h?h+0.5>>0:h-0.5>>0),a.t[a.p]=c+a.sfx+" "+h+a.ysfx):(a.dup&&(a.t.filter=a.t.filter||"alpha(opacity=100)"), a.t.filter=-1===a.t.filter.indexOf("opacity=")?a.t.filter+(" alpha(opacity="+(100*c>>0)+")"):a.t.filter.replace(F,"opacity="+(100*c>>0))):a.t[a.p]=c+a.sfx,a=a._next;else for(;a;)a.t[a.p]=a.b,4===a.type&&1===a.s&&(this._style.removeAttribute("filter"),r(this._target,"filter")&&(a.t[a.p]=a.b)),a=a._next;if(this._transform)if(a=this._transform,m&&!a.rotation&&!a.skewX)this._style[m]=(a.x||a.y?"translate("+a.x+"px,"+a.y+"px) ":"")+(1!==a.scaleX||1!==a.scaleY?"scale("+a.scaleX+","+Math.cos(a.skewX)*a.scaleY+ ")":"")||"translate(0px,0px)";else{var d=m?a.rotation:-a.rotation,g=m?d-a.skewX:d+a.skewX;h=Math.cos(d)*a.scaleX;var d=Math.sin(d)*a.scaleX,f=Math.sin(g)*-a.scaleY,g=Math.cos(g)*a.scaleY,i;d<e&&d>-e&&(d=0);f<e&&f>-e&&(f=0);if(m)this._style[m]="matrix("+h+","+d+","+f+","+g+","+a.x+","+a.y+")";else if(i=this._target.currentStyle){e=d;d=-f;f=-e;e=this._style.filter;this._style.filter="";c=this._target.offsetWidth;var j=this._target.offsetHeight,l="absolute"!==i.position,k="progid:DXImageTransform.Microsoft.Matrix(M11="+ h+", M12="+d+", M21="+f+", M22="+g,o=a.x,n=a.y,p,q;null!=a.ox&&(p=(a.oxp?0.01*c*a.ox:a.ox)-c/2,q=(a.oyp?0.01*j*a.oy:a.oy)-j/2,o=p-(p*h+q*d)+a.x,n=q-(p*f+q*g)+a.y);if(l)p=c/2,q=j/2,k+=", Dx="+(p-(p*h+q*d)+o)+", Dy="+(q-(p*f+q*g)+n)+")";else{var s=8>M?1:-1;p=a.ieOffsetX||0;q=a.ieOffsetY||0;a.ieOffsetX=Math.round((c-((0>h?-h:h)*c+(0>d?-d:d)*j))/2+o);a.ieOffsetY=Math.round((j-((0>g?-g:g)*j+(0>f?-f:f)*c))/2+n);for(j=0;4>j;j++)o=$[j],c=i[o],c=-1!==c.indexOf("px")?parseFloat(c):u(this._target,o,parseFloat(c), c.replace(E,""))||0,n=c!==a[o]?2>j?-a.ieOffsetX:-a.ieOffsetY:2>j?p-a.ieOffsetX:q-a.ieOffsetY,this._style[o]=(a[o]=Math.round(c-n*(0===j||2===j?1:s)))+"px";k+=", sizingMethod='auto expand')"}this._style.filter=-1!==e.indexOf("progid:DXImageTransform.Microsoft.Matrix(")?e.replace(W,k):e+" "+k;if(0===b||1===b)if(1===h&&0===d&&0===f&&1===g&&(!l||-1!==k.indexOf("Dx=0, Dy=0")))(!F.test(e)||100===parseFloat(RegExp.$1))&&this._style.removeAttribute("filter")}}if(this._classData)if(a=this._classData,1===b&& (this._tween._time===this._tween._duration||0===this._tween._time)){for(j=a.props.length;-1<--j;)this._style[a.props[j]]="";this._target.className=a.e}else this._target.className!==a.b&&(this._target.className=a.b)};s._kill=function(b){var a=b,e;if(b.autoAlpha||b.alpha){a={};for(e in b)a[e]=b[e];a.opacity=1;a.autoAlpha&&(a.visibility=1)}return y.prototype._kill.call(this,a)};y.activate([n]);return n},!0)});window._gsDefine&&_gsQueue.pop()();;

(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("easing.Back",["easing.Ease"],function(g){var c=window.com.greensock._class,b=function(a,l){var b=c("easing."+a,function(){},!0),d=b.prototype=new g;d.constructor=b;d.getRatio=l;return b},h=function(a,l){var b=c("easing."+a,function(a){this._p1=a||0===a?a:1.70158;this._p2=1.525*this._p1},!0),d=b.prototype=new g;d.constructor=b;d.getRatio=l;d.config=function(a){return new b(a)};return b},n=h("BackOut",function(a){return(a-=1)*a*((this._p1+ 1)*a+this._p1)+1}),o=h("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),h=h("BackInOut",function(a){return 1>(a*=2)?0.5*a*a*((this._p2+1)*a-this._p2):0.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)}),p=b("BounceOut",function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375}),q=b("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:a<2/2.75?1-(7.5625*(a-=1.5/2.75)*a+0.75):a<2.5/2.75?1-(7.5625*(a-= 2.25/2.75)*a+0.9375):1-(7.5625*(a-=2.625/2.75)*a+0.984375)}),r=b("BounceInOut",function(a){var b=0.5>a,a=b?1-2*a:2*a-1,a=a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375;return b?0.5*(1-a):0.5*a+0.5}),s=b("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),t=b("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),u=b("CircInOut",function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)}),i= 2*Math.PI,j=function(a,b,e){var d=c("easing."+a,function(a,b){a=a||0;this._p1=!a||1>a?1:a;this._p2=b||e;this._p3=this._p2/i*Math.asin(1/this._p1)},!0),a=d.prototype=new g;a.constructor=d;a.getRatio=b;a.config=function(a,b){return new d(a,b)};return d},v=j("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*i/this._p2)+1},0.3),w=j("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*i/this._p2))},0.3),j=j("ElasticInOut",function(a){return 1> (a*=2)?-0.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*i/this._p2):0.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*i/this._p2)+1},0.45),x=b("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),y=b("ExpoIn",function(a){return Math.pow(2,10*(a-1))-0.001}),z=b("ExpoInOut",function(a){return 1>(a*=2)?0.5*Math.pow(2,10*(a-1)):0.5*(2-Math.pow(2,-10*(a-1)))}),m=Math.PI/2,A=b("SineOut",function(a){return Math.sin(a*m)}),B=b("SineIn",function(a){return-Math.cos(a*m)+1}),b=b("SineInOut",function(a){return-0.5* (Math.cos(Math.PI*a)-1)}),f=c("easing.SlowMo",function(a,b,c){null==a?a=0.7:1<a&&(a=1);this._p=1!=a?b||0===b?b:0.7:0;this._p1=(1-a)/2;this._p2=a;this._p3=this._p1+this._p2;this._calcEnd=!0===c},!0),e=f.prototype=new g;e.constructor=f;e.getRatio=function(a){var b=a+(0.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b};f.ease=new f(0.7,0.7);e.config= f.config=function(a,b,c){return new f(a,b,c)};var k=c("easing.SteppedEase",function(a){a=a||1;this._p1=1/a;this._p2=a+1},!0),e=k.prototype=new g;e.constructor=k;e.getRatio=function(a){0>a?a=0:1<=a&&(a=0.999999999);return(this._p2*a>>0)*this._p1};e.config=k.config=function(a){return new k(a)};c("easing.Bounce",{easeOut:new p,easeIn:new q,easeInOut:new r},!0);c("easing.Circ",{easeOut:new s,easeIn:new t,easeInOut:new u},!0);c("easing.Elastic",{easeOut:new v,easeIn:new w,easeInOut:new j},!0);c("easing.Expo", {easeOut:new x,easeIn:new y,easeInOut:new z},!0);c("easing.Sine",{easeOut:new A,easeIn:new B,easeInOut:new b},!0);return{easeOut:new n,easeIn:new o,easeInOut:new h}},!0)});window._gsDefine&&_gsQueue.pop()();;

(function(m){var F=function(a){var a=a.split("."),c=m,b;for(b=0;b<a.length;b++)c[a[b]]=c=c[a[b]]||{};return c},n=F("com.greensock"),o,j,d,z,v={},C=function(a,c,b,i){this.sc=v[a]?v[a].sc:[];v[a]=this;this.gsClass=null;this.def=b;var e=c||[],d=[];this.check=function(c){for(var g=e.length,f=0,k;-1<--g;)(k=v[e[g]]||new C(e[g])).gsClass?d[g]=k.gsClass:(f++,c&&k.sc.push(this));if(0===f&&b){var c=("com.greensock."+a).split("."),g=c.pop(),j=F(c.join("."))[g]=this.gsClass=b.apply(b,d);i&&((m.GreenSockGlobals|| m)[g]=j,"function"===typeof define&&define.amd?define((m.GreenSockAMDPath?m.GreenSockAMDPath+"/":"")+a.split(".").join("/"),[],function(){return j}):"undefined"!==typeof module&&module.exports&&(module.exports=j));for(g=0;g<this.sc.length;g++)this.sc[g].check(!1)}};this.check(!0)},q=n._class=function(a,c,b){new C(a,[],function(){return c},b);return c};m._gsDefine=function(a,c,b,i){return new C(a,c,b,i)};var G=[0,0,1,1],D=[],r=q("easing.Ease",function(a,c,b,i){this._func=a;this._type=b||0;this._power= i||0;this._params=c?G.concat(c):G},!0);d=r.prototype;d._calcEnd=!1;d.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var c=this._type,b=this._power,i=1===c?1-a:2===c?a:0.5>a?2*a:2*(1-a);1===b?i*=i:2===b?i*=i*i:3===b?i*=i*i*i:4===b&&(i*=i*i*i*i);return 1===c?1-i:2===c?i:0.5>a?i/2:1-i/2};o=["Linear","Quad","Cubic","Quart","Quint"];for(j=o.length;-1<--j;)d=q("easing."+o[j],function(){},!0),z=q("easing.Power"+j,function(){},!0),d.easeOut=z.easeOut=new r(null, null,1,j),d.easeIn=z.easeIn=new r(null,null,2,j),d.easeInOut=z.easeInOut=new r(null,null,3,j);q("easing.Strong",n.easing.Power4,!0);n.easing.Linear.easeNone=n.easing.Linear.easeIn;d=q("events.EventDispatcher",function(a){this._listeners={};this._eventTarget=a||this}).prototype;d.addEventListener=function(a,c,b,i,e){var e=e||0,d=this._listeners[a],h=0,g;null==d&&(this._listeners[a]=d=[]);for(g=d.length;-1<--g;)a=d[g],a.c===c?d.splice(g,1):0===h&&a.pr<e&&(h=g+1);d.splice(h,0,{c:c,s:b,up:i,pr:e})};d.removeEventListener= function(a,c){var b=this._listeners[a];if(b)for(var i=b.length;-1<--i;)if(b[i].c===c){b.splice(i,1);break}};d.dispatchEvent=function(a){var c=this._listeners[a];if(c)for(var b=c.length,i,d=this._eventTarget;-1<--b;)i=c[b],i.up?i.c.call(i.s||d,{type:a,target:d}):i.c.call(i.s||d)};var A=m.requestAnimationFrame,B=m.cancelAnimationFrame,H=Date.now||function(){return(new Date).getTime()};o=["ms","moz","webkit","o"];for(j=o.length;-1<--j&&!A;)A=m[o[j]+"RequestAnimationFrame"],B=m[o[j]+"CancelAnimationFrame"]|| m[o[j]+"CancelRequestAnimationFrame"];B||(B=function(a){m.clearTimeout(a)});q("Ticker",function(a,c){this.frame=this.time=0;var b=this,i=H(),d=!1!==c,l,h,g,f,k;this.tick=function(){b.time=(H()-i)/1E3;if(!l||b.time>=k)b.frame++,k=b.time+f-(b.time-k)-5.0E-4,k<=b.time&&(k=b.time+0.001),b.dispatchEvent("tick");g=h(b.tick)};this.fps=function(a){if(!arguments.length)return l;l=a;f=1/(l||60);k=this.time+f;h=0===l?function(){}:!d||!A?function(a){return m.setTimeout(a,1E3*(k-b.time)+1>>0||1)}:A;B(g);g=h(b.tick)}; this.useRAF=function(a){if(!arguments.length)return d;d=a;this.fps(l)};this.fps(a)});d=n.Ticker.prototype=new n.events.EventDispatcher;d.constructor=n.Ticker;var p=q("core.Animation",function(a,c){this.vars=c||{};this._duration=this._totalDuration=a||0;this._delay=Number(this.vars.delay)||0;this._timeScale=1;this._active=!0==this.vars.immediateRender;this.data=this.vars.data;this._reversed=!0==this.vars.reversed;if(s){var b=this.vars.useFrames?w:s;b.insert(this,b._time);this.vars.paused&&this.paused(!0)}}), t=p.ticker=new n.Ticker;d=p.prototype;d._dirty=d._gc=d._initted=d._paused=!1;d._totalTime=d._time=0;d._rawPrevTime=-1;d._next=d._last=d._onUpdate=d._timeline=d.timeline=null;d._paused=!1;d.play=function(a,c){arguments.length&&this.seek(a,c);this.reversed(!1);return this.paused(!1)};d.pause=function(a,c){arguments.length&&this.seek(a,c);return this.paused(!0)};d.resume=function(a,c){arguments.length&&this.seek(a,c);return this.paused(!1)};d.seek=function(a,c){return this.totalTime(Number(a),!1!=c)}; d.restart=function(a,c){this.reversed(!1);this.paused(!1);return this.totalTime(a?-this._delay:0,!1!=c)};d.reverse=function(a,c){arguments.length&&this.seek(a||this.totalDuration(),c);this.reversed(!0);return this.paused(!1)};d.render=function(){};d.invalidate=function(){return this};d._enabled=function(a,c){this._gc=!a;this._active=a&&!this._paused&&0<this._totalTime&&this._totalTime<this._totalDuration;!0!=c&&(a&&null==this.timeline?this._timeline.insert(this,this._startTime-this._delay):!a&&null!= this.timeline&&this._timeline._remove(this,!0));return!1};d._kill=function(){return this._enabled(!1,!1)};d.kill=function(a,c){this._kill(a,c);return this};d._uncache=function(a){for(a=a?this:this.timeline;a;)a._dirty=!0,a=a.timeline;return this};d.eventCallback=function(a,c,b,i){if(null==a)return null;if("on"===a.substr(0,2)){if(1===arguments.length)return this.vars[a];if(null==c)delete this.vars[a];else if(this.vars[a]=c,this.vars[a+"Params"]=b,this.vars[a+"Scope"]=i,b)for(var d=b.length;-1<--d;)"{self}"=== b[d]&&(b=this.vars[a+"Params"]=b.concat(),b[d]=this);"onUpdate"===a&&(this._onUpdate=c)}return this};d.delay=function(a){if(!arguments.length)return this._delay;this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay);this._delay=a;return this};d.duration=function(a){if(!arguments.length)return this._dirty=!1,this._duration;this._duration=this._totalDuration=a;this._uncache(!0);this._timeline.smoothChildTiming&&this._active&&0!=a&&this.totalTime(this._totalTime*(a/this._duration), !0);return this};d.totalDuration=function(a){this._dirty=!1;return!arguments.length?this._totalDuration:this.duration(a)};d.time=function(a,c){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();a>this._duration&&(a=this._duration);return this.totalTime(a,c)};d.totalTime=function(a,c){if(!arguments.length)return this._totalTime;if(this._timeline){0>a&&(a+=this.totalDuration());if(this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),a>this._totalDuration&&(a=this._totalDuration), this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(!this._reversed?a:this._totalDuration-a)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var b=this._timeline;b._timeline;)b.totalTime(b._totalTime,!0),b=b._timeline;this._gc&&this._enabled(!0,!1);this._totalTime!=a&&this.render(a,c,!1)}return this};d.startTime=function(a){if(!arguments.length)return this._startTime;a!=this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&& this.timeline.insert(this,a-this._delay));return this};d.timeScale=function(a){if(!arguments.length)return this._timeScale;a=a||1.0E-6;if(this._timeline&&this._timeline.smoothChildTiming){var c=this._pauseTime||0==this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=c-(c-this._startTime)*this._timeScale/a}this._timeScale=a;return this._uncache(!1)};d.reversed=function(a){if(!arguments.length)return this._reversed;a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime, !0));return this};d.paused=function(a){if(!arguments.length)return this._paused;a!=this._paused&&this._timeline&&(!a&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=a?this._timeline.rawTime():null,this._paused=a,this._active=!this._paused&&0<this._totalTime&&this._totalTime<this._totalDuration);this._gc&&(a||this._enabled(!0,!1));return this};n=q("core.SimpleTimeline",function(a){p.call(this,0,a);this.autoRemoveChildren= this.smoothChildTiming=!0});d=n.prototype=new p;d.constructor=n;d.kill()._gc=!1;d._first=d._last=null;d._sortChildren=!1;d.insert=function(a,c){a._startTime=Number(c||0)+a._delay;a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale);a.timeline&&a.timeline._remove(a,!0);a.timeline=a._timeline=this;a._gc&&a._enabled(!0,!0);var b=this._last;if(this._sortChildren)for(var d=a._startTime;b&&b._startTime>d;)b=b._prev;b?(a._next=b._next,b._next=a):(a._next= this._first,this._first=a);a._next?a._next._prev=a:this._last=a;a._prev=b;this._timeline&&this._uncache(!0);return this};d._remove=function(a,c){a.timeline===this&&(c||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0));return this};d.render=function(a,c){var b=this._first,d;for(this._totalTime=this._time=this._rawPrevTime=a;b;){d=b._next;if(b._active|| a>=b._startTime&&!b._paused)b._reversed?b.render((!b._dirty?b._totalDuration:b.totalDuration())-(a-b._startTime)*b._timeScale,c,!1):b.render((a-b._startTime)*b._timeScale,c,!1);b=d}};d.rawTime=function(){return this._totalTime};var f=q("TweenLite",function(a,c,b){p.call(this,c,b);if(null==a)throw"Cannot tween an undefined reference.";this.target=a;this._overwrite=null==this.vars.overwrite?I[f.defaultOverwrite]:"number"===typeof this.vars.overwrite?this.vars.overwrite>>0:I[this.vars.overwrite];if((a instanceof Array||a.jquery)&&"object"===typeof a[0]){this._targets=a.slice(0);this._propLookup=[];this._siblings=[];for(a=0;a<this._targets.length;a++)b=this._targets[a],b.jquery?(this._targets.splice(a--,1),this._targets=this._targets.concat(b.constructor.makeArray(b))):(this._siblings[a]=x(b,this,!1),1===this._overwrite&&1<this._siblings[a].length&&E(b,this,null,1,this._siblings[a]))}else this._propLookup={},this._siblings=x(a,this,!1),1===this._overwrite&&1<this._siblings.length&&E(a,this,null,1,this._siblings); (this.vars.immediateRender||0===c&&0===this._delay&&!1!=this.vars.immediateRender)&&this.render(-this._delay,!1,!0)},!0);d=f.prototype=new p;d.constructor=f;d.kill()._gc=!1;d.ratio=0;d._firstPT=d._targets=d._overwrittenProps=null;d._notifyPluginsOfEnabled=!1;f.version=12;f.defaultEase=d._ease=new r(null,null,1,1);f.defaultOverwrite="auto";f.ticker=t;var J=f._plugins={},u={},L=0,M={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1, onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1},I={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},w=p._rootFramesTimeline=new n,s=p._rootTimeline=new n;s._startTime=t.time;w._startTime=t.frame;s._active=w._active=!0;p._updateRoot= function(){s.render((t.time-s._startTime)*s._timeScale,!1,!1);w.render((t.frame-w._startTime)*w._timeScale,!1,!1);if(!(t.frame%120)){var a,c,b;for(b in u){c=u[b].tweens;for(a=c.length;-1<--a;)c[a]._gc&&c.splice(a,1);0===c.length&&delete u[b]}}};t.addEventListener("tick",p._updateRoot);var x=function(a,c,b){var d=a._gsTweenID,e;if(!u[d||(a._gsTweenID=d="t"+L++)])u[d]={target:a,tweens:[]};if(c&&(a=u[d].tweens,a[e=a.length]=c,b))for(;-1<--e;)a[e]===c&&a.splice(e,1);return u[d].tweens},E=function(a,c, b,d,e){var l,h,g;if(1===d||4<=d){a=e.length;for(l=0;l<a;l++)if((g=e[l])!==c)g._gc||g._enabled(!1,!1)&&(h=!0);else if(5===d)break;return h}var f=c._startTime+1.0E-10,k=[],j=0,m;for(l=e.length;-1<--l;)if(!((g=e[l])===c||g._gc||g._paused))g._timeline!==c._timeline?(m=m||K(c,0),0===K(g,m)&&(k[j++]=g)):g._startTime<=f&&g._startTime+g.totalDuration()/g._timeScale+1.0E-10>f&&((0===c._duration||!g._initted)&&2.0E-10>=f-g._startTime||(k[j++]=g));for(l=j;-1<--l;)if(g=k[l],2===d&&g._kill(b,a)&&(h=!0),2!==d|| !g._firstPT&&g._initted)g._enabled(!1,!1)&&(h=!0);return h},K=function(a,c){for(var b=a._timeline,d=b._timeScale,e=a._startTime;b._timeline;){e+=b._startTime;d*=b._timeScale;if(b._paused)return-100;b=b._timeline}e/=d;return e>c?e-c:!a._initted&&2.0E-10>e-c?1.0E-10:(e+=a.totalDuration()/a._timeScale/d)>c?0:e-c-1.0E-10};d._init=function(){this.vars.startAt&&(this.vars.startAt.overwrite=0,this.vars.startAt.immediateRender=!0,f.to(this.target,0,this.vars.startAt));var a,c;this._ease=this.vars.ease instanceof r?this.vars.easeParams instanceof Array?this.vars.ease.config.apply(this.vars.ease,this.vars.easeParams):this.vars.ease:"function"===typeof this.vars.ease?new r(this.vars.ease,this.vars.easeParams):f.defaultEase;this._easeType=this._ease._type;this._easePower=this._ease._power;this._firstPT=null;if(this._targets)for(a=this._targets.length;-1<--a;){if(this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],this._overwrittenProps?this._overwrittenProps[a]:null))c=!0}else c=this._initProps(this.target, this._propLookup,this._siblings,this._overwrittenProps);c&&f._onPluginEvent("_onInitAllProps",this);this._overwrittenProps&&null==this._firstPT&&"function"!==typeof this.target&&this._enabled(!1,!1);if(this.vars.runBackwards)for(a=this._firstPT;a;)a.s+=a.c,a.c=-a.c,a=a._next;this._onUpdate=this.vars.onUpdate;this._initted=!0};d._initProps=function(a,c,b,d){var e,l,h,g,f,k;if(null==a)return!1;for(e in this.vars){if(M[e]){if("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"=== e||"onRepeatParams"===e)if(f=this.vars[e])for(l=f.length;-1<--l;)"{self}"===f[l]&&(f=this.vars[e]=f.concat(),f[l]=this)}else if(J[e]&&(g=new J[e])._onInitTween(a,this.vars[e],this)){this._firstPT=k={_next:this._firstPT,t:g,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:g._priority};for(l=g._overwriteProps.length;-1<--l;)c[g._overwriteProps[l]]=this._firstPT;if(g._priority||g._onInitAllProps)h=!0;if(g._onDisable||g._onEnable)this._notifyPluginsOfEnabled=!0}else this._firstPT=c[e]=k={_next:this._firstPT,t:a, p:e,f:"function"===typeof a[e],n:e,pg:!1,pr:0},k.s=!k.f?parseFloat(a[e]):a[e.indexOf("set")||"function"!==typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)](),k.c="number"===typeof this.vars[e]?this.vars[e]-k.s:"string"===typeof this.vars[e]?parseFloat(this.vars[e].split("=").join("")):0;k&&k._next&&(k._next._prev=k)}return d&&this._kill(d,a)?this._initProps(a,c,b,d):1<this._overwrite&&this._firstPT&&1<b.length&&E(a,this,c,this._overwrite,b)?(this._kill(c,a),this._initProps(a,c,b,d)):h};d.render=function(a, c,b){var d=this._time,e,f;if(a>=this._duration){if(this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration){if(0===a||0>this._rawPrevTime)this._rawPrevTime!==a&&(b=!0);this._rawPrevTime=a}}else if(0>=a){this._totalTime=this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(0!==d||0===this._duration&&0<this._rawPrevTime)f="onReverseComplete",e=this._reversed;0>a?(this._active=!1,0=== this._duration&&(0<=this._rawPrevTime&&(b=!0),this._rawPrevTime=a)):this._initted||(b=!0)}else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,g=this._easeType,j=this._easePower;if(1===g||3===g&&0.5<=h)h=1-h;3===g&&(h*=2);1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h);this.ratio=1===g?1-h:2===g?h:0.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||b){this._initted||(this._init(),!e&&this._time&&(this.ratio=this._ease.getRatio(this._time/ this._duration)));!this._active&&!this._paused&&(this._active=!0);if(0===d&&this.vars.onStart&&(0!==this._time||0===this._duration))c||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||D);for(a=this._firstPT;a;){if(a.f)a.t[a.p](a.c*this.ratio+a.s);else a.t[a.p]=a.c*this.ratio+a.s;a=a._next}this._onUpdate&&(c||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||D));f&&!this._gc&&(e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active= !1),c||this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||D))}};d._kill=function(a,c){"all"===a&&(a=null);if(null==a&&(null==c||c==this.target))return this._enabled(!1,!1);var c=c||this._targets||this.target,b,d,e,f,h,g,j;if((c instanceof Array||c.jquery)&&"object"===typeof c[0])for(b=c.length;-1<--b;)this._kill(a,c[b])&&(h=!0);else{if(this._targets)for(b=this._targets.length;-1<--b;){if(c===this._targets[b]){f=this._propLookup[b]||{};this._overwrittenProps=this._overwrittenProps|| [];d=this._overwrittenProps[b]=a?this._overwrittenProps[b]||{}:"all";break}}else{if(c!==this.target)return!1;f=this._propLookup;d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(f)for(e in g=a||f,j=a!=d&&"all"!=d&&a!=f&&(null==a||!0!=a._tempKill),g){if(b=f[e]){b.pg&&b.t._kill(g)&&(h=!0);if(!b.pg||0===b.t._overwriteProps.length)b._prev?b._prev._next=b._next:b===this._firstPT&&(this._firstPT=b._next),b._next&&(b._next._prev=b._prev),b._next=b._prev=null;delete f[e]}j&&(d[e]=1)}}return h}; d.invalidate=function(){this._notifyPluginsOfEnabled&&f._onPluginEvent("_onDisable",this);this._onUpdate=this._overwrittenProps=this._firstPT=null;this._initted=this._active=this._notifyPluginsOfEnabled=!1;this._propLookup=this._targets?{}:[];return this};d._enabled=function(a,c){if(a&&this._gc)if(this._targets)for(var b=this._targets.length;-1<--b;)this._siblings[b]=x(this._targets[b],this,!0);else this._siblings=x(this.target,this,!0);p.prototype._enabled.call(this,a,c);return this._notifyPluginsOfEnabled&& this._firstPT?f._onPluginEvent(a?"_onEnable":"_onDisable",this):!1};f.to=function(a,c,b){return new f(a,c,b)};f.from=function(a,c,b){b.runBackwards=!0;!1!=b.immediateRender&&(b.immediateRender=!0);return new f(a,c,b)};f.fromTo=function(a,c,b,d){d.startAt=b;b.immediateRender&&(d.immediateRender=!0);return new f(a,c,d)};f.delayedCall=function(a,c,b,d,e){return new f(c,0,{delay:a,onComplete:c,onCompleteParams:b,onCompleteScope:d,onReverseComplete:c,onReverseCompleteParams:b,onReverseCompleteScope:d, immediateRender:!1,useFrames:e,overwrite:0})};f.set=function(a,c){return new f(a,0,c)};f.killTweensOf=f.killDelayedCallsTo=function(a,c){for(var b=f.getTweensOf(a),d=b.length;-1<--d;)b[d]._kill(c,a)};f.getTweensOf=function(a){if(null!=a){var c,b,d;if((a instanceof Array||a.jquery)&&"object"===typeof a[0]){c=a.length;for(b=[];-1<--c;)b=b.concat(f.getTweensOf(a[c]));for(c=b.length;-1<--c;){d=b[c];for(a=c;-1<--a;)d===b[a]&&b.splice(c,1)}}else{b=x(a).concat();for(c=b.length;-1<--c;)b[c]._gc&&b.splice(c, 1)}return b}};var y=q("plugins.TweenPlugin",function(a,c){this._overwriteProps=(a||"").split(",");this._propName=this._overwriteProps[0];this._priority=c||0},!0);d=y.prototype;y.version=12;y.API=2;d._firstPT=null;d._addTween=function(a,c,b,d,e,f){var h;if(null!=d&&(h="number"===typeof d||"="!==d.charAt(1)?Number(d)-b:Number(d.split("=").join(""))))this._firstPT={_next:this._firstPT,t:a,p:c,s:b,c:h,f:"function"===typeof a[c],n:e||c,r:f},this._firstPT._next&&(this._firstPT._next._prev=this._firstPT)}; d.setRatio=function(a){for(var c=this._firstPT,b;c;){b=c.c*a+c.s;c.r&&(b=b+(0<b?0.5:-0.5)>>0);if(c.f)c.t[c.p](b);else c.t[c.p]=b;c=c._next}};d._kill=function(a){if(null!=a[this._propName])this._overwriteProps=[];else for(var c=this._overwriteProps.length;-1<--c;)null!=a[this._overwriteProps[c]]&&this._overwriteProps.splice(c,1);for(c=this._firstPT;c;)null!=a[c.n]&&((c._next&&(c._next._prev=c._prev),c._prev)?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next; return!1};d._roundProps=function(a,c){for(var b=this._firstPT;b;){if(a[this._propName]||null!=b.n&&a[b.n.split(this._propName+"_").join("")])b.r=c;b=b._next}};f._onPluginEvent=function(a,c){var b=c._firstPT,d;if("_onInitAllProps"===a){for(var e,f,h,g;b;){g=b._next;for(e=f;e&&e.pr>b.pr;)e=e._next;(b._prev=e?e._prev:h)?b._prev._next=b:f=b;(b._next=e)?e._prev=b:h=b;b=g}b=c._firstPT=f}for(;b;)b.pg&&"function"===typeof b.t[a]&&b.t[a]()&&(d=!0),b=b._next;return d};y.activate=function(a){for(var c=a.length;-1< --c;)a[c].API===y.API&&(f._plugins[(new a[c])._propName]=a[c]);return!0};if(o=m._gsQueue){for(j=0;j<o.length;j++)o[j]();for(d in v)v[d].def||console.log("Warning: TweenLite encountered missing dependency: com.greensock."+d)}})(window);;
function before_slide(slider){
	var eId = getElementId(slider);
	slidesFuncs[eId](slider,eId);
};

function after_slide(slider){};

function start_slide(slider){
	var eId = getElementId(slider);
	slidesFuncs[eId](slider,eId);
};

function stop_slide(slider){};


function getElementId(slider){
	var aniInt = slider.animatingTo;
	var aniText = slider.slides[aniInt].outerHTML;
	var aniIdPosStart = aniText.indexOf('slider_f_');
	var aniIdPosEnd1 = aniText.indexOf('"',aniIdPosStart);
	var aniIdPosEnd2 = aniText.indexOf(' ',aniIdPosStart);
	if (aniIdPosEnd1<aniIdPosEnd2){
		var aniIdPosEnd = aniIdPosEnd1;
	}else{
		var aniIdPosEnd = aniIdPosEnd2;
	}
	var aniId = aniText.slice(aniIdPosStart,aniIdPosEnd);
	return aniId;
}

function getElements(elemId, elems){		
	var elemCount = jQuery('#' + elemId).find('.item').size();
	elems[0] = jQuery('#' + elemId).find('.elem_0');
	for (i=1; i<=elemCount; i++){
		elems[i]=jQuery('#' + elemId).find('.elem_'+i);
	}
}

var slidesFuncs = {

	slider_f_591: function(slider,elemId){ //wyscig pl
		
		var elems = new Array();
		getElements(elemId,elems);
		TweenLite.fromTo(elems[0], 5, {css:{opacity:0}}, {css:{opacity:1}});
		TweenLite.fromTo(elems[1], .5, {css:{left:-1000}}, {css:{left:-3}});
		TweenLite.fromTo(elems[2], .5, {css:{left:1000}}, {css:{left:306}});
		if (!(jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 9)) {
			TweenLite.fromTo(elems[2], .5, {css:{opacity:0}}, {css:{opacity:1}});
		}

	},
	
	slider_f_595: function(slider,elemId){ //wyscig en
		
		var elems = new Array();
		getElements(elemId,elems);
		TweenLite.fromTo(elems[0], 5, {css:{opacity:0}}, {css:{opacity:1}});
		TweenLite.fromTo(elems[1], .5, {css:{left:-1000}}, {css:{left:-3}});
		TweenLite.fromTo(elems[2], .5, {css:{left:1000}}, {css:{left:257}});
		if (!(jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 9)) {
			TweenLite.fromTo(elems[2], .5, {css:{opacity:0}}, {css:{opacity:1}});
		}

	},
	
	slider_f_590: function(slider,elemId){ //rozwiazania pl
		
		var elems = new Array();
		getElements(elemId,elems);
		
		TweenLite.fromTo(elems[0], .8, {css:{opacity:0}}, {css:{opacity:1}});
		if (!(jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 9)) {
			TweenLite.fromTo(elems[1], 1.2, {css:{opacity:0}}, {css:{opacity:1}, ease:Quad.easeInOut});
		}	else {
			TweenLite.fromTo(elems[1], .8, {css:{top:-233}}, {css:{top:95}, ease:Quad.easeInOut});
		}
	},
	
	slider_f_596: function(slider,elemId){ //rozwiazania en
		
		var elems = new Array();
		getElements(elemId,elems);
		
		TweenLite.fromTo(elems[0], .8, {css:{opacity:0}}, {css:{opacity:1}});
		if (!(jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 9)) {
			TweenLite.fromTo(elems[1], 1.2, {css:{opacity:0}}, {css:{opacity:1}, ease:Quad.easeInOut});
		}	else {
			TweenLite.fromTo(elems[1], .8, {css:{top:-233}}, {css:{top:95}, ease:Quad.easeInOut});
		}
	},
	
	slider_f_589: function(slider,elemId){ //czas pl
		
		var elems = new Array();
		getElements(elemId,elems);

		TweenLite.fromTo(elems[1], 3, {css:{top:-50}}, {css:{top:20}, ease:Elastic.easeOut});
		TweenLite.fromTo(elems[2], .5, {css:{top:-70}}, {css:{top:135}, ease:Quad.easeInOut});
		TweenLite.fromTo(elems[3], .5, {css:{top:390}}, {css:{top:210}, ease:Quad.easeInOut});
	},
	
	slider_f_597: function(slider,elemId){ //czas en
		
		var elems = new Array();
		getElements(elemId,elems);

		TweenLite.fromTo(elems[1], 3, {css:{top:-50}}, {css:{top:20}, ease:Elastic.easeOut});
		TweenLite.fromTo(elems[2], .5, {css:{top:-70}}, {css:{top:135}, ease:Quad.easeInOut});
		TweenLite.fromTo(elems[3], .5, {css:{top:390}}, {css:{top:210}, ease:Quad.easeInOut});
	}
	
};
