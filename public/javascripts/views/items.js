var ItemsView = Backbone.View.extend({
	tagName: 'li',
	events: {
		"click a.add_cart": "add_item",
		"click #items header": "showItem"
	},
	showItem: function() {
		App.trigger("show_item", this.model);
	},
	add_item: function(e) {
		e.preventDefault();

		App.trigger("add_to_cart", this.model);
	},
	template: App.templates.item,
	render: function() {
		this.$el.attr("data-id", this.model.get('id'));
		this.$el.html(this.template(this.model.toJSON()));
		//App.$el.find("#content div").hide();
		App.$el.find("#content ul").append(this.$el);
	},
	initialize: function() {
		this.render();
		this.model.view = this;
	}
});


