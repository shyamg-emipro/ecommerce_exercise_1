from odoo import http
import json


class ProductController(http.Controller):

    @http.route('/custom_page', type="http", auth="public", website=True)
    def show_first_product(self):
        return http.request.render("training_examples.custom_page")

    @http.route('/product_data', type="json", auth="public", website=True)
    def show_first_product_json(self):
        product = http.request.env['product.product'].search([('website_published', '=', True)], limit=1)
        response = http.Response(template="training_examples.product_data", qcontext={'product': product})
        return response.render()

