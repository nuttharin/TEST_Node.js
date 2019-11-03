const express = require('express');
const router = express.Router();
const scgServiceController = require('../controllers/SCG');

router.get('/findXYZ',scgServiceController.getXYZ);
router.get('/FindrestaurantsByPlace',scgServiceController.getFindPlace)

module.exports = router