var App = {
	templates: JST,
	$el: $("main"),
	init: function() {
		this.previous_item = 0;
		this.renderItems();
		this.createCart();
		this.bindEvents();
		this.showShusiTypes();
	},
	showShusiTypes: function() {
		$("header .right").html(
			this.templates.items_in_cart({
				number_of_items: this.cart.length
			})
		);
	},
	createCheckout: function() {
		this.previous_item = 0;
		this.cart = this.cart || this.createCart();
		this.checkout = this.cart.clone();
		new CheckoutView({
			collection: this.cart
		});
	},
	createItemDetailView: function(id, direction) {
		var item = this.items.get(id).toJSON();
		item.direction = direction;
		var model = new Item(item);
		new ItemDetailsView({
			model: model,
			direction: direction
		});
	},
	showDetailedItem: function(id) {
		id = +id;
		if (this.previous_item === id) { return; }
		var direction = (+id) > this.previous_item ? "next" : "previous";
		this.previous_item = id;
		this.createItemDetailView(id, direction);
	},
	createCart: function() {
		this.checkout && this.$el.find("#content div").remove();
		this.cart = new CartItems();
		this.cart.view = new CartView({
			collection: this.cart,
		});
	},
	createUl: function() {
		var ul = document.createElement("ul");
		ul.setAttribute("id", "items");
		App.$el.find("#content").html($(ul));
	},
	renderItems: function() {
		this.createUl();
		this.items.each(this.renderItemView);
	},
	renderItemView: function(item) {
		new ItemsView({
			model: item
		});
	},
	showCheckout: function() {
		this.createCheckout();
	},
	updateRouter: function(href) {
		router.navigate(href, { trigger: true });
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);
		this.on("add_to_cart", this.cart.addItem.bind(this.cart));
		this.on("empty_cart", this.cart.emptyCart.bind(this.cart));
		this.on("render_checkout", this.showCheckout);
		this.on("show_item", this.showDetailedItem);
	}
};

Handlebars.registerHelper("format_price", function(price) {
	return (+price).toFixed(2);
});

