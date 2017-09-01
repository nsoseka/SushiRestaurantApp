var CheckoutView = Backbone.View.extend({
	events: {
		"click .fa-minus": "reduceQuantity",
		"click .fa-plus": "addQuantity",
		"submit form": "order",
		"click footer a": "emptyCart"
	},
	emptyCart: function(e) {
		e.preventDefault();
		App.trigger("empty_cart");
	},
	order: function(e) {
		e.preventDefault();
		App.updateRouter("");
		App.trigger("empty_cart");
		App.init();
	},
	updateStorage: function() {
		localStorage.setItem("cart", JSON.stringify(App.cart.toJSON()));
	},
	template: App.templates.checkout,
	reduceQuantity: function(e) {
		var id = +$(e.target).closest('tr').data('id')
		e.preventDefault();
		var item = this.collection.get(id);
		item.set("quantity", item.get("quantity") -1);
		if (item.get("quantity") === 0) {
			this.collection.remove(item);
			App.showShusiTypes();
		}

		this.updateStorage();
		App.trigger("render_checkout");
	},
	addQuantity: function(e) {
		var id = +$(e.target).closest('tr').data('id')
		e.preventDefault();
		var item = this.collection.get(id);
		item.set("quantity", item.get("quantity") + 1);
		this.updateStorage();
		App.trigger("render_checkout");
	},
	render: function() {
		console.log('ggi');
		this.$el.html(this.template({
			items: this.collection.toJSON(),
			total: this.collection.getTotal(),
		}));

		App.$el.find("#cart").hide();
		App.$el.find("#content").html(this.$el);
	},
	initialize: function() {
		this.render();
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "checkout_updated", this.render);
	}
})


