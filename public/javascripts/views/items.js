var ItemsView = Backbone.View.extend({
	tagName: 'li',
	events: {
		"click a.add_cart": "add_item",
		"click header": "showItem"
	},
	showItem: function() {
		var item_id = this.model.get("id") + "";
		App.updateRouter(item_id);
		App.trigger("show_item", item_id);
	},
	add_item: function(e) {
		e.preventDefault();

		App.trigger("add_to_cart", this.model);
	},
	template: App.templates.item,
	render: function() {
		this.$el.attr("data-id", this.model.get('id'));
		this.$el.html(this.template(this.model.toJSON()));
		App.$el.find("#content ul").append(this.$el);
	},
	initialize: function() {
		this.render();
		this.model.view = this;
	}
});

