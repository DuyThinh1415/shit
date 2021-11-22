const Foods = require('../models/Food')
const { mongooseToObject } = require('../../unti/mongoose')

class FoodController {
    show(req, res, next) {
        Foods.findOne({ slug: req.params.slug })
            .then(foods =>
                res.render('food/show', { foods: mongooseToObject(foods) })
            )
            .catch(next)
    }

    create(req, res, next) {
        res.render('food/create')
    }

    store(req, res, next) {
        const food = new Foods(req.body)
        food.save()
            .then(() => res.redirect('/'))

    }
}

module.exports = new FoodController
