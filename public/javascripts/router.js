var router = new (Backbone.Router.extend({
	routes: {
		"checkout": App.showCheckout.bind(App),
		"menu": App.init(),
		":number": App.showDetailedItem.bind(App),
	},
	index: function() { App.init(); },
	initialize: function() {
		this.route(/^\/?$/, "index", this.index);
	},
}))();

Backbone.history.start({
	pushState: true,
});

$(document).on('click', "body > header a[href^='/']", function(e) {
	e.preventDefault();
	var href = $(e.currentTarget).attr("href").replace(/^\//, "");
	router.navigate(href, { trigger: true });
});

