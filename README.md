# jquery.msb.js #
> *msb* allow you to have multiple states button using [MaterializeCSS](https://github.com/Dogfalo/materialize)
> It's my really first jQuery plugin, so any help or suggestions are welcome! 

### Demo

See the [jquery.msb.js demo](https://codepen.io/fchaussin/pen/vejWKG).

### Features

- 5 (customizable) defaults states (default, success, error, warning, process)
- Add your custom states
- Update the button state
- Compatible with MaterializeCSS icons (for now)
- Automatically add *.msb* CSS class after init 
- Status Bar comming soon...

### Install

[jQuery](http://jquery.com/download/) is required, so include it first.
  Download [jquery.msb.js](https://raw.githubusercontent.com/fchaussin/jquery-multi-state-button/master/jquery.msb.js) and include the script in your HTML file:

	<script src="jquery.msb.js" type="text/javascript"></script>

### Usage

Default init

	$(function() {
		$('.btn').msb(options);
	});
*Where `options` is an optional parameter.*

Custom state init

	$('.btn').msb({
		"customState": {
			"cssClass": "waves-effect waves-light blue",
			"label": "custom state",
			"icon": {
				"name": "help", 
				"animClass": false
			},
			"disabled": false,
			"stateBar": ""
		}
	});

Update button state

	$('a.msb').first().msb('update','success');
	$('button#submit)').msb('update','customState');	
*Be careful to use the proper DOM selector you have several .msb buttons in your document.*

HTML

	<a class="btn" data-state="warning">
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
	<button class="btn" data-state="default">
		<i class="material-icons left">cloud</i>
		button
	</button>

### Options

The default `options` are:

	  {
	    "default": {
	      "cssClass": "waves-effect waves-light blue",
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
	      "cssClass": "yellow purple-text text-darken-2",
	      "label": "procesing",
	      "icon": {
		"name": "refresh",
		"animClass": "rotate"
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

### Data API

Use the data attribute `data-state="stateName"` where `stateName` is an arbitrary string to identify which state should be used during the init.

	<a class="btn" data-state="default"><i class="material-icons">send</i>My label</a>
	<button data-state="success">Another label</button>

