# TumblrThemr #

* Version: 1.1
* Author: [Icelab](http://icelab.com.au/) and [Jim Whimpey](http://jimwhimpey.com/)

Making Tumblr theme development a little less head-desky.

*****

No matter how you tackle it, developing a theme for Tumblr involves a time-consuming mess of manual copying and pasting, saving, testing, and copying and pasting again. 
TumblrThemr solves this problem, letting you develop navigable themes locally using real data from your Tumblr blog.

If you used TumblrThemr to create a theme, we’d love to see the results! Send an email to <tumblrthemr@icelab.com.au> or hit us up [on Twitter](http://twitter.com/tumblrthemr).


## Installation ##

1. To optionally use your own source data, install the `xml.tumblr` file by pasting its contents into the "Custom HTML" textarea on Tumblr.
   
   You'll find this at `http://tumblr.com/customize/[your-blog-name]` under "Theme > Use custom HTML". If you're happy using our default data you can skip this step.

2. Create a new theme file in the `/themes/` directory. You should be able to see the `demo.tumblr` theme in there.

3. Open the `index.html` file and set your configuration to match the source URL of your Tumblr (`your-blog-name.tumblr.com`) and the name of your theme file (`demo` if your theme file is name `demo.tumblr`)
   
   If you want to use our default data you can leave the "Source URL" field alone.

4. Theme away!


## Usage ##

### Theme basics ###

First things first, you'll need to create a new file for your theme. Just add a file to the `/themes/` directory with a `.tumblr` extension. At least for now, TumblrThemr can only render the body of a theme, so you'll want to create your theme as though you are starting inside the `<body>` tag. A bare-bones theme might look like:
  
    {block:tumblrThemr}
      <h1>Hello, World!</h1>
    {/block:tumblrThemr}

TumblrThemr looks for the `{block:tumblrThemr}` tag and will only render theme variables in that context, so you'll need to include that at the start and end of your theme file. That's the only requirement for creating a theme, once you've done that you can build your theme up as normal using [the standard Tumblr theme tags](http://www.tumblr.com/docs/en/custom_themes). We've tried to include as many of the standard theme tags as possible, but there are a few things that we haven't added support for yet:

* Custom booleans
* Custom fonts
* Custom colours
* `{block:PostTitle}`
* `{block:PostSummary}`
* Jump Pagination

A few other things to take note of are:

* 'Load more notes' links don't work due to cross-domain problems
* TumblrThemr enforces 'well-formed' themes. That is, for tags like `{Caption}` that have a `{block:Caption}` check, you can only get the value of `{Caption}` by nesting it inside `{block:Caption}`.
* Limited support for localization. You can use `{lang:String}` tags and they'll be converted to the value of the string, but they won't be translated and won't necessarily appear in the [list of translated strings](http://www.tumblr.com/docs/en/localizing_themes).
* There's no support for Twitter or Disqus integration.
* Chrome disallows cross-domain loading from pages served from the `file://` protocol. To test in Chrome you'll have to serve the files from somewhere.


### Adding style ###

You can add CSS to your themes exactly as you normally would. The `demo.tumblr` theme uses the following:

    {block:tumblrThemr}
      <link rel="stylesheet" href="themes/demo.css" type="text/css" media="screen"/>

Technically this renders the `<link>` element inside the `<body>`, but for testing purposes that's fine. You'll simply need to move it out to the `<head>` before publishing on Tumblr. 

Note: **You cannot use internal CSS** as TumblrThemr will interpret the `{}` as theme code. You'll need to place all your CSS in an external file (or use inline CSS if you're desperate).

### JavaScript ###

You can include JavaScript as you normally would, though again you can only use *external* JavaScript. The `demo.tumblr` uses the following to load a JavaScript file just before the end of the file:

      <script type="text/javascript" src="themes/demo.js"></script>
    {/block:tumblrThemr}

TumblrThemr will fire the `document.ready` event whenever a page has completed rendering. This means you can use that event as you normally would to execute your JavaScript only once the DOM is ready to go. Again, check out the `demo.tumblr` and the `demo.js` file to see an example of this in action.

### Browser compatibility ###

TumblrThemr works across all modern (and some not so modern) browsers. The main issue that people have come up against is a security issue in Chrome 10+ and Firefox 4+. These browsers place restrictions on web pages that are loaded off the local file system, the same restrictions that stop cross-site scripting attacks, and thus to use TumblrThemr in these browsers you'll need to serve the files from a proper web server of some description. On OS X, the standard "Web sharing" Apache setup should do the trick, else you can look at other simple standalone server implementations. If you run into an error akin to "XMLHttpRequest cannot load x.tumblr. Origin null is not allowed by Access-Control-Allow-Origin.", this is the security restriction at work.

*****

TumblrThemr uses the URL hash to read the configuration of your app. This means you can simply type append a new URL to the hash and it'll attempt to load data from there.

Remember, TumblrThemr doesn't replicate *everything* that Tumblr's theming engine can do. It's just intended to get you *most* of the way there, helping you quickly and easily build the main structure of your theme before adding the final tweaks in Tumblr itself. We recommend having a look at the `demo.tumblr` theme and its files to get a feel for how to structure your Tumblr themes, and what's possible in TumblrThemr.

## Updates ##

* **1.1:** Added {PostType} to XML theme
* **1.0:** Initial release

## License ##

TumblrThemr is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Australia License](http://creativecommons.org/licenses/by-nc-sa/3.0/au/deed.en). This means that it's free for personal use, but if you’re going to use it on a commercial project (i.e., any projects where you're being paid), or you just want to support the project, you can donate or purchase a commercial license for $20 at <http://tumblrthemr.icelab.com.au>.

## Credits ##

TumblrThemr is made by [Icelab](http://icelab.com.au/) and [Jim Whimpey](http://jimwhimpey.com/). It uses the following excellent JavaScript libraries to make the magic:

* [jQuery](http://jquery.com/)
* [Sammy.js](http://sammyjs.org/)
* [Handlebars.js](https://github.com/wycats/handlebars.js)

The `demo.tumblr` theme is a straight-up conversion of the [Redux theme](http://www.tumblr.com/theme/433) by [Jacob Bijani](http://jacobbijani.com/)