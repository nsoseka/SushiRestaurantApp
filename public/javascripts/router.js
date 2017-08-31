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

$(document).on('click', "a[href^='/']", function(e) {
	e.preventDefault();
	var href = $(e.currentTarget).attr("href").replace(/^\//, "");
	router.navigate(href, { trigger: true });
});

$(document).on("click", "li header", function(e) {
	e.preventDefault();
	var href = $(e.currentTarget).closest('li').data('id') + "";
	router.navigate(href, {trigger: true });
});

$(document).on("click", ".next, .prev", function(e) {
	e.preventDefault();
	var item = $(e.currentTarget);
	var href = +item.closest('div.menu_item').data('id');
	if (item.hasClass('next')) {
		href += 1;
		href = href === App.items.length + 1 ? href - 1 : href;
	} else {
		href -= 1;
		href =  href === 0 ? href + 1 : href;
	}

	href = href + "";
	router.navigate(href, {trigger: true });
});
$(document).on("submit", "#checkout form",  function(e) {
	router.navigate("", { trigger: true });
})


