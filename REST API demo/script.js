const express = require('express');  //import express
const Joi = require('joi');   //import joi
const app = express();  //create Express Application on the app variable
app.use(express.json()); //used the json file


//give data to the server using object
const customers = [
    { title: 'Roshan', id: 1 },
    { title: 'Roshani', id: 2 },
    { title: 'Ros', id: 3 },
    { title: 'Rosh', id: 4 },
    { title: 'Rosha', id: 5 }
]

//read request handlers
//display the message when the url consists of '/'
app.get('/', (req, res) => {
    res.send('Welcome to Demo REST API creation');
});

//diplay the list of customers when the url consists of api customers
app.get('/api/customers', (req, res) => {
    res.send(customers);
});

//display the information of specific customer when we mention the id
app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    //if there is no valid customer ID, then display an error with the following message
    if (!customer) res.status(404).send('Oops.. Cant find what you are looking for!');
    res.send(customer);
});

//create request handler
//create new customer information
app.post('/api/customers', (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    //increment the customer id
    const customer = {
        id: customers.lenth + 1,
        title: req.body.title
    };
    customers.push(customer);   //stack to push inside the customer and increment
    res.send(customer);     //send the response to the client that the data has been posted
});

//update request handler
//updating existing customer information
app.put('/api/customers/:id', (req, res) => {

    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) res.status(404).send('Not Fouund!');
    res.send(customer);

    const { error } = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    customers.title = req.body.title;   //stack to push inside the customer and increment
    res.send(customer);     //send the response to the client that the data has been poste
});


//delete request handler
//delete existing customer inforamtion
app.delete('/api/customers/:id', (req, res) => {

    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) res.status(404).send('Not Found');
    res.send(customer);

    const index = customers.indexOf(customer);
    customers.splice(index, 1);

    res.send(customer);     //send the response to the client that the data has been poste
});




//function validation information
function validateCustomer(customer) {
    // const schema ={
    //     title:Joi.string().min(3).required()    
    // };

    // const validation = schema.validate(req.body);
    // res.send(validation);
    // return Joi.validate(customer,schema);

    const schema = Joi.object({ title: Joi.string().min(3).required() });
    // const validation = schema.validate(req.body);
    return Joi.validate(customer, schema);
}


//port environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));


//<h2 style="font-family : Malgun Gothic; color:darkred;" > Oops.. Cant find what you are looking for!</h2>