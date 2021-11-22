const Foods = require('../models/Food')
const Employees = require('../models/Employ')
const { mutipleMongooToOpject } = require('../../unti/mongoose')

class SiteController {
    //[GET] /
    home(req, res, next) {

        Employees.find({})
            .then(employees => {
                res.render('home', {
                    employees: mutipleMongooToOpject(employees)
                })
            }
            )
            .catch(next)
        //res.render('home');
    }

    //[GET] /search
    account(req, res) {
        res.render('account');
    }

    menu(req, res, next) {
        Foods.find({})
            .then(foods => {
                res.render('menu', {
                    foods: mutipleMongooToOpject(foods)
                })
            }
            )
            .catch(next)
    }
}

module.exports = new SiteController
