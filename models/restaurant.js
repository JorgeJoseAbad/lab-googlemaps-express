const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

/* old
const RestaurantSchema = new Schema({
  name: String,
  description: String,
});
*/

const RestaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
RestaurantSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
