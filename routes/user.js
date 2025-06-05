const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', (req, res) => {
  res.send('Subscribers route is alive');
});

router.post('/', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  userController.addSubscriber(req, res);
  // Here you would typically save the subscriber to a database
  console.log(`New subscriber added: ${email}`);
  
  res.status(201).json({ message: 'Subscription successful', email });
}
router.get('/:id', userController.getSubscriberById)
);

module.exports = router;
