/*
== Multi-State Button jQuery Plugin == 
== msb.jquery.js ==
Version: 0.2.1 
Plugin URI: https://github.com/fchaussin/jquery-multi-state-button
Author: fchaussin
Author URI: https://francoischaussin.com
License: MIT License (MIT)
*/
(function($, window, document, undefined) {
	var defaultStates = {},
	get_defaultStates = function() {
		return this.defaultStates;
	},
	set_defaultStates = function(states) {
		this.defaultStates = $.extend(true, this.defaultStates, states);
	},
	methods = {
		init: function(options, callback) {
			var states = $.extend(true, {}, $.fn.msb.defaults, options);
			set_defaultStates(states);
			if (typeof callback == "function") {
				callback.call(this);
			}
			return this.each(function() {
				$(this).addClass("msb");
				if (!$(this).attr("data-state")) {
					$(this).attr("data-state", "default");
				}
				// get state
				var state = $(this).data("state");
				methods._build($(this), state);
			});
		},
		update: function(state, callback) {
			var states = get_defaultStates();
			if (typeof callback == "function") {
				callback.call(this);
			}
			return this.each(function() {
				if (states[state] != undefined) {
					var prevState = states[$(this).data("state")];
					$(this)
						.removeClass(prevState.cssClass)
						.data("state", state);
					methods._build($(this), state);
				} else {
					console.log("State: '" + state + "' hasn't been defined.");
				}
			});
		},
		_build: function(el, state) {
			var states = get_defaultStates();
			var icon = "";
			var md = el.find("i.material-icons");
			var fa = el.find("i.fa");
			if (md.length > 0) {
				icon = md.html(states[state].icon.name);
				// remove any icon anim css class (msb-anim-*)
				md.removeClass(function(index, className) {
					return (className.match(/(^|\s)msb-anim-\S+/g) || []).join(" ");
				});
				// now, if state icon anim, adding it
				if (states[state].icon.anim != false) {
					md.addClass("msb-anim-" + states[state].icon.anim);
				}
			} else if (fa.length > 0) {
				fa.removeClass(function(index, className) {
					return (className.match(/(^|\s)fa-\S+/g) || []).join(" ");
				});
				fa.removeClass(function(index, className) {
					return (className.match(/(^|\s)msb-anim-\S+/g) || []).join(" ");
				});
				icon = fa.addClass('fa-' + states[state].icon.name);
				// now, if state icon anim, adding it
				if (states[state].icon.anim !== false) {
					fa.addClass("msb-anim-" + states[state].icon.anim);
				}
			}
			// rebuild button
			el
				.addClass(states[state].cssClass)
				.html(icon)
				.append(states[state].label)
				.prop("disabled", states[state].disabled);
			if (states[state].stateBar !== false) {
				el.append("<div class='bar'></div>");
				if(states[state].stateBar !== ""){
					el
						.find("div.bar")
						.addClass(states[state].stateBar);
				}
			}
		}
	};

	$.fn.msb = function(methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(
				this,
				Array.prototype.slice.call(arguments, 1)
			);
		} else if (typeof methodOrOptions === "object" || !methodOrOptions) {
			// Default to "init"
			return methods.init.apply(this, arguments);
		} else {
			$.error("Method " + methodOrOptions + " does not exist on jQuery.msb");
		}
	};
	$.fn.msb.defaults = {
		default: {
			cssClass: "blue",
			label: "submit",
			icon: {
				name: "send",
				anim: false
			},
			disabled: false,
			stateBar: "blue darken-2"
		},
		success: {
			cssClass: "green",
			label: "sent",
			icon: {
				name: "check",
				anim: false
			},
			disabled: true,
			stateBar: "green darken-2"
		},
		warning: {
			cssClass: "orange",
			label: "try again",
			icon: {
				name: "warning",
				anim: false
			},
			disabled: false,
			stateBar: "orange darken-2"
		},
		error: {
			cssClass: "red",
			label: "try again",
			icon: {
				name: "cancel",
				anim: false
			},
			disabled: false,
			stateBar: "red darken-2"
		},
		process: {
			cssClass: "yellow black-text",
			label: "processing",
			icon: {
				name: "refresh",
				anim: "rotate"
			},
			disabled: true,
			stateBar: "msb-anim-chameleon"
		}
	};
})(jQuery, window, document);

