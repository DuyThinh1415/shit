const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employ = new Schema({
    name: String,
    des: String,
    image: String,
    slug: String,
})

module.exports = mongoose.model('Employ', Employ)

