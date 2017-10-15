# jquery.msb.js #

> *msb* manage button states, it means changing the label, css class, icon (animated or not), disabled attribute... I've writed this plugin to have a one line function to improve user experience during form submiting.

> It's my really first jQuery plugin, so any [help or suggestions](https://github.com/fchaussin/jquery-multi-state-button/issues) are welcome! ♥

### Demo

- See the [jquery.msb.js demo](https://codepen.io/fchaussin/pen/vejWKG) with very basic exemples.
- Another [demo](https://codepen.io/fchaussin/pen/mBKjzO) in a real life exemple with ajax submiting, states overriding, init callback, state updates, and updates callbacks...

### Features

- 5 (customizable) defaults states (default, success, error, warning, process)
- Add your custom states
- Update the button state on the fly
- Animated icons
- Callback (optional)
- Compatibility with MaterializeCSS (for now)
- Automatically add *.msb* CSS class on initialized elements 
- Status Bar comming soon... (like in this [pen](https://codepen.io/fchaussin/pen/aLYmxG))

### Install

[jQuery](http://jquery.com/download/) is required, so include it first.
  Download [jquery.msb.js](https://raw.githubusercontent.com/fchaussin/jquery-multi-state-button/master/jquery.msb.js) and include the script in your HTML file:

	<script src="jquery.msb.js" type="text/javascript"></script>

It looks really nice with [MaterializeCSS](https://github.com/Dogfalo/materialize) at this point, but a better compatibility with Twitter Bootstrap and Font Awesome icons collection are planned to be implemented.
	

### Usage


HTML

	<a class="btnwaves-effect waves-light" data-state="warning">
		<i class="material-icons right">cloud</i>
		button label
	</a>
	<a class="btn" data-state="error">
		<i class="material-icons left">cloud</i>
		button
	</a>
	<a class="btn" data-state="process">
		button without icon
	</a>
	<button class="btn waves-effect waves-light" data-state="default">
		<i class="material-icons left">cloud</i>
		button
	</button>
Use the data attribute `data-state="stateName"` where `stateName` is a string registered in the `options` to identify which state should be used during the init. 
Try to be as minimal as you can with your classes to avoid any collision. It's not recommanded to assign color class at this point, use `Custom state` or `Default state overriding` for that.

Default init

	$(function() {
		$('.btn').msb(options, callback);
	});
*Where `options` and `callback` are optional parameters.*
Once initialized, the button's label and icon are updated by the plugin. The initial button's classes are kept.

Custom state init

	$('.custom').msb({
		"customState": {
			"cssClass": "waves-effect waves-light pink",
			"label": "custom state",
			"icon": {
				"name": "help"
			},
			"disabled": true,
			"stateBar": ""
		}
	});

Default state override init

	$('.override').msb({
		"success": {
			"cssClass": "green yellow-text",
			"label": "Great success!",
			"icon": {
				"name": "thumb_up", 
				"anim": "bounce"
			},
			"disabled": true,
			"stateBar": ""
		},
		"process": {
			"cssClass": "yellow red-text",
			"label": "please wait...",
			"icon": {
				"name": "send", 
				"anim": "fly"
				},
		      "disabled": true,
		      "stateBar": ""
		    }
		}
	});

Update button state

	$('a.msb').first().msb('update','success');
	$('button#submit)').msb('update','customState');	
*Be careful to use the proper DOM selector if you have several .msb buttons in your document.*
Initial class of the button are kept (such as *btn, waves-effect, waves-light...*).
More exemples in the [demo](https://codepen.io/fchaussin/pen/vejWKG).

### Options

The default `options` are:

	  {
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
	  }

Where:

- `cssClass` is a `CSS class` to style the button (default options are using MaterializeCSS classes)
- `label` is a `string` to give a label to the button
- `icon.name` is the MaterializeCSS icon name ([see MaterializeCSS Icons](http://materializecss.com/icons.html))
- `icon.animClass` is `CSS class` to animate the icon, or `false` if no animation .
- `disabled` is `true` or `false` to set or not the `disabled attribute` to the `<button> markup`, this will override your `cssClass` colors as MaterializeCSS do with `disabled elements`. `Disabled` is not working on a `<a> markup` so it will apply the `.msb` defined colors.
- `stateBar` is a CSS class to style the state bar, if empty, *cssClass* value will be used instead


