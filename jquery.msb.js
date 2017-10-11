(function($) {
/* 
Muli State Button jQuery Plugin
*/
	
var methods = {
		init : function(options) {
			var states = $.extend( /* {}, */ $.fn.msb.defaults, options ); 
			return this.each( function(){			
				$(this).addClass('msb');
				// get state
				var state = $(this).data('state');
				// change icon name, and keep it for rebuid
				var icon = $(this)
										.find('i.material-icons')
										.html(states[state].icon.name);
				// remove any icon anim css class (msb-anim-*)
				$(this)
					.find("i.material-icons")
					.removeClass( function(index, className) {
						return (className.match(/(^|\s)msb-anim-\S+/g) || []).join(" ");
					});
				// now, if state icon anim, adding it
				if(states[state].icon.animClass != false){
					$(this)
						.find('i.material-icons')
						.addClass('msb-anim-' + states[state].icon.animClass);
				}
				// rebuild button
				$(this)
					.addClass(states[state].cssClass)
					.html(icon)
					.append(states[state].label)
					.prop("disabled", states[state].disabled);
			});	
		},
		update : function( state ) { 
			//var states = $.extend( {}, $.fn.msb.defaults, options ); 
			return this.each( function(){
				if($.fn.msb.defaults[state] != undefined){
					var prevState = $.fn.msb.defaults[$(this).data('state')];
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
			"animClass": false
		},
		"disabled": false,
		"stateBar": ""
	},
	"success": {
		"cssClass": "green",
		"label": "sent",
		"icon": {
			"name": "check",
			"animClass": false
		},
		"disabled": true,
		"stateBar": ""
	},
	"warning": {
		"cssClass": "orange",
		"label": "try again",
		"icon": {
			"name": "warning",
			"animClass": false
		},
		"disabled": false,
		"stateBar": ""
	},
	"error": {
		"cssClass": "red",
		"label": "try again",
		"icon": {
			"name": "cancel",
			"animClass": false
		},
		"disabled": false,
		"stateBar": ""
	},
	"process": {
		"cssClass": "yellow black-text",
		"label": "processing",
		"icon": {
			"name": "refresh",
			"animClass": "rotate"
		},
		"disabled": true,
		"stateBar": ""
	}
};

})(jQuery);
