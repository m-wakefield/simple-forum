const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

router.get('/',  async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
         res.json(subscribers);
        catch (error) {
            res.status(500).json({ message: error.message });
        }
       
    }
    

    res.send('List of subscribers');
})

router.get('/:id', (req, res) => {
   res.send(req.params.id)   
})

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

router.patch('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
// Export the router to be used in server.js

