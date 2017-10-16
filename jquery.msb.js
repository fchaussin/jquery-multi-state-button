d(function($) {
/* 
Muli State Button jQuery Plugin
*/
	
var methods = {
		_defaultStates : {},
		init : function(options, callback) {
			this._defaultStates = $.extend( true, {}, $.fn.msb.defaults, options ); 
			if (typeof callback == 'function') { 
				callback.call(this);
			}
			return this.each( function(){			
				$(this).addClass('msb');
				if (!$(this).attr('data-state')) {
				    $(this).attr('data-state', 'default');
				}
				// get state
				var state = $(this).data('state');
				// change icon name, and keep it for rebuid
				var icon = $(this)
						.find('i.material-icons')
						.html(this._defaultStates[state].icon.name);
				// remove any icon anim css class (msb-anim-*)
				$(this) 
					.find("i.material-icons")
					.removeClass( function(index, className) {
						return (className.match(/(^|\s)msb-anim-\S+/g) || []).join(" ");
					});
				// now, if state icon anim, adding it
				if(this._defaultStates[state].icon.anim != false){
					$(this)
						.find('i.material-icons')
						.addClass('msb-anim-' + this._defaultStates[state].icon.anim);
				}
				// rebuild button
				$(this)
					.addClass(this._defaultStates[state].cssClass)
					.html(icon)
					.append(this._defaultStates[state].label)
					.prop("disabled", this._defaultStates[state].disabled);
			});	
		},
		update : function( state, callback ) { 
			if (typeof callback == 'function') { 
				callback.call(this);
			}
			return this.each( function(){
				if($.fn.msb.defaults[state] != undefined){
					var prevState = this._defaultStates[$(this).data('state')];
					$(this)
						.removeClass(prevState.cssClass)
						.data("state", state);
					methods.init.apply( $(this) );
				}else{
					console.log("State: '" + state + "' hasn't been defined.");
				}
			});		
		}
};

$.fn.msb = function(methodOrOptions) {
		if ( methods[methodOrOptions] ) {
				return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
				// Default to "init"
				return methods.init.apply( this, arguments );
		} else {
				$.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.msb' );
		}    
};
$.fn.msb.defaults = {
	"default": {
		"cssClass": "blue",
		"label": "submit",
		"icon": {
			"name": "send", 
			"anim": false
		},
		"disabled": false,
		"stateBar": ""
	},
	"success": {
		"cssClass": "green",
		"label": "sent",
		"icon": {
			"name": "check",
			"anim": false
		},
		"disabled": true,
		"stateBar": ""
	},
	"warning": {
		"cssClass": "orange",
		"label": "try again",
		"icon": {
			"name": "warning",
			"anim": false
		},
		"disabled": false,
		"stateBar": ""
	},
	"error": {
		"cssClass": "red",
		"label": "try again",
		"icon": {
			"name": "cancel",
			"anim": false
		},
		"disabled": false,
		"stateBar": ""
	},
	"process": {
		"cssClass": "yellow black-text",
		"label": "processing",
		"icon": {
			"name": "refresh",
			"anim": "rotate"
		},
		"disabled": true,
		"stateBar": ""
	}
};

})(jQuery);

