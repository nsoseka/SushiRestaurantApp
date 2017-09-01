var CartView = Backbone.View.extend({
	el: $("#cart"),
	events: {
		"click .empty_cart": "emptyCart",
		"click .checkout": "checkOut"
	},
	checkOut: function(e) {
		e.preventDefault();
		App.updateRouter("checkout");
		App.trigger("render_checkout");
	},
	emptyCart: function(e) {
		e.preventDefault();
		App.trigger("empty_cart");
	},
	templates: App.templates.cart,
	render: function() {
		if (this.collection.length === 0) {
			App.$el.find("#cart").slideUp();
		} else {
			this.$el.html(this.templates({
				items: this.collection.toJSON(),
				total: this.collection.getTotal()
			}));
			this.$el.prependTo(App.$el).slideDown();
		}

		App.showShusiTypes();
	},
	initialize: function() {
		this.render();
		this.listenTo(this.collection, "cart_updated", this.render);
	},
});

