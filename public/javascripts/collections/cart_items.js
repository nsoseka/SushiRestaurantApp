var CartItems = Backbone.Collection.extend({
	addItem: function(item) {
		var item_to_add = this.get(item.get('id'));
		if (item_to_add) {
			item_to_add.set("quantity", item_to_add.get("quantity") + 1);
		} else {
			item_to_add = item.clone();
			item_to_add.set("quantity", 1);
			this.add(item_to_add);
		}

		this.updateStorage();
		this.trigger("cart_updated");
	},
	readStorage: function() {
		var stored_cart = JSON.parse(localStorage.getItem("cart"));
		this.reset(stored_cart);
	},
	updateStorage: function() {
		localStorage.setItem("cart", JSON.stringify(App.cart.toJSON()));
	},
	update: function() {
		this.readStorage();
	},
	reduce: function(id) {
		var item = this.get(id);
		console.log(id, item.get("quantity"), 'reading');
		item.set("quantity", item.get("quantity") -1);
		if (item.get("quantity") === 0) {
			App.cart.remove(item);
			App.showShusiTypes();
		}

		this.updateStorage();
		App.checkout.trigger("checkout_updated");
	},
	add_quantity: function(id) {
		var item = this.get(id);
		console.log(id, item.get("quantity"), 'reading');
		item.set("quantity", item.get("quantity") + 1);
		App.trigger("checkout_updated");
		this.updateStorage();
	},
	emptyCart: function() {
		this.set([]);
		this.trigger("cart_updated");
		this.updateStorage();
	},
	getTotal: function() {
		var result =  _.reduce(this.toJSON(), function(a, b) {
			return a + (b.price * b.quantity);
		}, 0);

		return result.toFixed(2);
	},
	initialize: function() {
		this.readStorage();
		//this.listenTo("reset", this.fire);
	}
});
