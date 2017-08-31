var CheckoutItems = Backbone.Collection.extend({
	reduceQuantity: function(item_id) {
		var item = this.get(item_id);

		item.set("quantity", item.get("quantity") - 1);
		if (item.get("quantity") === 0) {
			this.remove(item);
		}
		console.log(item.toJSON());
		//App.checkout.trigger("checkout_updated");
	},
});


