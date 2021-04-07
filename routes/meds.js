const express = require('express');
const router = express.Router();
const medsCtrl = require('../controllers/meds')

router.get('/', medsCtrl.index)


module.exports = router;