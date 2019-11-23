const cacheManager = require('cache-manager');
const { cache } = require('../config/defaut')
const memoryCache = cacheManager.caching(cache);

const ProductsModel = require('../models/Products')
const productModel = new ProductsModel();

class Products {
    static get(req, res) {
        const id = req.params.id;
        const key = `product_${id}`;
        memoryCache.get(key, (err, result) => {
            if (result)
                return res.json(result);

            productModel.get(id)
                .then(product => {
                    if (!product.exists)
                        return res.sendStatus(204)

                    const productData = product.data();
                    memoryCache.set(key, productData);
                    res.json(productData);
                })
                .catch(err => {
                    res.sendStatus(500);
                    console.log(err);
                })
        })
    };

    static getAll(req, res) {
        console.log('entrou')
        const id = req.params.id;
        productModel.getAll()
            .then(Products => {
                res.json(Products.docs.map(product => ({
                    id: product.id,
                    ...product.data(),
                })));
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            })
    }

    static update(req, res) {
        const id = req.params.id;
        const data = {
            'email': req.body.email,
            'password': req.body.password,
            'name': req.body.name,
        }
        productModel.put(id, data)
            .then(data => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
                console.log(err);
            })
    }
}

module.exports = Products;