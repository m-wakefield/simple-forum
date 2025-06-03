const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one subscriber by ID
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber);
});

// Create a new subscriber
router.post('/', (req, res) => {
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
});

// Update a subscriber
router.patch('/:id', getSubscriber, (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }

    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a subscriber
router.delete('/:id', getSubscriber, (req, res) => {
    try {
        await res.subscriber.remove();
        res.json({ message: 'Deleted subscriber' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware to get subscriber by ID
async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.subscriber = subscriber;
    next();
}

module.exports = router;const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one subscriber by ID
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber);
});

// Create a new subscriber
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
});

// Update a subscriber
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }

    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a subscriber
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove();
        res.json({ message: 'Deleted subscriber' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware to get subscriber by ID
async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.subscriber = subscriber;
    next();
}

module.exports = router;const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one subscriber by ID
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber);
});

// Create a new subscriber
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
});

// Update a subscriber
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }

    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a subscriber
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove();
        res.json({ message: 'Deleted subscriber' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware to get subscriber by ID
async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.subscriber = subscriber;
    next();
}

module.exports = router;const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

router.get('/', (req, res) => {
    try {
        const subscribers = await Subscriber.find();
         res.json(subscribers);
        catch (error) {
            res.status(500).json({ message: error.message });
        }
       
    }
    

    res.send('List of subscribers');
})

router.get('/:id', getSubscriber, (req, res) => {
   res.json(req.subscriber.name)   
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

router.patch('/:id', getSubscriber, (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }

    try {
        const updatedSubscriber = res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

})

router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await req.subscriber.remove();
        res.json({ message: 'Deleted subscriber' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
})

function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = wait Subscriber.findById(req.params.id);
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.subscriber = subscriber;
    next();
}
module.exports = router;
// Export the router to be used in server.js

