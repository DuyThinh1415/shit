const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const Food = new Schema({
    name: String,
    price: String,
    type: String,
    describle: String,
    image: String,
    slug: { type: String, slug: 'name', unique: true },
    create_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Food', Food)

