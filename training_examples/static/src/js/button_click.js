odoo.define('javascript_ecommerce_learning.button_click', function(require) {
    'use strict';
    const publicWidget = require('web.public.widget');
    var ajax = require('web.ajax');

    publicWidget.registry.show_product_data = publicWidget.Widget.extend({
        selector: '.product_div',
        events: {
            'click .product_data': 'onClickShowProduct',
        },
        onClickShowProduct: function () {
            ajax.jsonRpc('/product_data', 'call', {}).then(
            function (data) {
                document.getElementById("product").innerHTML = data;
            });
        },

    });
});