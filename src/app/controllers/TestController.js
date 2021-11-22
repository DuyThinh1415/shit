const Foods = require('../models/Food')
const { mongooseToObject, mutipleMongooToOpject } = require('../../unti/mongoose')

class TestController {
    //[GET] /main
    show_menu(req, res, next) {
        Foods.find({})
            .then(foods => {
                res.render('test/detal', {
                    foods: mutipleMongooToOpject(foods)
                })
            })
            .catch(next)
    }

    //[GET] /main/:slug
    show_detal_food(req, res, next) {
        Foods.findOne({ slug: req.params.slug })
            .then(foods =>
                res.render('test/show', { foods: mongooseToObject(foods) })
            )
            .catch(next)
    }
}

module.exports = new TestController
