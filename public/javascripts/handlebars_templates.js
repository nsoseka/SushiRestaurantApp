this["JST"] = this["JST"] || {};

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><figure><img src=\""
    + alias4(((helper = (helper = helpers.img_src || (depth0 != null ? depth0.img_src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_src","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\"></figure><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><section><h3>Your<br>shopping cart</h3><p class=\"total\">$"
    + container.escapeExpression((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><p></p><footer><a class=\"left empty_cart\" href=\"#\">Empty cart</a><!----><a class=\"right checkout\" href=\"/checkout\">Checkout</a></footer></section>";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><td><img src=\""
    + alias4(((helper = (helper = helpers.img_src || (depth0 != null ? depth0.img_src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_src","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\"></td><td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td><td><span class=\"quantity_modifier\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p><span class=\"quantity_modifier\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></td><td>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</td></tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"checkout\"><div class=\"img_top\"></div><section><h1>Order Details</h1><table><thead><tr><th>Item</th><th></th><th>Quantity</th><th>Price</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table><p>Total: <span class=\"total\">$"
    + container.escapeExpression((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</span></p><footer><a href=\"/\">Cancel order</a><form action=\"/\" method=\"post\"><input type=\"submit\" value=\"ORDER NOW!\"></form></footer></section><div class=\"img_bottom\"></div></div>";
},"useData":true});

this["JST"]["item_view"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"menu_item\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"nav prev\"><img src=\"images/nav-prev.png\" alt=\"prev\"></div><figure><img src=\""
    + alias4(((helper = (helper = helpers.img_src || (depth0 != null ? depth0.img_src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_src","hash":{},"data":data}) : helper)))
    + "\" alt=\"selected-item\"></figure><article><a class=\"close\" href=\"/\">+</a><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.info : stack1), depth0))
    + "</p><footer><h2>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</h2><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.protein : stack1), depth0))
    + "</td></tr><tr><td>Fat (total)</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.fat : stack1), depth0))
    + "</td></tr><tr><td>Carbohydrate</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.carbohydrates : stack1), depth0))
    + "</td></tr><tr><td>Energy (kj)</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.energy_kj : stack1), depth0))
    + "</td></tr><tr><td>Energy (kcal)</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.energy_kcal : stack1), depth0))
    + "</td></tr><tr><td>Sugar</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.sugar : stack1), depth0))
    + "</td></tr></tbody></table></aside><div class=\"nav next\"><img src=\"images/nav-next.png\" alt=\"next\"></div></div>";
},"useData":true});

this["JST"]["item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article>	<header>		<figure>			<img src=\""
    + alias4(((helper = (helper = helpers.img_src || (depth0 != null ? depth0.img_src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_src","hash":{},"data":data}) : helper)))
    + "\" alt=\"menu-item\" />		</figure>		<h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>	</header>	<p class=\"price\">$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p>	<footer>		<a class=\"add_cart\" href=\"#\">Add to cart</a>	</footer></article>";
},"useData":true});

this["JST"]["items_in_cart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.number_of_items || (depth0 != null ? depth0.number_of_items : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"number_of_items","hash":{},"data":data}) : helper)))
    + " items</span>";
},"useData":true});