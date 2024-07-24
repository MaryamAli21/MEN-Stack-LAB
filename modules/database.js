
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//-------- schema to create, view, update, and delete documents in the database-----
module.exports = mongoose.model('Customer', customerSchema);


const customer = require('./models/customer.js');

// Create a new customer
const newCustomer = new Customer({
  name: '',
  age: '',
  id: '',
});

newCustomer.save()
  .then(() => console.log('Customer created'))
  .catch((err) => console.log(err));

User.find()
  .then((customers) => console.log(customers))
  .catch((err) => console.log(err));

customer.findOneAndUpdate({ name: 'Matt', age: '43'}, { name: 'Vivienne', age: '6' })
  .then(() => console.log('Customer updated'))
  .catch((err) => console.log(err));

customer.deleteOne({ name: 'Matt' })
  .then(() => console.log('customer deleted'))
  .catch((err) => console.log(err));
