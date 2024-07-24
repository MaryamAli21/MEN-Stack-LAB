
//---------modul import----------

 const express = require('express');
 const Customer = require('./customer');
 const mongoose = require('mongoose');
 const router = express.Router();


//-------database connection---------

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
  console.log('Wellcome to the CRM!');
});


  //--------routs----------------

 // Creating a new customer
 router.post('/customers', async (req, res) => {
   const { name, age } = req.body;
 
   try {
     const customer = new Customer({ name, age });
     await customer.save();
     res.send(customer);
   } catch (error) {
     console.error(error);
     res.status(500).send(error);
   }
 });
 
 // viewing  customers
 router.get('/customers', async (req, res) => {
   try {
     const customers = await Customer.find({});
     res.send(customers);
   } catch (error) {
     console.error(error);
     res.status(500).send(error);
   }
 });
 
 // Updating a customer
 router.put('/customers/:id', async (req, res) => {
   const { id } = req.params;
   const { name, age } = req.body;
 
   try {
     const customer = await Customer.findByIdAndUpdate(id, { name, age }, { new: true });
     res.send(customer);
   } catch (error) {
     console.error(error);
     res.status(500).send(error);
   }
 });
 
 // Deleting a customer
 router.delete('/customers/:id', async (req, res) => {
   const { id } = req.params;
 
   try {
     const customer = await Customer.findByIdAndDelete(id);
     res.send(customer);
   } catch (error) {
     console.error(error);
     res.status(500).send(error);
   }
 });
 