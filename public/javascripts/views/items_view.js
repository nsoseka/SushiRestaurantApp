var ItemDetailsView = Backbone.View.extend({
	tagName: "div",
	attributes: {
		id: "item_details"
	},
	template: App.templates.item_view,
	events: {
		"click .prev": "previousItem",
		"click .next": "nextItem",
		"click .add_cart": "addToCart",
		"click .close": "destroy"
	},
	destroy: function(e) {
		e.preventDefault();
		App.previous_item = 0;
		App.updateRouter("");
		this.$el.remove();
	},
	addToCart: function(e) {
		e.preventDefault();
		App.trigger("add_to_cart", this.model);
	},
	previousItem: function(e) {
		var prev_id = +this.model.toJSON().id - 1;
		prev_id = prev_id === 0 ? 1 : prev_id;
		App.updateRouter(prev_id+ "");
		App.trigger("show_item", prev_id);
	},
	nextItem: function(e) {
		var next_id = +this.model.toJSON().id + 1;
		next_id = next_id === App.items.length + 1 ? next_id - 1 : next_id;
		App.updateRouter(next_id + "");
		App.trigger("show_item", next_id);
	},
	render: function() {
		var item = this.model.toJSON(),
				current_id = this.model.get("id"),
				$prev = this.template(App.items.get(2).toJSON());


		this.$el.html(this.template(item));
		this.$el.append($prev);
		App.$el.find("#content").html(this.$el);
		if (App.cart.length !== 0) { App.$el.find("#cart").show(); }
		var $current = App.$el.find(".menu_item").eq(0).css({ "width": 0 });
		var $previous = App.$el.find(".menu_item").eq(1);
		if (this.model.attributes.direction === "previous") {
			$current.css({ "right": 0, "left": ""});
			$previous.css({ "right": "", "left": 0});
		} else {
			$current.css({ "right": "", "left": 0});
			$previous.css({ "right": 0, "left": ""});
		}

		$previous.animate({
			width: 0
		}, 250, "linear", function() {
			$(this).remove();
		});

		$current.animate({
			width: 1000,
		}, 250, "linear");
		return this;
	},
	initialize: function() {
		this.render();
		this.model.view = this;
	}
});


