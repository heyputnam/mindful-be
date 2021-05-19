const express = require('express');
const router = express.Router();
const cors = require('cors')
const medsCtrl = require('../../controllers/meds')

router.get('/', medsCtrl.index)

router.post('/',  medsCtrl.create)


module.exports = router;